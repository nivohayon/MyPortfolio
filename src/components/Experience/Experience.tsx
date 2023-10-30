import LinkChainSVG from '../../assets/link_chain.svg?react';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';

import { appData } from '../../data/appData';
import './Experience.css';

type SkillTagProps = {
  title: string;
};

type LinkItemProps = {
  title: string;
  url: string;
};

const SkillTag = ({ title }: SkillTagProps) => {
  return <span className="skill_tag__Experience">{title}</span>;
};

const LinkItem = ({ title, url }: LinkItemProps) => {
  const handleOpenLink = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleOpenLink} className="link_item_container__Experience">
      <LinkChainSVG className="link_chain__Experience" />
      <a className="link_item__Experience" href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

function Experience() {
  return (
    <article className="container__Experience">
      <h3 id="experience">{appData.titleExperience}</h3>
      {appData.experiences.map((item) => {
        return (
          <div key={item.id} className="experience_container__Experience">
            <span className="from_until__Experience">
              {item.from} - {item.until}
            </span>
            <div className="data_container">
              <div className="arrow_and_title_container__Experience">
                <span className="title__Experience">{item.title}</span>
                <ArrowIconSVG className="arrow_icon__Experience" />
              </div>
              <span className="description__Experience">
                {item.description}
              </span>
              <div className="links_container__Experience">
                {item.links.length > 0 &&
                  item.links.map((link) => {
                    return (
                      <LinkItem
                        key={link.url}
                        title={link.title}
                        url={link.url}
                      />
                    );
                  })}
              </div>
              <div className="skills_container__Experience">
                {item.skills.length > 0 &&
                  item.skills.map((skill) => {
                    return <SkillTag key={skill} title={skill} />;
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default Experience;
