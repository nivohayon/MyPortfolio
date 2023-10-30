import { useRef } from 'react';
import useMouseFlashlight from '../../hooks/useMouseFlashlight';
import './BackgroundProvider.css';

type BackgroundProviderProps = {
  children: React.ReactNode;
};

const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useMouseFlashlight(containerRef);

  return (
    <main className="background_provider" ref={containerRef}>
      <div className="app_main">{children}</div>
    </main>
  );
};

export default BackgroundProvider;
