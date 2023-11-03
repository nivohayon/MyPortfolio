import LinkWithArrow from '../../components/LinkWithArrow/LinkWithArrow';
import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import './Archive.css';

function Archive() {
  return (
    <div className="container__Archive">
      <LinkWithArrow
        to={routes.Home}
        label={appData.backToHomeLinkText}
        arrowColor="var(--green)"
        className="back_home_text__Archive"
        reversed
      />
      <h1 className="title__Archive">{appData.archiveTitle}</h1>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Project</th>
            <th>Made at</th>
            <th>Build with</th>
            <th>Link</th>
          </tr>
          {appData.projects.map((project) => {
            return (
              <tr key={project.id}>
                <td>{project.year}</td>
                <td>{project.title}</td>
                <td>{project.madeAt}</td>
                <td>{project.skills}</td>
                <td>{project.mainLink}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Archive;
