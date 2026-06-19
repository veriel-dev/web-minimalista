import StarBurst from './StarBurst';
import ComicTexture from './ComicTexture';

const ComicBackground = () => (
  <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-p5-ink">
    <div
      className="absolute"
      style={{
        top: '-20%',
        right: '-10%',
        width: '85%',
        height: '140%',
        background: 'linear-gradient(150deg, #e11d2a 0%, #b00f1c 55%, #7a0812 100%)',
        transform: 'skewX(-12deg)',
        transformOrigin: 'top right',
        clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
      }}
    />
    <div
      className="absolute"
      style={{
        top: '-10%',
        left: '38%',
        width: '40%',
        height: '130%',
        background: 'var(--p5-ink)',
        transform: 'skewX(-12deg)',
        clipPath: 'polygon(40% 0, 62% 0, 30% 100%, 8% 100%)',
      }}
    />
    <div
      className="absolute select-none whitespace-nowrap"
      style={{
        bottom: '-10vh',
        left: '-1vw',
        fontFamily: 'var(--p5-font-tall)',
        fontSize: '52vh',
        lineHeight: 0.7,
        color: 'transparent',
        WebkitTextStroke: '2px rgba(10,10,10,0.22)',
        transform: 'skewX(-8deg)',
      }}
    >
      V
    </div>
    <ComicTexture opacity={0.7} />
    <div className="absolute" style={{ top: '-6%', left: '-4%' }}>
      <StarBurst size="22vh" color="rgba(245,245,244,0.06)" spin={80} fine />
    </div>
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(130% 120% at 50% 40%, transparent 45%, rgba(0,0,0,0.6) 100%)',
      }}
    />
  </div>
);

export default ComicBackground;
