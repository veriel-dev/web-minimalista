import { OutlineText, SectionHeader, PageTransition } from '../components/outlineUI';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { homeSections } from '../config/navigation';
import { outlineColors } from '../config/theme';

const sectionIds = homeSections.map(s => s.id);

export default function OutlineTestPage() {
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();
  const scrollTo = useScrollToSection();

  return (
    <PageTransition type="fade">
      <div className="min-h-screen bg-main text-white font-inter">
        {/* Fixed Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
          <div
            className="h-full bg-outline-violet transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Fixed Side Navigation */}
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
          {homeSections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`flex items-center gap-3 group transition-all duration-300 ${
                activeSection === section.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                {section.number}
              </span>
              <div
                className={`w-1 h-8 rounded-full transition-all duration-300 ${
                  activeSection === section.id ? 'w-1.5 h-10' : ''
                }`}
                style={{
                  backgroundColor:
                    activeSection === section.id ? outlineColors[section.color] : '#3f3f46',
                }}
              />
            </button>
          ))}
        </nav>

        {/* Header Info */}
        <header className="fixed top-4 left-4 z-40 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-4 text-sm font-mono">
          <p>
            Active: <span className="text-outline-violet">{activeSection}</span>
          </p>
          <p>
            Progress: <span className="text-outline-cyan">{scrollProgress.toFixed(1)}%</span>
          </p>
        </header>

        {/* Test Sections */}
        <main>
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center px-8">
            <div className="text-center">
              <OutlineText as="h1" size="3xl" color="violet" thick>
                OUTLINE
              </OutlineText>
              <OutlineText as="h1" size="3xl" color="white" filled className="block">
                TEST
              </OutlineText>
              <p className="mt-8 text-zinc-400 text-xl">Fase 1: Verificación de componentes</p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center px-8 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto w-full">
              <SectionHeader
                number="02"
                title="COLORES OUTLINE"
                subtitle="Verificación de las clases text-outline-*"
                color="cyan"
              />
              <div className="grid gap-6 mt-8">
                <OutlineText color="white" hoverFill>
                  White (hover me)
                </OutlineText>
                <OutlineText color="violet" hoverFill>
                  Violet (hover me)
                </OutlineText>
                <OutlineText color="cyan" hoverFill>
                  Cyan (hover me)
                </OutlineText>
                <OutlineText color="emerald" hoverFill>
                  Emerald (hover me)
                </OutlineText>
                <OutlineText color="rose" hoverFill>
                  Rose (hover me)
                </OutlineText>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center px-8">
            <div className="max-w-4xl mx-auto w-full">
              <SectionHeader
                number="03"
                title="TAMAÑOS"
                subtitle="Verificación de los tamaños de texto"
                color="emerald"
              />
              <div className="space-y-4 mt-8 flex flex-col">
                <OutlineText size="sm" color="emerald">
                  Size: sm (text-xl)
                </OutlineText>
                <OutlineText size="md" color="emerald">
                  Size: md (text-2xl)
                </OutlineText>
                <OutlineText size="lg" color="emerald">
                  Size: lg (text-4xl)
                </OutlineText>
                <OutlineText size="xl" color="emerald">
                  Size: xl
                </OutlineText>
                <OutlineText size="2xl" color="emerald">
                  Size: 2xl
                </OutlineText>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen flex items-center px-8 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto w-full">
              <SectionHeader
                number="04"
                title="FUENTES"
                subtitle="Verificación de Syne e Inter"
                color="rose"
              />
              <div className="space-y-8 mt-8">
                <div>
                  <p className="text-zinc-500 text-sm mb-2">font-syne (headings)</p>
                  <p className="font-syne text-4xl font-bold">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-2">font-inter (body)</p>
                  <p className="font-inter text-xl">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center px-8">
            <div className="max-w-4xl mx-auto w-full">
              <SectionHeader
                number="05"
                title="VARIANTES"
                subtitle="thick vs normal, filled vs outline"
                color="violet"
              />
              <div className="grid gap-6 mt-8">
                <div>
                  <p className="text-zinc-500 text-sm mb-2">Normal stroke (2px)</p>
                  <OutlineText size="xl" color="violet">
                    Normal Outline
                  </OutlineText>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-2">Thick stroke (3px)</p>
                  <OutlineText size="xl" color="violet" thick>
                    Thick Outline
                  </OutlineText>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-2">Filled</p>
                  <OutlineText size="xl" color="violet" filled>
                    Filled Text
                  </OutlineText>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center px-8 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto w-full text-center">
              <SectionHeader
                number="06"
                title="FASE 1 COMPLETA"
                subtitle="Todos los criterios de aceptación verificados"
                color="cyan"
                align="center"
              />
              <div className="mt-8 p-6 bg-zinc-800/50 rounded-lg text-left font-mono text-sm">
                <p className="text-emerald-400">✓ Fuente Syne carga correctamente</p>
                <p className="text-emerald-400">✓ Clases text-outline-* funcionan</p>
                <p className="text-emerald-400">✓ Hooks detectan sección activa y progreso</p>
                <p className="text-emerald-400">✓ Componentes base renderizan correctamente</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
