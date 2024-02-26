import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Navigation = ({
  refHero,
  refAboutUs,
  refContactUs,
  onScrollToSection,
}) => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={styles.link}
        onClick={() => onScrollToSection(refHero)}
      >
        Home
      </NavLink>
      <NavLink
        className={styles.link}
        onClick={() => onScrollToSection(refAboutUs)}
      >
        About us
      </NavLink>
      <NavLink
        className={styles.link}
        onClick={() => onScrollToSection(refContactUs)}
      >
        Contact us
      </NavLink>
    </nav>
  );
};

export default Navigation;
