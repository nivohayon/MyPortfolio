import SunIconSVG from '../../assets/sun_icon.svg?react';
import MoonIconSVG from '../../assets/moon_icon.svg?react';
import { useContext } from 'react';
import Store from '../../store';
import { setTheme } from '../../store/actions/themeActions';
import './ThemeSwitch.css';

function ThemeSwitch() {
  const {
    state: { theme },
    dispatchers: { dispatchTheme },
  } = useContext(Store);
  const handleToggle = () => {
    dispatchTheme(setTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="container__ThemeSwitch">
      <SunIconSVG onClick={handleToggle} className="sun_icon__ThemeSwitch" />
      <MoonIconSVG onClick={handleToggle} className="moon_icon__ThemeSwitch" />
    </div>
  );
}

export default ThemeSwitch;
