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
              className="text-p5-bone font-light"
              style={{ fontSize: '18px', lineHeight: 1.5, margin: 0 }}
            >
              {p}
            </p>
          </div>
        );
      })}

      <dl
        className="mt-6"
        aria-label={about.profileTitle}
        style={{
          background: 'rgba(10,10,10,0.6)',
          border: '1px solid rgba(245,245,244,0.14)',
          borderLeft: '6px solid var(--color-p5-red)',
          padding: '18px 20px 14px',
          margin: '24px 0 0',
        }}
      >
        <span
          className="inline-block text-p5-ink bg-p5-bone"
          style={{
            fontFamily: 'var(--p5-font)',
            fontSize: '13px',
            letterSpacing: '0.08em',
            padding: '2px 12px',
            transform: 'skewX(-10deg)',
            marginBottom: '8px',
          }}
        >
          {about.profileTitle}
        </span>
        {about.profile.map(({ label, value }) => (
          <div
            key={label}
            className="grid items-baseline gap-x-4 py-2"
            style={{
              gridTemplateColumns: 'minmax(120px, 38%) 1fr',
              borderBottom: '1px dashed rgba(245,245,244,0.12)',
            }}
          >
            <dt
              className="text-p5-red uppercase"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              {label}
            </dt>
            <dd
              className="text-p5-bone m-0"
              style={{
                fontFamily: 'var(--p5-font-tall)',
                fontSize: '20px',
                letterSpacing: '0.02em',
                transform: 'skewX(-6deg)',
              }}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AboutPanel;
