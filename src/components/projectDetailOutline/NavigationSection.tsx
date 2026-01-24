import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNav {
  slug: string;
  title: string;
}

interface NavigationSectionProps {
  prevProject?: ProjectNav | null;
  nextProject?: ProjectNav | null;
  className?: string;
}

export function NavigationSection({ prevProject, nextProject, className }: NavigationSectionProps) {
  return (
    <section className={cn('pt-8 border-t border-zinc-800', className)}>
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Previous */}
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-6 border border-zinc-800 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Anterior
            </div>
            <OutlineText as="span" size="sm" color="white" hoverFill>
              {prevProject.title}
            </OutlineText>
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-6 border border-zinc-800 hover:border-zinc-600 transition-colors text-right"
          >
            <div className="flex items-center justify-end gap-2 text-zinc-500 text-xs font-mono mb-2">
              Siguiente
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <OutlineText as="span" size="sm" color="white" hoverFill>
              {nextProject.title}
            </OutlineText>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}

export default NavigationSection;
