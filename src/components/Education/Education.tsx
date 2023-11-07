import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import './Education.css';

function Education() {
  return (
    <article className="container__Education">
      <h3 id={routes.Education}>{appData.titleEducation}</h3>
      {appData.educations.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </article>
  );
}

export default Education;
