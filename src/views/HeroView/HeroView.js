import React from "react";
import { Link } from 'react-scroll';
import styles from "./HeroView.module.scss";
import Zoom from 'react-reveal/Zoom';

const HeroView = () => (
  <div className={styles.heroViewWrapper} id='hero'>
    <Zoom duration={2000} >
      <div className={styles.heroViewTextWrapper}>
        <h1 className={styles.heroTitle}>
            Twoje okno na świat
        </h1>
        <p className={styles.heroText}></p>
      </div>
    </Zoom>
    <button className={styles.heroButton}>
      <Link to='inwestycja' smooth={true} duration={1000}>
          <span>odkrywaj</span>
      </Link>
    </button>
  </div>
);

export default HeroView;