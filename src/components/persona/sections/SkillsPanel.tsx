import { RansomText } from '../primitives';
import { accentVar } from '../accent';
import type { SectionColor } from '../../../data/colors';
import { cvData } from '../../../data/pages/cv';

const SKILL_ACCENTS: SectionColor[] = ['violet', 'emerald', 'amber', 'rose'];

const SkillsPanel = () => {
  return (
    <div className="flex flex-col gap-4">
      {cvData.skills.map((group, i) => {
        const color = SKILL_ACCENTS[i % SKILL_ACCENTS.length];
        return (
          <div
            key={group.title}
            className="border p-5"
            style={{
              background: '#141416',
              borderColor: 'rgba(245,245,244,0.14)',
              clipPath: 'polygon(0 0, 100% 0, 99% 100%, 1% 100%)',
            }}
          >
            <div className="mb-3.5">
              <RansomText
                text={group.title}
                variant="red"
                size="15px"
                wrap
                accent={accentVar(color)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="text-p5-bone font-medium"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    padding: '6px 14px',
                    border: '1px solid rgba(245,245,244,0.22)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsPanel;
