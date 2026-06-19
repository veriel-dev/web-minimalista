import { PhantomButton, RansomText } from '../primitives';
import { copy } from '../../../data/copy';
import { personaUI, type PersonaSectionId } from '../../../data/persona';

interface HeroPanelProps {
  onNavigate: (id: PersonaSectionId) => void;
}

const HeroPanel = ({ onNavigate }: HeroPanelProps) => {
  const { hero } = copy;
  const { brand } = personaUI;

  return (
    <div>
      <h1 className="m-0 mb-3.5 leading-[0.8]">
        <span
          className="block text-p5-bone break-words"
          style={{
            fontFamily: 'var(--p5-font-tall)',
            fontSize: 'clamp(44px, 12vw, 120px)',
            letterSpacing: '0.01em',
          }}
        >
          {brand.name}
          <span className="text-p5-red">{brand.suffix}</span>
        </span>
      </h1>

      <div className="mb-5">
        <RansomText text={`${hero.title} ${hero.titleHighlight}`} variant="sticker" size="18px" />
      </div>

      <p
        className="text-p5-bone/90 font-light"
        style={{
          fontSize: '20px',
          maxWidth: '44ch',
          margin: '0 0 26px',
          lineHeight: 1.5,
        }}
      >
        {hero.subtitle}
      </p>

      <div className="flex gap-3 flex-wrap">
        <PhantomButton variant="solid" color="red" onClick={() => onNavigate('projects')}>
          {hero.ctaPrimary.label}
        </PhantomButton>
        <PhantomButton variant="outline" color="white" onClick={() => onNavigate('contact')}>
          {hero.ctaSecondary.label}
        </PhantomButton>
      </div>
    </div>
  );
};

export default HeroPanel;
