import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';

interface TechDetail {
  name: string;
  reason: string;
}

interface TechStackSectionProps {
  technologies: string[];
  techDetails?: TechDetail[];
  className?: string;
}

export function TechStackSection({ technologies, techDetails, className }: TechStackSectionProps) {
  return (
    <section className={cn('mb-16 sm:mb-24', className)}>
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
        02 / Tech Stack
      </p>
      <h2 className="font-black font-syne leading-none mb-8">
        <OutlineText as="span" size="xl" color="emerald" hoverFill>
          TECNOLOGÍAS
        </OutlineText>
      </h2>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-3 mb-10">
        {technologies.map(tech => (
          <span
            key={tech}
            className="px-4 py-2 border border-zinc-700 text-zinc-300 font-mono text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tech details */}
      {techDetails && techDetails.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techDetails.map((tech, index) => (
            <div
              key={tech.name}
              className="p-6 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <span className="text-zinc-600 text-xs font-mono mb-2 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white font-syne font-bold text-lg mb-2">{tech.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{tech.reason}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TechStackSection;
