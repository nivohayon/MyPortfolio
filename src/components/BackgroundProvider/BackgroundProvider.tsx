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
    <div className="background_provider" ref={containerRef}>
      {children}
    </div>
  );
};

export default BackgroundProvider;
