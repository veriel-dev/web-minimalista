import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ComicBackground, Wipe } from '../components/persona/primitives';
import {
  FanItem,
  FanReveal,
  HudMoney,
  HudParty,
  MenuFooter,
  MenuHeader,
  MenuStage,
  Splash,
} from '../components/persona/menu';
import {
  AboutPanel,
  ContactPanel,
  CVPanel,
  HeroPanel,
  PrintableCV,
  ProjectsPanel,
  SkillsPanel,
  TakeoverFrame,
} from '../components/persona/sections';

const ProjectDetail = lazy(() => import('../components/persona/sections/ProjectDetail'));
import { personaSections, type PersonaSectionId } from '../data/pages/home.persona';
import type { SectionColor } from '../data/colors';
import type { Project } from '../data/projects';
import { useSfx } from '../hooks/useSfx';

const PROJECT_ACCENTS: SectionColor[] = ['violet', 'cyan', 'emerald', 'rose', 'amber', 'blue'];

const HomePagePersona = () => {
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<PersonaSectionId>('hero');
  const [openSection, setOpenSection] = useState<PersonaSectionId | null>(null);
  const [openProject, setOpenProject] = useState<{ project: Project; color: SectionColor } | null>(
    null,
  );
  const [wipe, setWipe] = useState<{ label: string | null } | null>(null);
  const { muted, toggleMute, tick, confirm } = useSfx();

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clearTimers = useCallback(() => {
    timersRef.current.forEach(id => clearTimeout(id));
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const hoveredSection = personaSections.find(s => s.id === hovered) ?? personaSections[0];

  const documentTitle = useMemo(() => {
    const base = 'Veriel.dev — Phantom Menu';
    if (openProject) return `${openProject.project.title} · ${base}`;
    if (openSection) {
      const label = personaSections.find(s => s.id === openSection)?.label;
      if (label) return `${label} · ${base}`;
    }
    return base;
  }, [openProject, openSection]);

  const navTo = useCallback(
    (id: PersonaSectionId | null) => {
      confirm();
      clearTimers();
      const target = id ? personaSections.find(s => s.id === id) : null;
      setWipe({ label: target ? target.label : null });
      timersRef.current = [
        setTimeout(() => setOpenSection(id), 520),
        setTimeout(() => setWipe(null), 1150),
      ];
    },
    [clearTimers, confirm],
  );

  const handleHover = useCallback(
    (id: PersonaSectionId) => {
      if (id !== hovered) {
        setHovered(id);
        tick();
      }
    },
    [hovered, tick],
  );

  const handleOpenProject = useCallback(
    (project: Project) => {
      confirm();
      const idx = personaSections.findIndex(s => s.id === 'projects');
      setOpenProject({
        project,
        color: PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length],
      });
    },
    [confirm],
  );

  const handleCloseProject = useCallback(() => {
    confirm();
    setOpenProject(null);
  }, [confirm]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openProject) {
        if (e.key === 'Escape') handleCloseProject();
        return;
      }
      if (openSection) {
        if (e.key === 'Escape') navTo(null);
        return;
      }
      if (!entered) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setEntered(true);
        }
        return;
      }
      const idx = personaSections.findIndex(s => s.id === hovered);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleHover(personaSections[(idx + 1) % personaSections.length].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleHover(
          personaSections[(idx - 1 + personaSections.length) % personaSections.length].id,
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        navTo(hovered);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entered, handleCloseProject, handleHover, hovered, navTo, openProject, openSection]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>

      <PrintableCV />

      <div className="screen-only">
        <ComicBackground />

        {!entered && <Splash onEnter={() => setEntered(true)} />}

        {entered && (
          <div
            className="relative z-10 flex flex-col"
            style={{ minHeight: '100vh', padding: '18px clamp(24px, 4vw, 60px) 12px' }}
          >
            <a href="#main-menu" className="p5-skip-link">
              Saltar al menú
            </a>
            <MenuHeader />

            <div
              className="flex items-stretch justify-between mx-auto w-full"
              style={{
                flex: 1,
                maxWidth: '1140px',
                gap: 'clamp(20px, 3vw, 48px)',
                paddingTop: '6px',
                minHeight: 0,
              }}
            >
              <MenuStage section={hoveredSection} />

              <nav
                id="main-menu"
                aria-label="Secciones del portfolio"
                className="flex flex-col justify-center self-center"
                style={{ gap: '13px', width: 'min(46vw, 560px)', flex: '1 1 auto' }}
              >
                {personaSections.map((s, i) => (
                  <FanReveal key={s.id} index={i}>
                    <FanItem
                      section={s}
                      active={hovered === s.id}
                      onHover={() => handleHover(s.id)}
                      onOpen={() => navTo(s.id)}
                    />
                  </FanReveal>
                ))}
              </nav>
            </div>

            <div className="flex items-end justify-between gap-5" style={{ padding: '0 0 8px' }}>
              <HudMoney />
              <HudParty />
            </div>

            <MenuFooter muted={muted} onToggleMute={toggleMute} />
          </div>
        )}

        {openSection && (
          <TakeoverFrame sectionId={openSection} onClose={() => navTo(null)}>
            {openSection === 'hero' && <HeroPanel onNavigate={navTo} />}
            {openSection === 'about' && <AboutPanel />}
            {openSection === 'experience' && <CVPanel />}
            {openSection === 'skills' && <SkillsPanel />}
            {openSection === 'projects' && <ProjectsPanel onOpenProject={handleOpenProject} />}
            {openSection === 'contact' && <ContactPanel />}
          </TakeoverFrame>
        )}

        {openProject && (
          <Suspense fallback={null}>
            <ProjectDetail
              project={openProject.project}
              color={openProject.color}
              onClose={handleCloseProject}
            />
          </Suspense>
        )}

        {wipe && <Wipe label={wipe.label} />}
      </div>
    </div>
  );
};

export default HomePagePersona;
