import ButtonDownload from '../components/cvPage/ButtonDownload';
import HeaderSection from '../components/cvPage/HeaderSection';
import AboutMeComponent from '../components/cvPage/AboutMeComponent';
import TimeLineComponent from '../components/cvPage/TimeLineComponent';
import SkillsComponents from '../components/cvPage/SkillsComponents';

import LanguagesComponent from '../components/cvPage/LanguagesComponent';
import { memo } from 'react';
import { HeadSEO } from '../components';
import { cvPage } from '../data';
import AchievementsComponent from '../components/cvPage/AchievementsComponent';

const CurriculumVitae = memo(() => {
  const { experience, education, metadata } = cvPage;

  return (
    <>
      <HeadSEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <ButtonDownload />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 print:bg-white print:p-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden print:shadow-none">
          <HeaderSection />

          <div className="p-8">
            <AboutMeComponent />
            <TimeLineComponent elements={experience} />
            <TimeLineComponent elements={education} />
            <SkillsComponents />
            <LanguagesComponent />
            <AchievementsComponent />
          </div>
        </div>
      </div>

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
                    .print\\:bg-white {
                        background: white !important;
                    }
                    .print\\:border {
                        border: 1px solid #e5e7eb !important;
                    }
                }
            `}</style>
    </>
  );
});

export default CurriculumVitae;
