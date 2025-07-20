import { homePageMatrix } from '../../../data/pages/home.matrix';
import { useCountAnimation } from '../../../hooks/useAnimatedCounter';
import { Card } from '../../ui';

interface StatItemProps {
  label: string;
  value: number;
  plus: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatItem = ({ label, value, plus, icon: Icon }: StatItemProps) => {
  const { count, elementRef } = useCountAnimation(value, 4000);

  return (
    <div ref={elementRef}>
      <Card className="bg-black/50 border border-green-900/50 hover:border-green-400 transition-all duration-300 hover:scale-105 p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-none flex items-center justify-center">
            <Icon className={`h-8 w-8 text-green-400`} />
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">
              {count} {plus}
            </div>

            <p className="text-green-500 text-sm">
              {'// '}
              {label}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const StatsContainerMatrix = () => {
  const { aboutSection } = homePageMatrix;

  const stats = aboutSection.stats;
  return (
    <div className="grid grid-cols-1 gap-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};
