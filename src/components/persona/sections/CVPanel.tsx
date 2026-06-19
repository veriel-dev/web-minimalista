import type { ReactNode } from 'react';
import { PhantomButton, RansomText } from '../primitives';
import { accentVar } from '../accent';
import type { SectionColor } from '../../../data/colors';
import { cvData, cvStats } from '../../../data/pages/cv';

const JOB_ACCENTS: SectionColor[] = ['rose', 'violet', 'emerald', 'cyan', 'amber'];

const CVHeading = ({ children }: { children: ReactNode }) => (
  <div
    className="inline-block mb-4 px-4 py-1.5 bg-p5-red"
    style={{
      transform: 'skewX(-9deg)',
      boxShadow: '3px 3px 0 var(--p5-ink)',
    }}
  >
    <span
      className="inline-block uppercase text-p5-bone"
      style={{
        transform: 'skewX(9deg)',
        fontFamily: 'var(--p5-font-tall)',
        fontSize: '20px',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </span>
  </div>
);

const CVPanel = () => {
  const cv = cvData;

  return (
    <div>
      <p
        className="text-p5-bone leading-[0.92] m-0 mb-2"
        style={{
          fontFamily: 'var(--p5-font-tall)',
          fontSize: 'clamp(28px, 3.6vw, 46px)',
        }}
      >
        {cv.header.name}
      </p>

      <div className="mb-3.5">
        <RansomText text={cv.header.title} variant="red" size="14px" />
      </div>

      <div
        className="flex flex-wrap items-center mb-5 text-p5-bone/65"
        style={{
          gap: '4px 14px',
          lineHeight: 1.6,
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          letterSpacing: '0.04em',
        }}
      >
        <span>{cv.header.location}</span>
        <span className="text-p5-red">·</span>
        <span>{cv.header.email}</span>
        <span className="text-p5-red">·</span>
        <span>{cv.header.github.replace(/^https?:\/\//, '')}</span>
      </div>

      {cv.summary.paragraphs.map(p => (
        <p
          key={p}
          className="text-p5-bone/85 font-light"
          style={{
            fontSize: '15px',
            maxWidth: '58ch',
            lineHeight: 1.55,
            margin: '0 0 12px',
          }}
        >
          {p}
        </p>
      ))}

      <div className="flex gap-2 md:gap-3 my-5 flex-wrap">
        {cvStats.map(st => (
          <div
            key={st.label}
            className="flex-1 border p-3 md:p-4"
            style={{
              flexBasis: '90px',
              background: '#141416',
              borderColor: 'rgba(245,245,244,0.16)',
              transform: 'skewX(-7deg)',
              boxShadow: '4px 4px 0 var(--p5-red)',
            }}
          >
            <div style={{ transform: 'skewX(7deg)' }}>
              <div
                className="text-p5-red leading-[0.9]"
                style={{
                  fontFamily: 'var(--p5-font-tall)',
                  fontSize: '34px',
                }}
              >
                {st.value}
              </div>
              <div
                className="uppercase text-p5-bone/60 mt-1.5"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                }}
              >
                {st.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CVHeading>Experiencia</CVHeading>
      <div className="flex flex-col gap-3 mb-7">
        {cv.experience.map((job, i) => {
          const accent = accentVar(JOB_ACCENTS[i % JOB_ACCENTS.length]);
          return (
            <div
              key={`${job.company}-${job.period}`}
              className="px-4 py-3 md:px-5 md:py-4"
              style={{ background: '#141416', borderLeft: `4px solid ${accent}` }}
            >
              <div className="flex justify-between items-baseline gap-3 flex-wrap">
                <span
                  className="text-p5-bone font-bold"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '17px' }}
                >
                  {job.role}
                </span>
                <span
                  className="uppercase text-p5-ink whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    background: accent,
                    padding: '3px 10px',
                    transform: 'skewX(-8deg)',
                  }}
                >
                  {job.period}
                </span>
              </div>
              <div
                className="text-p5-bone/60"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '12px',
                  letterSpacing: '0.03em',
                  margin: '4px 0 10px',
                }}
              >
                {job.company}
                {job.project && <span className="text-p5-bone/40"> · {job.project}</span>}
              </div>
              <ul className="m-0 flex flex-col gap-1" style={{ paddingLeft: '18px' }}>
                {job.achievements.map(a => (
                  <li
                    key={a}
                    className="text-p5-bone/80 font-light"
                    style={{ fontSize: '13px', lineHeight: 1.45 }}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <CVHeading>Formación</CVHeading>
      <div className="mb-7">
        {cv.education.map(edu => (
          <div
            key={edu.degree}
            className="px-4 py-3 md:px-5 md:py-4"
            style={{ background: '#141416', borderLeft: '4px solid var(--p5-bone)' }}
          >
            <div className="flex justify-between items-baseline gap-3 flex-wrap">
              <span
                className="text-p5-bone font-bold"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '17px' }}
              >
                {edu.degree}
              </span>
              <span
                className="text-p5-bone/50"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                }}
              >
                {edu.period}
              </span>
            </div>
            <div
              className="text-p5-bone/60"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                margin: '4px 0 10px',
              }}
            >
              {edu.institution}
            </div>
            <ul className="m-0 flex flex-col gap-1" style={{ paddingLeft: '18px' }}>
              {edu.highlights.map(h => (
                <li
                  key={h}
                  className="text-p5-bone/80 font-light"
                  style={{ fontSize: '13px', lineHeight: 1.45 }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="grid gap-6 mb-7"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
      >
        <div>
          <CVHeading>Idiomas</CVHeading>
          <div className="flex flex-col gap-2">
            {cv.languages.map(lng => (
              <div
                key={lng.language}
                className="flex justify-between items-baseline pb-1.5"
                style={{ borderBottom: '1px solid rgba(245,245,244,0.12)' }}
              >
                <span
                  className="text-p5-bone font-semibold"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '15px' }}
                >
                  {lng.language}
                </span>
                <span
                  className="uppercase text-p5-red"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                  }}
                >
                  {lng.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <CVHeading>Logros</CVHeading>
          <ul className="m-0 flex flex-col gap-1.5" style={{ paddingLeft: '18px' }}>
            {cv.achievements.map(a => (
              <li
                key={a.text}
                className="text-p5-bone/80 font-light"
                style={{ fontSize: '13px', lineHeight: 1.45 }}
              >
                {a.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PhantomButton variant="solid" color="red" onClick={() => window.print()}>
        ⤓ Descargar CV
      </PhantomButton>
    </div>
  );
};

export default CVPanel;
