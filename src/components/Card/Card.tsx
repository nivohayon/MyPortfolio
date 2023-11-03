import LinkItem from '../LinkItem/LinkItem';
import SkillTag from '../SkillTag/SkillTag';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import { IExperience, IProject } from '../../types';
import './Card.css';

type CardProps = {
  type: 'experiences' | 'projects';
  data: Partial<IExperience & IProject>;
};

function Card({ type, data }: CardProps) {
  const handleCardClick = () => {
    if (data.cardClickLink) {
      window.open(data.cardClickLink, '_blank');
    }
  };

  return (
    <div onClick={handleCardClick} className="container__Card">
      {type === 'experiences' ? (
        <span className="from_until__Card">
          {data.from} - {data.until}
        </span>
      ) : (
        <div className="preview_container">
          <img
            src={data.previewUrl}
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
