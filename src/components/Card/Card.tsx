import LinkItem from '../LinkItem/LinkItem';
import SkillTag from '../SkillTag/SkillTag';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import { IExperience } from '../../types';
import './Card.css';

type CardProps = {
  experience: IExperience;
};

function Card({ experience }: CardProps) {
  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      onClick={() => {
        handleCardClick(experience.cardClickLink);
      }}
      className="container__Card"
    >
      <span className="from_until__Card">
        {experience.from} - {experience.until}
      </span>
      <div className="data_container">
        <div className="arrow_and_title_container__Card">
          <span className="title__Card">{experience.title}</span>
          <ArrowIconSVG className="arrow_icon__Card" />
        </div>
        <span className="description__Card">{experience.description}</span>
        <div className="links_container__Card">
          {experience.links.length > 0 &&
            experience.links.map((link) => {
              return (
                <LinkItem key={link.url} title={link.title} url={link.url} />
              );
            })}
        </div>
        <div className="skills_container__Card">
          {experience.skills.length > 0 &&
            experience.skills.map((skill) => {
              return <SkillTag key={skill} title={skill} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Card;
