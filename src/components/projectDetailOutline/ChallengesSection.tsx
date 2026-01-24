import { cn } from '../../../libs/utils';
import { OutlineText } from '../outlineUI';

interface ChallengesSectionProps {
  challenges?: string;
  learnings?: string;
  className?: string;
}

export function ChallengesSection({ challenges, learnings, className }: ChallengesSectionProps) {
  if (!challenges && !learnings) return null;

  return (
    <section className={cn('mb-16 sm:mb-24', className)}>
      <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
        04 / Insights
      </p>
      <h2 className="font-black font-syne leading-none mb-8">
        <OutlineText as="span" size="xl" color="rose" hoverFill>
          DESAFÍOS Y APRENDIZAJES
        </OutlineText>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {challenges && (
          <div className="p-6 border border-zinc-800">
            <h3 className="text-white font-syne font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-400 rounded-full" />
              Desafíos
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{challenges}</p>
          </div>
        )}

        {learnings && (
          <div className="p-6 border border-zinc-800">
            <h3 className="text-white font-syne font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              Aprendizajes
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{learnings}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChallengesSection;
