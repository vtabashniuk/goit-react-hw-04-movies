import { NavLink } from 'react-router-dom';
import routes from 'routes';
import styles from './Header.module.css';


const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink
              exact
              to={routes.home}
              className={styles.headerLink}
              activeClassName={styles.headerActiveLink}
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.movies}
              className={styles.headerLink}
              activeClassName={styles.headerActiveLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
