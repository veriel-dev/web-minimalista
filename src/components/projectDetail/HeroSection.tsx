import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import { Github, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  description: string;
  status: 'completed' | 'progress';
  github?: string;
  demo?: string;
  img?: string;
  className?: string;
}

export function HeroSection({
  title,
  description,
  status,
  github,
  demo,
  img,
  className,
}: HeroSectionProps) {
  const isInProgress = status === 'progress';

  return (
    <section className={cn('mb-16 sm:mb-24', className)}>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text content */}
        <div>
          {isInProgress && (
            <span className="inline-block text-amber-500 text-xs font-mono uppercase px-2 py-1 border border-amber-500/30 mb-4">
              En progreso
            </span>
          )}

          <h1 className="font-black font-syne leading-none mb-6">
            <OutlineText as="span" size="2xl" color="violet" hoverFill>
              {title}
            </OutlineText>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-all"
              >
                <Github size={18} />
                <span className="font-mono text-sm">Código</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 hover:bg-zinc-200 transition-all"
              >
                <ExternalLink size={18} />
                <span className="font-mono text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        {img && (
          <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
