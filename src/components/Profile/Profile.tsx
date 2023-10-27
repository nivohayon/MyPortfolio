import appData from '../../data/appData.json';
import useAppNavigation from '../../hooks/useAppNavigation';
import './Profile.css';

function Profile() {
  const navigate = useAppNavigation();
  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <div className="container__Profile">
      <h1 className="title__Profile" onClick={handleTitleClick}>
        {appData.nameProfile}
      </h1>
      <h3 className="subtitle__Profile">{appData.subtitleProfile}</h3>
      <h4 className="description__Profile">{appData.descriptionProfile}</h4>
    </div>
  );
}

export default Profile;
