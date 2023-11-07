import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import LinkWithArrow from '../LinkWithArrow/LinkWithArrow';
import './Projects.css';

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

function Projects({ projectsRef }: ProjectsProps) {
  const projectsToRender = appData.projects.slice(0, 4);

  return (
    <article ref={projectsRef} className="container__Projects">
      <h3 id={routes.Projects}>{appData.titleProjects}</h3>
      {projectsToRender.map((project) => {
        return <Card key={project.id} type="projects" data={project} />;
      })}
      <LinkWithArrow
        to={routes.Archive}
        label={appData.viewFullProjectsArchiveText}
      />
    </article>
  );
}

export default Projects;
