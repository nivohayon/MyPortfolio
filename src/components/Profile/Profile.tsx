import { useNavigate } from 'react-router-dom';
import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import LinkWithArrow from '../LinkWithArrow/LinkWithArrow';
import './Profile.css';

type ProfileProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

function Profile({ containerRef }: ProfileProps) {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
    navigate(routes.Home);
  };

  return (
    <div className="container__Profile">
      <h1 className="title__Profile noSelect" onClick={handleTitleClick}>
        {appData.nameProfile}
      </h1>
      <h3 className="subtitle__Profile">
        {appData.subtitleProfile}
        <a
          href={appData.workPlaceLink}
          target="_blank"
          className="work_place_name__Profile"
        >
          {appData.workPlaceName}
        </a>
      </h3>
      <h4 className="description__Profile">{appData.descriptionProfile}</h4>
      <LinkWithArrow to="/resume.pdf" label={appData.viewFullResumeText} />
    </div>
  );
}

export default Profile;
