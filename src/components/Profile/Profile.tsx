import './Profile.css';
import appData from '../../data/appData.json';

function Profile() {
  return (
    <div className="container__Profile">
      <h1 className="title__Profile">{appData.nameProfile}</h1>
      <h3 className="subtitle__Profile">{appData.subtitleProfile}</h3>
      <h4 className="description__Profile">{appData.descriptionProfile}</h4>
    </div>
  );
}

export default Profile;
