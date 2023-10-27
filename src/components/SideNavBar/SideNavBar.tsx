import { useLocation } from 'react-router-dom';
import './SideNavBar.css';

const navItems = ['about', 'experience', 'projects'];

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
