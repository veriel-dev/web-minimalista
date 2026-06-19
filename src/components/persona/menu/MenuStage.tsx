import { StarBurst, RansomText } from '../primitives';
import { accentVar } from '../accent';
import { personaUI, type PersonaSection } from '../../../data/pages/home.persona';

interface MenuStageProps {
  section: PersonaSection;
}

const MenuStage = ({ section }: MenuStageProps) => {
  const accent = accentVar(section.color);
  const { menuStage } = personaUI;

  return (
    <div className="relative flex flex-col justify-center self-center min-h-0 w-[min(38vw,470px)] flex-none">
      <div
        className="inline-block self-start bg-p5-ink mb-6 px-5 py-2"
        style={{ border: '2px solid var(--p5-bone)', transform: 'skewX(-10deg)' }}
      >
        <div style={{ transform: 'skewX(10deg)' }}>
          <div
            className="text-p5-bone leading-[0.9]"
            style={{ fontFamily: 'var(--p5-font-tall)', fontSize: '26px' }}
          >
            {menuStage.heading}
          </div>
          <div
            className="text-p5-bone/65 uppercase mt-[3px]"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '10px',
              letterSpacing: '0.22em',
            }}
          >
            {menuStage.subtitle}
          </div>
        </div>
      </div>

      <div
        className="relative flex items-center justify-center"
        style={{ width: 'min(27vw, 310px)', height: 'min(27vw, 310px)' }}
      >
        <div className="absolute" style={{ inset: '-6%' }}>
          <StarBurst size="100%" color="var(--p5-bone)" spin={60} fine />
        </div>
        <div className="absolute" style={{ inset: '4%' }}>
          <StarBurst size="100%" color="var(--p5-red)" spin={45} />
        </div>

        <span
          key={section.id}
          className="relative text-p5-bone leading-[0.8]"
          style={{
            fontFamily: 'var(--p5-font-tall)',
            fontSize: 'min(19vw, 200px)',
            transform: 'skewX(-6deg)',
            textShadow: '4px 4px 0 var(--p5-ink)',
            animation: 'splatPop 0.4s var(--p5-ease-snap)',
          }}
        >
          {section.number}
        </span>

        <span
          aria-hidden
          className="absolute"
          style={{
            bottom: '8%',
            right: '6%',
            width: '22px',
            height: '22px',
            background: accent,
            transform: 'skewX(-8deg) rotate(8deg)',
            boxShadow: '2px 2px 0 var(--p5-ink)',
          }}
        />
      </div>

      <div
        key={`${section.id}-label`}
        className="mt-5"
        style={{ animation: 'splatPop 0.36s var(--p5-ease-snap)' }}
      >
        <RansomText text={section.label} variant="sticker" size="clamp(24px, 2.6vw, 36px)" />
      </div>
    </div>
  );
};

export default MenuStage;
