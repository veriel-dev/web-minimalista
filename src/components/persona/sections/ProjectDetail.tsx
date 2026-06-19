import { useEffect, useRef } from 'react';
import { Badge, PhantomButton } from '../primitives';
import { accentVar } from '../accent';
import type { SectionColor } from '../../../data/colors';
import type { Project } from '../../../data/projects';

interface ProjectDetailProps {
  project: Project;
  color: SectionColor;
  onClose: () => void;
}

const TYPE_LABEL: Record<Project['projectType'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  games: 'Games',
};

const ProjectDetail = ({ project, color, onClose }: ProjectDetailProps) => {
  const accent = accentVar(color);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, [project.slug]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del proyecto ${project.title}`}
      className="fixed inset-0 z-50 flex"
      style={{ background: 'rgba(8,2,3,0.9)', backdropFilter: 'blur(5px)' }}
    >
      <div
        className="relative m-auto grid overflow-hidden"
        style={{
          width: 'min(940px, 93vw)',
          maxHeight: '88vh',
          background: '#101012',
          border: `3px solid ${accent}`,
          boxShadow: '16px 16px 0 var(--p5-ink)',
          gridTemplateColumns: '1fr 1fr',
          clipPath: 'polygon(0 0, 100% 0, 100% 94%, 97% 100%, 0 100%)',
        }}
      >
        <div className="relative" style={{ minHeight: '440px', background: '#0c0c0e' }}>
          {project.img && (
            <img
              src={project.img}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, transparent 36%, #101012)' }}
          />
          <span
            className="absolute top-0 left-0"
            style={{
              transform: 'skewX(-10deg)',
              transformOrigin: 'top left',
              background: accent,
              marginLeft: '-6px',
            }}
          >
            <span
              className="inline-block uppercase text-p5-ink"
              style={{
                transform: 'skewX(10deg)',
                padding: '6px 22px',
                fontFamily: 'var(--p5-font-tall)',
                letterSpacing: '0.06em',
                fontSize: '15px',
              }}
            >
              {TYPE_LABEL[project.projectType]}
            </span>
          </span>
        </div>

        <div className="p-9 flex flex-col">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="absolute font-bold cursor-pointer border-0 text-p5-ink bg-p5-bone"
            style={{
              top: '14px',
              right: '14px',
              width: '40px',
              height: '40px',
              transform: 'skewX(-8deg)',
              fontSize: '17px',
            }}
          >
            ✕
          </button>

          <h2
            className="m-0 mb-3 text-p5-bone leading-[0.9]"
            style={{
              fontFamily: 'var(--p5-font-tall)',
              fontSize: 'clamp(28px, 4vw, 44px)',
            }}
          >
            {project.title}
          </h2>

          <div className="mb-5">
            <Badge variant="status" color={project.status === 'progress' ? 'amber' : 'emerald'}>
              {project.status === 'progress' ? 'En curso' : 'Completado'}
            </Badge>
          </div>

          <p
            className="text-p5-bone/85 font-light"
            style={{ fontSize: '15px', lineHeight: 1.65, margin: '0 0 24px' }}
          >
            {project.longDescription ?? project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.technologies.map(t => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-3 flex-wrap">
            {project.demo && (
              <PhantomButton variant="solid" color="red" href={project.demo} target="_blank">
                Ver demo
              </PhantomButton>
            )}
            {project.github && (
              <PhantomButton variant="outline" color="white" href={project.github} target="_blank">
                GitHub
              </PhantomButton>
            )}
            <PhantomButton variant="outline" color="white" onClick={onClose}>
              Volver
            </PhantomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
