import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';

interface OverviewSectionProps {
  content: string;
  className?: string;
}

export function OverviewSection({ content, className }: OverviewSectionProps) {
  return (
    <section className={cn('mb-16 sm:mb-24', className)}>
      <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
        01 / Overview
      </p>
      <h2 className="font-black font-syne leading-none mb-8">
        <OutlineText as="span" size="xl" color="cyan" hoverFill>
          SOBRE EL PROYECTO
        </OutlineText>
      </h2>
      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
        {content}
      </p>
    </section>
  );
}

export default OverviewSection;
