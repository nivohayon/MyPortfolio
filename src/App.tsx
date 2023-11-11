import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplitScreen from './pages/SplitScreen/SplitScreen';
import { routes } from './routes/routes';
import Archive from './pages/Archive/Archive';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import NotFound from './pages/NotFound/NotFound';
import useMouseFlashlight from './hooks/useMouseFlashlight';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import ProjectImages from './pages/ProjectImages/ProjectImages';

function App() {
  useMouseFlashlight();

  return (
    <main className="app_main">
      <ThemeSwitch />
      <BrowserRouter>
        <Routes>
          <Route path={routes.Home} element={<SplitScreen />} />
          <Route path={routes.Archive} element={<Archive />} />
          <Route
            path={`${routes.ProjectImages}/:projectName`}
            element={<ProjectImages />}
          />
          <Route path={routes.ComingSoon} element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
