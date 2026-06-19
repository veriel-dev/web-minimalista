import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWorld,
} from '@tabler/icons-react';
import { cvData } from '../../../data/cv';
import { techStack, type TechItem } from '../../../data/techStack';

const cleanHost = (url: string): string => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const SKILL_CATEGORIES = [
  'Lenguajes',
  'Frontend',
  'Backend',
  'Bases de datos',
  'Herramientas',
] as const;

type SkillCategory = (typeof SKILL_CATEGORIES)[number];

const TYPE_TO_CATEGORY: Record<string, SkillCategory> = {
  Language: 'Lenguajes',
  'Frontend Library': 'Frontend',
  'Frontend Framework': 'Frontend',
  'CSS Framework': 'Frontend',
  'Build Tool': 'Frontend',
  'Backend Runtime': 'Backend',
  'Java Framework': 'Backend',
  'Node Framework': 'Backend',
  'Enterprise CMS': 'Backend',
  'SQL Database': 'Bases de datos',
  'NoSQL Database': 'Bases de datos',
  'Enterprise Database': 'Bases de datos',
  'Embedded SQL': 'Bases de datos',
  'In-memory Store': 'Bases de datos',
  ORM: 'Bases de datos',
  'Version Control': 'Herramientas',
  Containerization: 'Herramientas',
  'Edge / Hosting': 'Herramientas',
  'CI/CD': 'Herramientas',
  'Desktop Apps': 'Herramientas',
  'Game Engine': 'Herramientas',
};

const groupSkillsByCategory = (
  items: TechItem[],
): Array<{ category: SkillCategory; skills: string[] }> => {
  const map = new Map<SkillCategory, string[]>();
  for (const cat of SKILL_CATEGORIES) map.set(cat, []);
  for (const item of items) {
    const category = TYPE_TO_CATEGORY[item.type];
    if (category) map.get(category)?.push(item.name);
  }
  return SKILL_CATEGORIES.map(category => ({ category, skills: map.get(category) ?? [] })).filter(
    group => group.skills.length > 0,
  );
};

const PrintableCV = () => {
  const { header, summary, experience, education, languages, achievements } = cvData;
  const skillGroups = groupSkillsByCategory(techStack);

  return (
    <div className="hidden print:block bg-white min-h-screen text-gray-900">
      <header className="bg-gray-900 text-white px-8 py-10">
        <h1 className="text-3xl font-bold mb-1">{header.name}</h1>
        <h2 className="text-lg font-medium mb-5 opacity-90">{header.title}</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <IconMapPin className="w-4 h-4" />
            <span>{header.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconPhone className="w-4 h-4" />
            <span>{header.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconMail className="w-4 h-4" />
            <span>{header.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconBrandLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center gap-2">
            <IconBrandGithub className="w-4 h-4" />
            <span>{cleanHost(header.github)}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconWorld className="w-4 h-4" />
            <span>{cleanHost(header.website)}</span>
          </div>
        </div>
      </header>

      <main className="px-8 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            {summary.title}
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            {summary.paragraphs.map(p => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Experiencia Profesional
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
            {experience.map(job => (
              <div key={`${job.company}-${job.period}`} className="relative mb-6 last:mb-0">
                <div
                  className="absolute -left-6 top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full"
                  style={{ transform: 'translateX(-4px)' }}
                />
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
                  {job.achievements.map(a => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Formación Académica
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
            {education.map(edu => (
              <div key={edu.degree} className="relative mb-6 last:mb-0">
                <div
                  className="absolute -left-6 top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full"
                  style={{ transform: 'translateX(-4px)' }}
                />
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{edu.institution}</p>
                <ul className="text-xs text-gray-600 leading-relaxed list-disc ml-4 space-y-0.5">
                  {edu.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
            Competencias Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {skillGroups.map(group => (
              <div key={group.category} className="border-l-2 border-gray-200 pl-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {group.skills.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
              Idiomas
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {languages.map(lng => (
                <li key={lng.language}>
                  <span className="font-medium">{lng.language}:</span> {lng.level}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900 inline-block">
              Logros
            </h2>
            <ul className="text-xs text-gray-600 leading-relaxed list-disc ml-4 space-y-1">
              {achievements.slice(0, 4).map(a => (
                <li key={a.text}>{a.text}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrintableCV;
