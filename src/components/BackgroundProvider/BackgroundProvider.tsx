import { useContext, useRef } from 'react';
import useMouseFlashlight from '../../hooks/useMouseFlashlight';
import Store from '../../store';
import { combineClasses } from '../../utils/combineClasses';
import './BackgroundProvider.css';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

type BackgroundProviderProps = {
  children: React.ReactNode;
};

const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
  const {
    state: { theme },
  } = useContext(Store);

  const containerRef = useRef<HTMLDivElement>(null);
  useMouseFlashlight(containerRef);

  return (
    <div
      className={combineClasses('background_provider', theme)}
      ref={containerRef}
    >
      <ThemeSwitch />
      {children}
    </div>
  );
};

export default BackgroundProvider;
