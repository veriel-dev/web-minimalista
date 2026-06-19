import ProjectTile from './ProjectTile';
import type { SectionColor } from '../../../data/colors';
import projects, { type Project } from '../../../data/projects';

interface ProjectsPanelProps {
  onOpenProject: (project: Project) => void;
}

const PROJECT_ACCENTS: SectionColor[] = ['violet', 'cyan', 'emerald', 'rose', 'amber', 'blue'];

const featured = projects.filter(p => p.featured);

const ProjectsPanel = ({ onOpenProject }: ProjectsPanelProps) => {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}
    >
      {featured.map((project, i) => (
        <ProjectTile
          key={project.slug}
          project={project}
          index={i}
          color={PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]}
          onOpen={onOpenProject}
        />
      ))}
    </div>
  );
};

export default ProjectsPanel;
