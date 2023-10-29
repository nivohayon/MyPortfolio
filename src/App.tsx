import SplitScreen from './components/SplitScreen/SplitScreen';
import { useRef } from 'react';
import useMouseFlashlight from './hooks/useMouseFlashlight';
import useScrollToHashElement from './hooks/useScrollToHashElement';
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  useMouseFlashlight(containerRef);
  useScrollToHashElement();

  return (
    <main className="app" ref={containerRef}>
      <div className="app_main">
        <SplitScreen />
      </div>
    </main>
  );
}

export default App;
