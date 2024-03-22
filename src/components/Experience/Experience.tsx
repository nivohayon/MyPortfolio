import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import './Experience.css';

type ExperienceProps = {
  experienceRef: React.RefObject<HTMLDivElement>;
};

function Experience({ experienceRef }: ExperienceProps) {
  return (
    <article ref={experienceRef} className="container__Experience">
      <h3 id={routes.Experience}>{appData.titleExperience}</h3>
      <div className="cards_container__Experience">
        {appData.experiences.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </article>
  );
}

export default Experience;
