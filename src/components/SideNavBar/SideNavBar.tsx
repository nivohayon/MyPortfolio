import { useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { combineClasses } from '../../utils/combineClasses';
import './SideNavBar.css';

const navItems = [
  routes.About,
  routes.Education,
  routes.Experience,
  routes.Projects,
];

type SideNavBarProps = {
  selectedNavItemByScrollPosition: number;
};

function SideNavBar({ selectedNavItemByScrollPosition }: SideNavBarProps) {
  const { hash } = useLocation();

  return (
    <nav className="container__SideNavBar">
      <ul className="ul__SideNavBar">
        {navItems.map((item, index) => {
          return (
            <li key={item}>
              <a className="a___SideNavBar" href={`#${item}`}>
                <span
                  className={combineClasses(
                    'dash__SideNavBar',
                    hash === `#${item}` ||
                      selectedNavItemByScrollPosition === index
                      ? ' selected_dash__SideNavBar'
                      : ''
                  )}
                />
                <span
                  className={combineClasses(
                    'a_span_text__SideNavBar',
                    hash === `#${item}` ||
                      selectedNavItemByScrollPosition === index
                      ? ' selected_text__SideNavBar'
                      : ''
                  )}
                >
                  {item}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNavBar;
