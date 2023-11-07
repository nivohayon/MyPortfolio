import LinkItem from '../LinkItem/LinkItem';
import SkillTag from '../SkillTag/SkillTag';
import ArrowIconSVG from '../../assets/icons/arrow_icon.svg?react';
import DownloadIconSVG from '../../assets/icons/download_icon.svg?react';
import { IExperience, IProject } from '../../types';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import ProjectPlaceholderImg from '../../assets/icons/project_placeholder.jpg';
import { appData } from '../../data/appData';
import { combineClasses } from '../../utils/combineClasses';
import './Card.css';

type CardProps = {
  type?: 'default' | 'projects';
  data: Partial<IExperience & IProject>;
};

function Card({ type = 'default', data }: CardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (data.mainLink) {
      window.open(data.mainLink, '_blank');
    } else {
      navigate(routes.ComingSoon);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={combineClasses(
        'container__Card',
        type === 'projects' ? 'projects_container__Card' : ''
      )}
    >
      {type === 'default' ? (
        <span className="from_until__Card">
          {data.from} - {data.until}
        </span>
      ) : (
        <div className="preview_container">
          <img
            src={
              data?.previewUrl?.length ? data.previewUrl : ProjectPlaceholderImg
            }
            className="preview_img__Card"
            alt="project preview"
          />
        </div>
      )}
      <div className="data_container">
        <div className="arrow_and_title_container__Card">
          <span className="title__Card">{data.title}</span>
          <ArrowIconSVG className="arrow_icon__Card" />
        </div>
        <span className="description__Card">{data.description}</span>
        <div className="links_container__Card">
          {data?.links?.length
            ? data.links.map((link) => {
                return (
                  <LinkItem key={link.url} title={link.title} url={link.url} />
                );
              })
            : null}
        </div>
        <div className="installs_count_container__Card">
          {type === 'projects' && data.installCount && (
            <>
              <DownloadIconSVG className="download_icon__Card" />
              <span className="install_count_text__Card">
                {data.installCount} {appData.installsCountText}
              </span>
            </>
          )}
        </div>
        <div className="skills_container__Card">
          {data?.skills?.length
            ? data.skills.map((skill) => {
                return <SkillTag key={skill} title={skill} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
