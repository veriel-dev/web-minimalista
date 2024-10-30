
import {
    GraduationCap,
    Award, 
} from 'lucide-react';
import ButtonDownload from '../components/cvPage/ButtonDownload';
import HeaderSection from '../components/cvPage/HeaderSection';
import AboutMeComponent from '../components/cvPage/AboutMeComponent';
import ExperienceComponent from '../components/cvPage/ExperienceComponent';
import SkillsComponents from '../components/cvPage/SkillsComponents';

const CurriculumVitae = () => {

    return (
        <>
            <ButtonDownload />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 print:bg-white print:p-0">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden print:shadow-none">
                    {/* Header Section */}
                    <HeaderSection />

                    <div className="p-8">
                        {/* El resto del contenido del CV permanece igual... */}
                        
                        <AboutMeComponent />
                        <ExperienceComponent />

                        {/* Skills Section */}
                        <SkillsComponents />

                        {/* Education Section with print styles */}
                        <section className="mb-12">
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="w-5 h-5 text-blue-600" />
                                <h2 className="text-2xl font-bold text-gray-800">Formación Académica</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 print:border-gray-200">
                                    <h3 className="text-xl font-semibold text-blue-600">Grado en Física</h3>
                                    <p className="text-gray-700 font-medium">Universidad de Extremadura</p>
                                    <p className="text-gray-500 text-sm mb-3">2014 - 2021</p>
                                    <p className="text-gray-700">
                                        Especialización en física teórica y computacional. Formación en programación
                                        científica con Python y Fortran.
                                    </p>
                                </div>

                                {/* Similar print styles for other education items... */}
                            </div>
                        </section>

                        {/* Certifications Section with print styles */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="w-5 h-5 text-blue-600" />
                                <h2 className="text-2xl font-bold text-gray-800">Certificaciones</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Master en JavaScript",
                                        desc: "JS, jQuery, Angular, NodeJS"
                                    },
                                    {
                                        title: "Master en Python",
                                        desc: "Python3, Django, Flask, Tkinter"
                                    },
                                    {
                                        title: "Master en CSS3",
                                        desc: "Responsive, SASS, Flexbox, Grid"
                                    },
                                    {
                                        title: "Desarrollo Web Completo",
                                        desc: "HTML5, CSS3, JS, PHP, MySQL"
                                    }
                                ].map((cert, index) => (
                                    <div key={index}
                                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 shadow-sm print:bg-white print:border print:border-gray-200">
                                        <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                                        <p className="text-gray-600 text-sm">{cert.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
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
}

export default CurriculumVitae