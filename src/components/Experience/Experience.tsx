import { appData } from '../../data/appData';
import Card from '../Card/Card';
import './Experience.css';

function Experience() {
  return (
    <article className="container__Experience">
      <h3 id="experience">{appData.titleExperience}</h3>
      {appData.experiences.map((item) => {
        return <Card key={item.id} experience={item} />;
      })}
    </article>
  );
}

export default Experience;
