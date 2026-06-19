import { useState } from 'react';
import { accentVar } from '../accent';
import type { SectionColor } from '../../../data/colors';
import type { Project } from '../../../data/projects';

interface ProjectTileProps {
  project: Project;
  index: number;
  color: SectionColor;
  onOpen: (project: Project) => void;
}

const TYPE_LABEL: Record<Project['projectType'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  games: 'Games',
};

const ProjectTile = ({ project, index, color, onOpen }: ProjectTileProps) => {
  const [hover, setHover] = useState(false);
  const accent = accentVar(color);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="block text-left border-0 p-0 cursor-pointer"
      style={{
        background: '#141416',
        outline: `1px solid ${hover ? accent : 'rgba(245,245,244,0.16)'}`,
        transform: hover ? 'translateY(-6px) skewX(-2deg)' : 'translateY(0) skewX(0)',
        boxShadow: hover ? `10px 12px 0 ${accent}` : '0 6px 18px rgba(0,0,0,0.5)',
        transition:
          'transform 0.26s var(--p5-ease-snap), box-shadow 0.26s var(--p5-ease-snap), outline-color 0.2s',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)',
      }}
    >
      <div className="relative overflow-hidden" style={{ height: '150px', background: '#0c0c0e' }}>
        {project.img && (
          <img
            src={project.img}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            width={460}
            height={300}
            className="w-full h-full object-cover"
            style={{
              filter: hover ? 'saturate(1.05)' : 'saturate(0.85) brightness(0.84)',
              transform: hover ? 'scale(1.06)' : 'scale(1)',
              transition: 'all 0.4s ease-out',
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.9))',
          }}
        />
        <span
          className="absolute top-0 left-0"
          style={{
            background: accent,
            transform: 'skewX(-10deg)',
            transformOrigin: 'top left',
            marginLeft: '-6px',
          }}
        >
          <span
            className="inline-block text-p5-ink"
            style={{
              transform: 'skewX(10deg)',
              padding: '4px 16px 4px 12px',
              fontFamily: 'var(--p5-font-tall)',
              fontSize: '16px',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </span>
        <span
          className="absolute uppercase font-bold"
          style={{
            bottom: '10px',
            left: '14px',
            fontFamily: 'var(--font-inter)',
            fontSize: '10px',
            letterSpacing: '0.16em',
            color: accent,
          }}
        >
          {TYPE_LABEL[project.projectType]}
        </span>
        <span
          aria-hidden
          className="absolute"
          style={{
            bottom: '8px',
            right: '14px',
            color: accent,
            fontSize: '16px',
            opacity: hover ? 1 : 0,
            transform: hover ? 'translateX(0)' : 'translateX(-6px)',
            transition: 'all 0.25s',
          }}
        >
          ▶
        </span>
      </div>
      <div className="px-5 pt-4 pb-5">
        <h3
          className="m-0 mb-2 text-p5-bone"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 800,
            fontSize: '18px',
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>
        <p className="m-0 mb-3 text-p5-bone/65" style={{ fontSize: '13px', lineHeight: 1.5 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map(t => (
            <span
              key={t}
              className="text-p5-bone/55"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                letterSpacing: '0.06em',
                padding: '3px 9px',
                border: '1px solid rgba(245,245,244,0.16)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default ProjectTile;
