import { appData } from '../../data/appData';

function Projects() {
  return (
    <div className="container__Projects">
      <h3 id="experience">{appData.titleProjects}</h3>
      {appData.projects.map((project) => {
        return (
          <div key={project.id} className="project_container__Projects">
            <h4>{project.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
