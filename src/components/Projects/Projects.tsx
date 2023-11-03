import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import './Projects.css';

function Projects() {
  const projectsToRender = appData.projects.slice(0, 4);

  return (
    <div className="container__Projects">
      <h3 id={routes.Projects}>{appData.titleProjects}</h3>
      {projectsToRender.map((project) => {
        return <Card key={project.id} type="projects" data={project} />;
      })}
    </div>
  );
}

export default Projects;
