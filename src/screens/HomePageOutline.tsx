import { Helmet } from 'react-helmet-async';
import { MainLayoutOutline, ScrollSection } from '../components/ui';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  TechStackSection,
  ProjectsPreviewSection,
  ContactSection,
} from '../components/home';
import { homeOutlineData } from '../data/pages/home.outline';

export default function HomePageOutline() {
  const { hero, about, experience, techStack, projectsPreview, contact } = homeOutlineData;

  return (
    <>
      <Helmet>
        <title>Veriel.dev | Senior Software Engineer</title>
        <meta
          name="description"
          content="Portfolio de Víctor Ordiales — Software Engineer. Desarrollo web empresarial con React, TypeScript, Spring y más."
        />
        <meta
          name="keywords"
          content="software engineer, desarrollo web, react, typescript, spring, portfolio"
        />
        <meta property="og:title" content="Veriel.dev | Senior Software Engineer" />
        <meta
          property="og:description"
          content="Ingeniería de software para entornos empresariales y productos web"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://veriel.dev" />
        <link rel="canonical" href="https://veriel.dev" />
      </Helmet>

      <MainLayoutOutline showProgress showNav showFooter pageType="home">
        {/* Hero Section */}
        <ScrollSection id="hero" fullHeight centered>
          <HeroSection
            name={hero.name}
            title={hero.title}
            titleHighlight={hero.titleHighlight}
            subtitle={hero.subtitle}
            ctaPrimary={hero.ctaPrimary}
            ctaSecondary={hero.ctaSecondary}
          />
        </ScrollSection>

        {/* About Section */}
        <ScrollSection id="about" fullHeight className="flex items-center bg-zinc-900/30">
          <AboutSection title={about.title} paragraphs={about.paragraphs} stats={about.stats} />
        </ScrollSection>

        {/* Experience Section */}
        <ScrollSection id="experience" fullHeight className="flex items-center">
          <ExperienceSection title={experience.title} experiences={experience.items} />
        </ScrollSection>

        {/* Tech Stack Section */}
        <ScrollSection id="skills" fullHeight className="flex items-center bg-zinc-900/30">
          <TechStackSection items={techStack.items} />
        </ScrollSection>

        {/* Projects Preview Section */}
        <ScrollSection id="projects" fullHeight className="flex items-center">
          <ProjectsPreviewSection
            projects={projectsPreview.items}
            viewAllLabel={projectsPreview.viewAllLabel}
            viewAllHref={projectsPreview.viewAllHref}
          />
        </ScrollSection>

        {/* Contact Section */}
        <ScrollSection id="contact" fullHeight className="flex items-center bg-zinc-900/30">
          <ContactSection
            title={contact.title}
            subtitle={contact.subtitle}
            email={contact.email}
            socialLinks={contact.socialLinks}
          />
        </ScrollSection>
      </MainLayoutOutline>
    </>
  );
}
