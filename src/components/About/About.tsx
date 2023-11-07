import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import './About.css';

type AboutProps = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

function About({ aboutRef }: AboutProps) {
  return (
    <article ref={aboutRef} className="container__About">
      <h3 id={routes.About}>{appData.about_title}</h3>
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
        {appData.text1_4About} &nbsp;
        <a
          className="link__About"
          href={appData.about_ruppin_link}
          target="_blank"
        >
          {appData.about_ruppin_link_text}
        </a>
        &nbsp;
        {appData.text1_5About}
        &nbsp;
        <a
          className="link__About"
          href={appData.about_diploma_link}
          target="_blank"
        >
          {appData.about_diploma_link_text}
        </a>
      </p>
      <p className="text__About">{appData.text2_1About}</p>
      <p className="text__About">{appData.text3About}</p>
    </article>
  );
}

export default About;
