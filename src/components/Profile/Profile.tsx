import { Link, useNavigate } from 'react-router-dom';
import { appData } from '../../data/appData';
import ArrowIconSVG from '../../assets/arrow_icon.svg';
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
    navigate('/');
  };

  return (
    <div className="container__Profile">
      <h1 className="title__Profile noSelect" onClick={handleTitleClick}>
        {appData.nameProfile}
      </h1>
      <h3 className="subtitle__Profile">{appData.subtitleProfile}</h3>
      <h4 className="description__Profile">{appData.descriptionProfile}</h4>
      <Link
        reloadDocument
        to="/resume.pdf"
        className="view_resume_container__Profile"
      >
        <span className="view_resume_text__Profile">View Full Resumé</span>
        <img
          className="arrow_icon__Profile"
          src={ArrowIconSVG}
          width={16}
          height={16}
          alt="arrow icon"
        />
      </Link>
    </div>
  );
}

export default Profile;
