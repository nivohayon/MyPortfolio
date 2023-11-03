import useScrollToHashElement from './hooks/useScrollToHashElement';
import SplitScreen from './pages/SplitScreen/SplitScreen';

function App() {
  useScrollToHashElement();

  return (
    <div className="app_main">
      <SplitScreen />;
    </div>
  );
}

export default App;
