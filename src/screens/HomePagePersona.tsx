import { useState } from 'react';
import { ComicBackground } from '../components/persona/primitives';
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
  ProjectDetail,
  ProjectsPanel,
  SkillsPanel,
  TakeoverFrame,
} from '../components/persona/sections';
import { personaSections, type PersonaSectionId } from '../data/pages/home.persona';
import type { SectionColor } from '../data/colors';
import type { Project } from '../data/projects';

const PROJECT_ACCENTS: SectionColor[] = ['violet', 'cyan', 'emerald', 'rose', 'amber', 'blue'];

const HomePagePersona = () => {
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<PersonaSectionId>('hero');
  const [openSection, setOpenSection] = useState<PersonaSectionId | null>(null);
  const [openProject, setOpenProject] = useState<{ project: Project; color: SectionColor } | null>(
    null,
  );

  const hoveredSection = personaSections.find(s => s.id === hovered) ?? personaSections[0];

  const handleNavigate = (id: PersonaSectionId) => {
    setOpenSection(id);
  };

  const handleOpenProject = (project: Project) => {
    const featured = personaSections.findIndex(s => s.id === 'projects');
    setOpenProject({
      project,
      color: PROJECT_ACCENTS[featured % PROJECT_ACCENTS.length],
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PrintableCV />

      <div className="screen-only">
        <ComicBackground />

        {!entered && <Splash onEnter={() => setEntered(true)} />}

        {entered && (
          <div
            className="relative z-10 flex flex-col"
            style={{ minHeight: '100vh', padding: '18px clamp(24px, 4vw, 60px) 12px' }}
          >
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
                className="flex flex-col justify-center self-center"
                style={{ gap: '13px', width: 'min(46vw, 560px)', flex: '1 1 auto' }}
              >
                {personaSections.map((s, i) => (
                  <FanReveal key={s.id} index={i}>
                    <FanItem
                      section={s}
                      active={hovered === s.id}
                      onHover={() => setHovered(s.id)}
                      onOpen={() => setOpenSection(s.id)}
                    />
                  </FanReveal>
                ))}
              </nav>
            </div>

            <div className="flex items-end justify-between gap-5" style={{ padding: '0 0 8px' }}>
              <HudMoney />
              <HudParty />
            </div>

            <MenuFooter />
          </div>
        )}

        {openSection && (
          <TakeoverFrame sectionId={openSection} onClose={() => setOpenSection(null)}>
            {openSection === 'hero' && <HeroPanel onNavigate={handleNavigate} />}
            {openSection === 'about' && <AboutPanel />}
            {openSection === 'experience' && <CVPanel />}
            {openSection === 'skills' && <SkillsPanel />}
            {openSection === 'projects' && <ProjectsPanel onOpenProject={handleOpenProject} />}
            {openSection === 'contact' && <ContactPanel />}
          </TakeoverFrame>
        )}

        {openProject && (
          <ProjectDetail
            project={openProject.project}
            color={openProject.color}
            onClose={() => setOpenProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePagePersona;
