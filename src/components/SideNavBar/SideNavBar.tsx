import { useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';
import './SideNavBar.css';

const navItems = [routes.About, routes.Experience, routes.Projects];

function SideNavBar() {
  const { hash } = useLocation();

  return (
    <nav className="container__SideNavBar">
      <ul className="ul__SideNavBar">
        {navItems.map((item) => {
          return (
            <li key={item}>
              <a className="a___SideNavBar" href={`#${item}`}>
                <span
                  className={`dash__SideNavBar${
                    hash === `#${item}` ? ' selected__SideNavBar' : ''
                  }`}
                />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNavBar;
