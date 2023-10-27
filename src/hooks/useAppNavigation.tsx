import { NavigateOptions, useNavigate } from 'react-router-dom';

export type AppRoutes = '/' | '#about' | '#experience' | '#projects';

export const routes = {
  Home: '/',
  About: '#about',
  Experience: '#experience',
  Projects: '#projects',
};

function useAppNavigation() {
  const navigate = useNavigate();
  const navigateTo = (to: AppRoutes, options?: NavigateOptions) => {
    navigate(to, options);
  };

  return navigateTo;
}

export default useAppNavigation;
