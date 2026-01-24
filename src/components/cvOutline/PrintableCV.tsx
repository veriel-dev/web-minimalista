import { MapPin, Phone, Mail, Linkedin, Github, Globe } from 'lucide-react';
import type { CVData } from '../../data/pages/cv.outline';

interface PrintableCVProps {
  data: CVData;
}

export function PrintableCV({ data }: PrintableCVProps) {
  const { header, summary, experience, education, skills, languages, achievements } = data;

  return (
    <div className="hidden print:block bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white px-8 py-10">
        <h1 className="text-3xl font-bold mb-1">{header.name}</h1>
        <h2 className="text-lg font-medium mb-5">{header.title}</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{header.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{header.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{header.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>veriel.dev</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-8 py-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Resumen Profesional
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            {summary.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Experiencia Profesional
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
            {experience.map((job, index) => (
              <div key={index} className="relative mb-6 last:mb-0">
                <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full transform -translate-x-1" />
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{job.role}</h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {job.company}
                  {job.project && <span className="text-gray-400"> · {job.project}</span>}
                </p>
                <ul className="text-xs text-gray-600 leading-relaxed list-disc ml-4 space-y-0.5">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Formación Académica
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
            {education.map((edu, index) => (
              <div key={index} className="relative mb-6 last:mb-0">
                <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full transform -translate-x-1" />
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{edu.institution}</p>
                <ul className="text-xs text-gray-600 leading-relaxed list-disc ml-4 space-y-0.5">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Competencias Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="space-y-0.5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="text-xs text-gray-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages & Achievements row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
              Idiomas
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {languages.map((lang, index) => (
                <li key={index}>
                  <span className="font-medium">{lang.language}:</span> {lang.level}
                </li>
              ))}
            </ul>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
              Logros
            </h2>
            <ul className="text-xs text-gray-600 leading-relaxed list-disc ml-4 space-y-1">
              {achievements.slice(0, 4).map((achievement, index) => (
                <li key={index}>{achievement.text}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PrintableCV;
