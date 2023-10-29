import { useNavigate } from 'react-router-dom';
import { appData } from '../../data/appData';
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
    </div>
  );
}

export default Profile;
