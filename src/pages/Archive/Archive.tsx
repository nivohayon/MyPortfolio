import LinkWithArrow from '../../components/LinkWithArrow/LinkWithArrow';
import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import ArrowIconSVG from '../../assets/icons/arrow_icon.svg?react';
import SkillTag from '../../components/SkillTag/SkillTag';
import { combineClasses } from '../../utils/combineClasses';
import './Archive.css';

function Archive() {
  return (
    <div className="container__Archive">
      <LinkWithArrow
        to={routes.Home}
        label={appData.backToHomeLinkText}
        arrowColor="var(--linkItemChainTextHoverColor)"
        className="back_home_text__Archive"
        reversed
      />
      <h1 className="title__Archive">{appData.archiveTitle}</h1>
      <table>
        <tbody>
          <tr>
            <th>{appData.yearArchive}</th>
            <th>{appData.projectArchive}</th>
            <th>{appData.madeAtArchive}</th>
            <th>{appData.builtWithArchive}</th>
            <th>{appData.linkArchive}</th>
          </tr>
          {appData.projects.map((project) => {
            return (
              <tr key={project.id}>
                <td>
                  <span className="year_text__Archive">{project.year}</span>
                </td>
                <td>
                  <a
                    className={combineClasses(
                      'title_text_container__Archive',
                      project.mainLink ? '' : 'missingLink_a__Archive'
                    )}
                    href={project.mainLink}
                    target="_blank"
                  >
                    <span className="title_text__Archive">{project.title}</span>
                    {project.mainLink && (
                      <ArrowIconSVG className="title_text_arrow__Archive" />
                    )}
                  </a>
                </td>
                <td>
                  <span className="madeAt_text__Archive">{project.madeAt}</span>
                </td>
                <td>
                  <div className="skill_tags_container__Archive">
                    {project.skills.map((skill) => (
                      <SkillTag key={skill} title={skill} />
                    ))}
                  </div>
                </td>
                <td>
                  <div className="mainLink_container__Archive">
                    <span className="mainLink_text__Archive">
                      {project.mainLink}
                    </span>
                    {project.mainLink && (
                      <ArrowIconSVG className="mainLink_arrow_icon__Archive" />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Archive;
