import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplitScreen from './pages/SplitScreen/SplitScreen';
import { routes } from './routes/routes';
import Archive from './pages/Archive/Archive';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.Home} element={<SplitScreen />} />
        <Route path={routes.Archive} element={<Archive />} />
        <Route path={routes.ComingSoon} element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
