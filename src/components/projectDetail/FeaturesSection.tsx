import { cn } from '../../lib/utils';
import { OutlineText } from '../ui';
import { Check } from 'lucide-react';

interface FeaturesSectionProps {
  features?: string[];
  className?: string;
}

export function FeaturesSection({ features, className }: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className={cn('mb-16 sm:mb-24', className)}>
      <p className="text-zinc-400 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
        03 / Features
      </p>
      <h2 className="font-black font-syne leading-none mb-8">
        <OutlineText as="span" size="xl" color="amber" hoverFill>
          CARACTERÍSTICAS
        </OutlineText>
      </h2>

      <ul className="grid sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-4 border border-zinc-800 hover:border-zinc-600 transition-colors"
          >
            <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
            <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturesSection;
