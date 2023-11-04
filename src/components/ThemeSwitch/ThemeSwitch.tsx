import SunIconSVG from '../../assets/sun_icon.svg?react';
import MoonIconSVG from '../../assets/moon_icon.svg?react';
import { useContext, useRef } from 'react';
import Store from '../../store';
import { setTheme } from '../../store/actions/themeActions';
import { combineClasses } from '../../utils/combineClasses';
import './ThemeSwitch.css';

function ThemeSwitch() {
  const {
    state: { theme },
    dispatchers: { dispatchTheme },
  } = useContext(Store);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatchTheme(setTheme(newTheme));
    if (containerRef.current) {
      containerRef.current.className = `container__ThemeSwitch ${newTheme}`;
    }
  };

  return (
    <div
      ref={containerRef}
      className={combineClasses('container__ThemeSwitch', theme)}
    >
      <SunIconSVG onClick={handleToggle} className="sun_icon__ThemeSwitch" />
      <MoonIconSVG onClick={handleToggle} className="moon_icon__ThemeSwitch" />
    </div>
  );
}

export default ThemeSwitch;
