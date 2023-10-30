import GitHubSVG from '../../assets/github_icon.svg?react';
import InstagramSVG from '../../assets/instagram_icon.svg?react';
import LinkedInSVG from '../../assets/linkedin_icon.svg?react';
import { appData } from '../../data/appData';
import './SocialLinks.css';

const ICON_SIZE = 32;

function SocialLinks() {
  return (
    <div className="container__SocialLinks">
      <a href={appData.github_link} target="_blank" rel="noreferrer">
        <GitHubSVG width={ICON_SIZE} height={ICON_SIZE} />
      </a>
      <a href={appData.instagram_link} target="_blank" rel="noreferrer">
        <InstagramSVG width={ICON_SIZE} height={ICON_SIZE} />
      </a>
      <a href={appData.linkedin_link} target="_blank" rel="noreferrer">
        <LinkedInSVG width={ICON_SIZE} height={ICON_SIZE} />
      </a>
    </div>
  );
}

export default SocialLinks;
