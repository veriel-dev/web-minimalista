import { copy } from '../../../data/copy';

const AboutPanel = () => {
  const { about } = copy;

  return (
    <div className="flex flex-col" style={{ maxWidth: '60ch' }}>
      {about.paragraphs.map((p, i) => {
        const isLast = i === about.paragraphs.length - 1;
        return (
          <div
            key={p}
            className="flex gap-5 items-start py-4"
            style={{
              borderBottom: isLast ? 'none' : '1px solid rgba(245,245,244,0.12)',
            }}
          >
            <span
              className="text-p5-red leading-[0.9] flex-none"
              style={{
                fontFamily: 'var(--p5-font-tall)',
                fontSize: '34px',
                transform: 'skewX(-8deg)',
              }}
            >
              0{i + 1}
            </span>
            <p
              className="text-p5-bone/90 font-light"
              style={{ fontSize: '18px', lineHeight: 1.5, margin: 0 }}
            >
              {p}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutPanel;
