import GitHubSVG from '../../assets/github_icon.svg';
import InstagramSVG from '../../assets/instagram_icon.svg';
import LinkedInSVG from '../../assets/linkedin_icon.svg';
import './SocialLinks.css';

const ICON_SIZE = 32;

function SocialLinks() {
  return (
    <div className="container__SocialLinks">
      <a href="https://github.com/bchiang7" target="_blank" rel="noreferrer">
        <img
          width={ICON_SIZE}
          height={ICON_SIZE}
          src={GitHubSVG}
          alt="Github Icon"
        />
      </a>
      <a href="https://instagram.com/bchiang7" target="_blank" rel="noreferrer">
        <img
          width={ICON_SIZE}
          height={ICON_SIZE}
          src={InstagramSVG}
          alt="Instagram Icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/bchiang7/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={ICON_SIZE}
          height={ICON_SIZE}
          src={LinkedInSVG}
          alt="LinkedIn Icon"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
