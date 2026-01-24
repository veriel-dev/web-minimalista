import { memo, useMemo } from 'react';
import { MainLayoutOutline, Breadcrumb } from '../components/outlineUI';
import {
  HeaderSection,
  TimelineSection,
  SkillsSection,
  DownloadButton,
  PrintableCV,
} from '../components/cvOutline';
import { HeadSEO } from '../components';
import { cvData } from '../data/pages/cv.outline';
import { Briefcase, GraduationCap } from 'lucide-react';

const CVPageOutline = memo(() => {
  const {
    metadata,
    header,
    summary,
    experience,
    education,
    skills,
    languages,
    achievements,
  } = cvData;

  const breadcrumbItems = [
    { label: 'Inicio', href: '/outline' },
    { label: 'CV', href: '/outline/cv' },
  ];

  const experienceItems = useMemo(() =>
    experience.map(job => ({
      title: job.role,
      subtitle: job.project ? `${job.company} · ${job.project}` : job.company,
      period: job.period,
      details: job.achievements,
    })),
    [experience]
  );

  const educationItems = useMemo(() =>
    education.map(edu => ({
      title: edu.degree,
      subtitle: edu.institution,
      period: edu.period,
      details: edu.highlights,
    })),
    [education]
  );

  return (
    <>
      <HeadSEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />

      {/* Web version - hidden when printing */}
      <div className="print:hidden">
        <MainLayoutOutline
          pageType="static"
          showProgress={false}
          footerVariant="minimal"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
            <Breadcrumb items={breadcrumbItems} className="mb-8" />

            <HeaderSection header={header} summary={summary} />

            <TimelineSection
              number="01"
              sectionTitle="Experiencia Profesional"
              color="emerald"
              icon={Briefcase}
              items={experienceItems}
            />

            <TimelineSection
              number="02"
              sectionTitle="Formación Académica"
              color="cyan"
              icon={GraduationCap}
              items={educationItems}
            />

            <SkillsSection
              skills={skills}
              languages={languages}
              achievements={achievements}
            />
            <DownloadButton className="mt-12" />
          </div>
        </MainLayoutOutline>
      </div>

      {/* Print version - professional CV layout */}
      <PrintableCV data={cvData} />

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          html, body {
            width: 210mm;
            height: 297mm;
          }
          ul, ol {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          h1, h2, h3 {
            page-break-after: avoid;
            break-after: avoid;
          }
        }
      `}</style>
    </>
  );
});

export default CVPageOutline;
