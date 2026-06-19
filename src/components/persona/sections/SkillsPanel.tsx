import { accentVar } from '../accent';
import { techStack } from '../../../data/techStack';

const SkillsPanel = () => {
  const items = techStack;

  return (
    <div
      className="grid gap-2.5 md:gap-3"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
    >
      {items.map(item => {
        const accent = accentVar(item.color);
        return (
          <div
            key={item.name}
            className="relative px-3 py-3 md:px-4 md:py-4"
            style={{
              background: '#141416',
              border: '1px solid rgba(245,245,244,0.16)',
              borderLeft: `4px solid ${accent}`,
              clipPath: 'polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)',
            }}
          >
            <div
              className="leading-[0.95]"
              style={{
                fontFamily: 'var(--p5-font-tall)',
                fontSize: 'clamp(20px,4.5vw,28px)',
                color: accent,
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
              }}
            >
              {item.name}
            </div>
            <div
              className="mt-1 uppercase text-p5-bone/55"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                letterSpacing: '0.12em',
              }}
            >
              {item.type}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsPanel;
