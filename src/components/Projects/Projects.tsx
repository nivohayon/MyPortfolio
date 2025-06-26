import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import LinkWithArrow from '../LinkWithArrow/LinkWithArrow';
import './Projects.css';

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

const projectsAmountToRender = 5;

function Projects({ projectsRef }: ProjectsProps) {
  return (
    <article ref={projectsRef} className="container__Projects">
      <h3 id={routes.Projects}>{appData.titleProjects}</h3>
      <div className="cards_container__Projects">
        {appData.projects.map((project, index) => {
          if (appData.projects.length - index > projectsAmountToRender) {
            // Render only my 4 latest projects.
            return null;
          }
          return <Card key={project.id} type="projects" data={project} />;
        })}
      </div>
      <LinkWithArrow
        to={routes.Archive}
        label={appData.viewFullProjectsArchiveText}
      />
    </article>
  );
}

export default Projects;
