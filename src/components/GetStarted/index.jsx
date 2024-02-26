import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.img}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Lorem Ipsum Dolor</h2>
        <span className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </span>
        <NavLink className={styles.link} to="/">
          GET STARTED
        </NavLink>
      </div>
    </section>
  );
};

export default GetStarted;
