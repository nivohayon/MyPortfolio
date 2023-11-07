import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import './Experience.css';

function Experience() {
  return (
    <article className="container__Experience">
      <h3 id={routes.Experience}>{appData.titleExperience}</h3>
      {appData.experiences.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </article>
  );
}

export default Experience;
