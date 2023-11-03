import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import './About.css';

function About() {
  return (
    <article className="container__About">
      <h3 id={routes.About}>About</h3>
      <p className="text__About">
        {appData.text1_1About} &nbsp;
        {appData.text1_2About}
        &nbsp;
        <a
          className="link__About"
          href={appData.about_youtube_link}
          target="_blank"
        >
          {appData.about_youtube_link_text}
        </a>
        &nbsp;
        {appData.text1_3About} <br />
        {appData.text1_4About}
        &nbsp;
        <a
          className="link__About"
          href={appData.about_diploma_link}
          target="_blank"
        >
          {appData.about_diploma_link_text}
        </a>
      </p>
      <p className="text__About">{appData.text2About}</p>
      <p className="text__About">{appData.text3About}</p>
    </article>
  );
}

export default About;
