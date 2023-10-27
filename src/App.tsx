import GradientBackground from './components/GradientBackground/GradientBackground';
import SplitScreen from './components/SplitScreen/SplitScreen';
import './App.css';

function App() {
  return (
    <>
      <div>
        <GradientBackground />
      </div>
      <main className="app">
        <SplitScreen />
      </main>
    </>
  );
}

export default App;
