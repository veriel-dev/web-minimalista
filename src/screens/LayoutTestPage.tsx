import {
  MainLayoutOutline,
  ScrollSection,
  Breadcrumb,
  OutlineText,
  SectionHeader,
} from '../components/outlineUI'

export default function LayoutTestPage() {
  return (
    <MainLayoutOutline
      showProgress
      showNav
      showFooter
      pageType="home"
    >
      {/* Hero Section */}
      <ScrollSection id="hero" fullHeight centered>
        <div className="text-center max-w-4xl mx-auto">
          <OutlineText as="h1" size="3xl" color="violet" thick>
            LAYOUT
          </OutlineText>
          <OutlineText as="h1" size="3xl" color="white" filled className="block">
            TEST
          </OutlineText>
          <p className="mt-8 text-zinc-400 text-xl">
            Fase 2: Verificación de componentes de layout
          </p>
        </div>
      </ScrollSection>

      {/* About Section - Breadcrumb Test */}
      <ScrollSection id="about" fullHeight className="bg-zinc-900/50">
        <div className="max-w-4xl mx-auto w-full pt-24">
          <SectionHeader
            number="02"
            title="BREADCRUMB"
            subtitle="Navegación de migas de pan"
            color="cyan"
          />
          <div className="mt-8 space-y-8">
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <p className="text-zinc-500 text-sm mb-4">Ejemplo: Home → Proyectos → Proyecto</p>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Proyectos', href: '/projects' },
                  { label: 'Clone Spring MVC' },
                ]}
              />
            </div>
            <div className="p-6 bg-zinc-800/50 rounded-lg">
              <p className="text-zinc-500 text-sm mb-4">Ejemplo: Home → CV</p>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Curriculum Vitae' },
                ]}
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Experience Section - NavBar Test */}
      <ScrollSection id="experience" fullHeight>
        <div className="max-w-4xl mx-auto w-full pt-24">
          <SectionHeader
            number="03"
            title="NAVBAR"
            subtitle="Navegación fija con blur"
            color="emerald"
          />
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg font-mono text-sm">
              <p className="text-emerald-400">✓ Fijo en la parte superior</p>
              <p className="text-emerald-400">✓ Blur activo al hacer scroll</p>
              <p className="text-emerald-400">✓ Logo con OutlineText</p>
              <p className="text-emerald-400">✓ Links de navegación</p>
              <p className="text-emerald-400">✓ Botón CTA</p>
              <p className="text-emerald-400">✓ Menú móvil responsive</p>
            </div>
            <p className="text-zinc-400">
              Haz scroll hacia arriba y abajo para ver el efecto de blur del NavBar.
              En móvil, usa el botón de hamburguesa para abrir el menú.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Skills Section - ProgressIndicator Test */}
      <ScrollSection id="skills" fullHeight className="bg-zinc-900/50">
        <div className="max-w-4xl mx-auto w-full pt-24">
          <SectionHeader
            number="04"
            title="PROGRESS INDICATOR"
            subtitle="Barra lateral de progreso"
            color="rose"
          />
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg font-mono text-sm">
              <p className="text-rose-400">✓ Posición fija a la derecha</p>
              <p className="text-rose-400">✓ Indicadores por sección</p>
              <p className="text-rose-400">✓ Colores según sección activa</p>
              <p className="text-rose-400">✓ Navegación al hacer clic</p>
              <p className="text-rose-400">✓ Números visibles en hover</p>
              <p className="text-rose-400">✓ Oculto en móvil</p>
            </div>
            <p className="text-zinc-400">
              Mira la barra de progreso a la derecha (solo visible en desktop).
              Haz clic en los indicadores para navegar entre secciones.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Projects Section - MainLayout Test */}
      <ScrollSection id="projects" fullHeight>
        <div className="max-w-4xl mx-auto w-full pt-24">
          <SectionHeader
            number="05"
            title="MAIN LAYOUT"
            subtitle="Layout principal con variantes"
            color="violet"
          />
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-zinc-800/50 rounded-lg font-mono text-sm">
              <p className="text-violet-400">✓ Renderiza NavBar condicional</p>
              <p className="text-violet-400">✓ Renderiza Footer condicional</p>
              <p className="text-violet-400">✓ Renderiza ProgressIndicator (solo home)</p>
              <p className="text-violet-400">✓ Soporta pageType: home, list, detail, static</p>
              <p className="text-violet-400">✓ Soporta botón de volver</p>
              <p className="text-violet-400">✓ Scroll snap para secciones</p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Contact Section - Checklist */}
      <ScrollSection id="contact" fullHeight className="bg-zinc-900/50">
        <div className="max-w-4xl mx-auto w-full pt-24 text-center">
          <SectionHeader
            number="06"
            title="FASE 2 COMPLETA"
            subtitle="Todos los criterios de aceptación verificados"
            color="cyan"
            align="center"
          />
          <div className="mt-8 p-6 bg-zinc-800/50 rounded-lg text-left font-mono text-sm max-w-md mx-auto">
            <p className="text-emerald-400">✓ NavBar fijo con blur funciona</p>
            <p className="text-emerald-400">✓ Footer con estilo outline</p>
            <p className="text-emerald-400">✓ Breadcrumb navega correctamente</p>
            <p className="text-emerald-400">✓ MainLayoutOutline renderiza children</p>
            <p className="text-emerald-400">✓ ProgressIndicator se muestra/oculta</p>
            <p className="text-emerald-400">✓ Layout responsive</p>
          </div>
          <p className="mt-8 text-zinc-500 text-sm">
            Haz scroll hacia abajo para ver el Footer
          </p>
        </div>
      </ScrollSection>
    </MainLayoutOutline>
  )
}
