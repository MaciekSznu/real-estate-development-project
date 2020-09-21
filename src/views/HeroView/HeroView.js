import React from "react";
import { Link } from 'react-scroll';
import styles from "./HeroView.module.scss";
import Zoom from 'react-reveal/Zoom';

const HeroView = () => (
  <div className={styles.heroViewWrapper} id='hero'>
    <Zoom duration={2000} >
      <div className={styles.heroViewTextWrapper}>
        <h1 className={styles.heroTitle}>
            Wyjątkowe mieszkania
        </h1>
        <p className={styles.heroText}></p>
      </div>
    </Zoom>
    <button className={styles.heroButton}>
      <Link to='wyszukiwarka' smooth={true} duration={1000}>
          <span>Znajdź swoje</span>
      </Link>
    </button>
  </div>
);

export default HeroView;