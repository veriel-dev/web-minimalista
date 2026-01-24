import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

export function HeroSection({ title, subtitle, description, className }: HeroSectionProps) {
  return (
    <div className={cn('max-w-5xl mx-auto w-full px-6 text-center', className)}>
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
        Portfolio
      </p>

      <h1 className="font-black font-syne leading-none mb-4 sm:mb-6">
        <OutlineText as="span" size="3xl" color="violet" hoverFill>
          {title}
        </OutlineText>
      </h1>

      <p className="text-white text-xl sm:text-2xl md:text-3xl font-syne mb-4 sm:mb-6">
        {subtitle}
      </p>

      <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default HeroSection;
