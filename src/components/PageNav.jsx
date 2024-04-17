import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <section className={styles.section}>
      <NavLink to="/" className={styles.logo}></NavLink>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default PageNav;
