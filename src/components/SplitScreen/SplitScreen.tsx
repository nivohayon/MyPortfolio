import Profile from '../Profile/Profile';
import './SplitScreen.css';

function SplitScreen() {
  return (
    <div className="container__SplitScreen">
      <div className="sticky_side_container__SplitScreen">
        <Profile />
      </div>
      <div className="scrolly_side_container__SplitScreen">SCROLLY</div>
    </div>
  );
}

export default SplitScreen;
