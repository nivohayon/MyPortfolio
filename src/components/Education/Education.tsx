import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import Card from '../Card/Card';
import './Education.css';

type EducationProps = {
  educationRef: React.RefObject<HTMLDivElement>;
};

function Education({ educationRef }: EducationProps) {
  return (
    <article ref={educationRef} className="container__Education">
      <h3 id={routes.Education}>{appData.titleEducation}</h3>
      <div className="cards_container__Education">
        {appData.educations.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </article>
  );
}

export default Education;
