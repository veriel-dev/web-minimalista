import { cn } from '../../lib/utils';
import { outlineColors, type OutlineColor } from '../../config/theme';

interface Section {
  id: string;
  number: string;
  label?: string;
  color: OutlineColor;
}

interface ProgressIndicatorProps {
  sections: Section[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  position?: 'left' | 'right';
  showLabels?: boolean;
  className?: string;
}

export function ProgressIndicator({
  sections,
  activeSection,
  onNavigate,
  position = 'right',
  showLabels = false,
  className,
}: ProgressIndicatorProps) {
  const positionClasses = {
    left: 'left-6 md:left-8',
    right: 'right-6 md:right-8',
  };

  return (
    <nav
      className={cn(
        'fixed top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4',
        positionClasses[position],
        className,
      )}
      aria-label="Navegación de secciones"
    >
      {sections.map(section => {
        const isActive = activeSection === section.id;
        const color = outlineColors[section.color];

        return (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={cn(
              'flex items-center gap-3 group transition-all duration-300',
              position === 'left' ? 'flex-row' : 'flex-row-reverse',
              isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70',
            )}
            aria-label={`Ir a sección ${section.label || section.number}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Número */}
            <span
              className={cn(
                'text-xs font-mono transition-opacity duration-300',
                showLabels || isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
              )}
              style={{ color: isActive ? color : undefined }}
            >
              {section.number}
            </span>

            {/* Barra indicadora */}
            <div
              className={cn(
                'rounded-full transition-all duration-300',
                isActive ? 'w-1.5 h-10' : 'w-1 h-8',
              )}
              style={{
                backgroundColor: isActive ? color : '#3f3f46',
                boxShadow: isActive ? `0 0 10px ${color}` : 'none',
              }}
            />

            {/* Label opcional */}
            {showLabels && section.label && (
              <span
                className={cn(
                  'text-xs font-medium transition-opacity duration-300',
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                )}
                style={{ color: isActive ? color : undefined }}
              >
                {section.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

export default ProgressIndicator;
