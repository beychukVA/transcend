import React from "react";
import styles from "./styles.module.scss";

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.content}>
        <h2 className={styles.title}>About trucking</h2>
        <span className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
          <br />
          <strong>Exercitation veniam consequat sunt nostrud amet.</strong>
        </span>
        <ul className={styles.list}>
          <div className={styles.itemContainer}>
            <div className={styles.arrow}></div>
            <li className={styles.listItem}>Amet minim mollit non deserunt</li>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.arrow}></div>
            <li className={styles.listItem}>
              Ullamco est sit aliqua dolor do amet sint
            </li>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.arrow}></div>
            <li className={styles.listItem}>
              Velit officia consequat duis enim velit molli
            </li>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.arrow}></div>
            <li className={styles.listItem}>
              Exercitation veniam consequat sunt nostrud amet.
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.images}>
        <div className={styles.imagesOne}>
          <div className={styles.imgOne}></div>
          <div className={styles.imgTwo}></div>
        </div>
        <div className={styles.imagesTwo}>
          <div className={styles.imgThree}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
