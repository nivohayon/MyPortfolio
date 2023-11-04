import SunIconSVG from '../../assets/sun_icon.svg?react';
import MoonIconSVG from '../../assets/moon_icon.svg?react';
import { useContext, useEffect } from 'react';
import Store from '../../store';
import { setTheme } from '../../store/actions/themeActions';
import './ThemeSwitch.css';
import { localStorageKeys } from '../../types';
import { combineClasses } from '../../utils/combineClasses';

function ThemeSwitch() {
  const {
    state: { theme },
    dispatchers: { dispatchTheme },
  } = useContext(Store);

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatchTheme(setTheme(newTheme));
    localStorage.setItem(localStorageKeys.theme, newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={combineClasses('container__ThemeSwitch', theme)}>
      <SunIconSVG onClick={handleToggle} className="sun_icon__ThemeSwitch" />
      <MoonIconSVG onClick={handleToggle} className="moon_icon__ThemeSwitch" />
    </div>
  );
}

export default ThemeSwitch;
