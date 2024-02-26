import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";

const Hero = ({ refHero }) => {
  return (
    <section
      id="hero"
      className={styles.hero}
      ref={(node) => {
        refHero = node;
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Connecting People.</h1>
        <span className={styles.subtitle}>Improving lives.</span>
      </div>
      <div className={styles.img}>
        <div className={styles.blure}></div>
        <LogoIcon className={styles.icon} />
      </div>
    </section>
  );
};

export default Hero;
