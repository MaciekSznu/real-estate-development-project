import React from "react";
import { Link } from 'react-scroll';
import styles from "./HeroView.module.scss";

const HeroView = () => (
  <div className={styles.heroViewWrapper} id='hero'>
    <div className={styles.heroViewTextWrapper}>
      <h1 className={styles.heroTitle}>Twoje okno na świat</h1>
      <p className={styles.heroText}></p>
    </div>
    <button className={styles.heroButton}>
      <Link to='inwestycja' smooth={true} duration={1000}>
          <span>czytaj dalej</span>
      </Link>
    </button>
  </div>
);

export default HeroView;