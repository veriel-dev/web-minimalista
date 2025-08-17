import { Mail, Github, Globe, MapPin, Phone, LinkedinIcon } from 'lucide-react';
import { cvPage } from '../data';
import { HeadSEO } from './seo';
import ButtonDownload from './cvPage/ButtonDownload';

const CVComponent = () => {
  const {
    experience,
    education,
    metadata,
    header,
    about,
    skills,
    languages,
    achievements,
  } = cvPage;

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
          {/* Header */}
          <div className="bg-gray-900 text-white px-8 py-12 print:bg-dark-800">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-2">{header.name}</h1>
              <h2 className="text-xl font-medium mb-6">{header.job}</h2>
              <div className="flex flex-wrap gap-4 text-sm flex-col">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{header.street}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{header.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:{header.email}">{header.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <a href={header.linkedin} target="_blank" rel="noreferrer">
                    {header.linkedin}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href={header.gitHub} target="_blank" rel="noreferrer">
                    {header.gitHub}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a href={header.web} target="_blank" rel="noreferrer">
                    {header.web}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-12 py-12">
            {/* Professional Summary */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                Resumen Profesional
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">{about.text}</p>
              <br />
              <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">{about.text1}</p>
            </section>
            {/* Professional Experience */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                Experiencia Profesional
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {experience.jobs.map((exp, index) => (
                  <div key={index} className="relative mb-12  last:mb-0 last:pb-0">
                    <div className="absolute -left-8 top-2 w-2.5 h-2.5 bg-gray-900 rounded-full transform -translate-x-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.item}</h3>
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <span className="text-base font-medium text-gray-600">{exp.company}</span>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                          {exp.period || 'Fecha no especificada'}
                        </span>
                      </div>
                    </div>
                    <ul className="ttext-sm text-gray-600 leading-relaxed list-disc mt-4">
                      {exp.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex} className="list-item ml-4">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            {/* Education */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                Resumen Académica
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {education.jobs.map((exp, index) => (
                  <div key={index} className="relative mb-12  last:mb-0 last:pb-0">
                    <div className="absolute -left-8 top-2 w-2.5 h-2.5 bg-gray-900 rounded-full transform -translate-x-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.item}</h3>
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <span className="text-base font-medium text-gray-600">{exp.company}</span>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                          {exp.period || 'Fecha no especificada'}
                        </span>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 leading-relaxed list-disc mt-4">
                      {exp.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex} className="list-item ml-4">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                Competencias Técnicas
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="grid grid-cols-2 gap-10">
                {skills.tecs.map((category, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      {category.title}
                    </h3>
                    <div className="space-y-1">
                      {category.tec.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-gray-600 leading-7">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Idiomas */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                {languages.title}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative mb-12  last:mb-0 last:pb-0">
                  <ul className="ttext-sm text-gray-600 leading-relaxed mt-4">
                    {languages.expertise.map((skill, skillIndex) => (
                      <li key={skillIndex} className="list-disc list-inside list-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            {/* Logros */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                {achievements.title}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative mb-12  last:mb-0 last:pb-0">
                  <ul className="text-sm text-gray-600 leading-relaxed list-disc mt-4">
                    {achievements.expertise.map((skill, skillIndex) => (
                      <li key={skillIndex} className="list-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            {/* <section className="mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-7 relative pb-3">
                Proyectos Destacados
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gray-900"></div>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 p-8 bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex gap-6">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:opacity-70 transition-opacity duration-200"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
          </main>

          {/* Footer */}
          {/* <footer className="bg-gray-100 px-12 py-10 border-t border-gray-200 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Disponible para Nuevos Proyectos
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interesado en colaborar en proyectos desafiantes que requieran soluciones técnicas
              innovadoras. Disponible para oportunidades de desarrollo full-stack, consultoría
              técnica y colaboraciones profesionales.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <a
                href="mailto:verieldonato@gmail.com"
                className="inline-block bg-gray-900 text-white px-8 py-3.5 font-medium text-sm hover:bg-gray-800 transition-colors duration-200 border-2 border-gray-900"
              >
                Contactar
              </a>
              <a
                href="https://veriel.dev"
                className="inline-block bg-transparent text-gray-900 px-8 py-3.5 font-medium text-sm hover:bg-gray-900 hover:text-white transition-colors duration-200 border-2 border-gray-900"
              >
                Ver Portafolio
              </a>
            </div>
          </footer> */}
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
};

export default CVComponent;
