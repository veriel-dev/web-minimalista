import { personaUI } from '../../../data/persona';
import { cvStats } from '../../../data/cv';

const HudMoney = () => {
  const { money } = personaUI;
  const level = cvStats[0].value.replace('+', '');

  return (
    <div className="inline-flex items-baseline gap-2" style={{ transform: 'skewX(-8deg)' }}>
      <span className="text-p5-red" style={{ fontFamily: 'var(--p5-font-tall)', fontSize: '20px' }}>
        {money.prefix}
      </span>
      <span
        className="text-p5-bone leading-[0.9]"
        style={{
          fontFamily: 'var(--p5-font-tall)',
          fontSize: '34px',
          textShadow: '3px 3px 0 var(--p5-ink)',
        }}
      >
        {level}
      </span>
      <span
        className="uppercase"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--p5-bone)',
          textShadow: '0 1px 3px rgba(10,10,10,0.85)',
        }}
      >
        {money.caption}
      </span>
    </div>
  );
};

export default HudMoney;
