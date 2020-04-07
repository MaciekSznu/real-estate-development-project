import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styles from './InvestmentSlider.module.scss';
import './InvestmentSlider.css';


import slide_01 from '../../assets/images/room-4161937_1920.jpg';
import slide_02 from '../../assets/images/room-4161938_1920.jpg';
import slide_03 from '../../assets/images/room-4161939_1920.jpg';

const InvestmentSlider = (
  <AwesomeSlider transitionDelay={100} bullets={true} className={styles.sliderWrapper}>
  <div data-src={slide_01} >
    <p className={styles.sliderDescription}>Lalalalalla</p>
  </div>
  <div data-src={slide_02} >
    <p className={styles.sliderDescription}>Lalalalalla</p>
  </div>
  <div data-src={slide_03} >
    <p className={styles.sliderDescription}>Lalalalalla</p>
  </div>
  </AwesomeSlider>
);

export default InvestmentSlider;




