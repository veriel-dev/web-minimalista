
import ButtonDownload from '../components/cvPage/ButtonDownload';
import HeaderSection from '../components/cvPage/HeaderSection';
import AboutMeComponent from '../components/cvPage/AboutMeComponent';
import TimeLineComponent from '../components/cvPage/TimeLineComponent';
import SkillsComponents from '../components/cvPage/SkillsComponents';
import { cvPage } from '../data/pages/cv';
import IdiomasComponent from '../components/cvPage/IdiomasComponent';
import LogrosComponent from '../components/cvPage/LogrosComponent';
import { memo } from 'react';
import { HeadSEO } from '../components';

const CurriculumVitae = memo(() => {
    const { experience, education } = cvPage

    return (
        <>
            <HeadSEO
                title={"Veriel Dev | Curriculum Vitae "}
                description={"Curriculum Vitae del desarrollador full stack Veriel.dev"}
                keywords={"desarrollador full stack, desarrollo web, frontend, backend, cv, bases de datos"}
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
                        <IdiomasComponent />
                        <LogrosComponent />
                    </div>
                </div>
            </div>

            <style>{`
                @media print {
                    @page {
                        margin: 0.5cm;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
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
    )
})

export default CurriculumVitae