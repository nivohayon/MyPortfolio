import Profile from '../Profile/Profile';
import SideNavBar from '../SideNavBar/SideNavBar';
import SocialLinks from '../SocialLinks/SocialLinks';
import './SplitScreen.css';

function SplitScreen() {
  return (
    <div className="container__SplitScreen">
      <div className="sticky_side_container__SplitScreen">
        <Profile />
        <SideNavBar />
        <SocialLinks />
      </div>
      <div className="scrolly_side_container__SplitScreen">SCROLLY</div>
    </div>
  );
}

export default SplitScreen;
