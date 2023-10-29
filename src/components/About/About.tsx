import { appData } from '../../data/appData';
import './About.css';

function About() {
  return (
    <article className="container__About">
      <h3 id="about">About</h3>
      <p className="text__About">{appData.text1About}</p>
      <p className="text__About">{appData.text2About}</p>
      <p className="text__About">{appData.text3About}</p>
    </article>
  );
}

export default About;
