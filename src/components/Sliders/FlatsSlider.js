import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './InvestmentSlider.module.scss';
import './InvestmentSlider.css';

import slide_01 from '../../assets/images/interior_01_1280_768.jpg';
import slide_02 from '../../assets/images/interior_09_1280_885.jpg';
import slide_03 from '../../assets/images/interior_10_1280_703.jpg';
import slide_04 from '../../assets/images/interior_04_1280_720.jpg';
import slide_05 from '../../assets/images/interior_08_1280_853.jpg';
import slide_06 from '../../assets/images/interior_06_1280_753.jpg';

const AutoplayerSlider = withAutoplay(AwesomeSlider);
 
const FlatsSlider = (
  <AutoplayerSlider bullets={true} play={true}
  cancelOnInteraction={false}
  interval={4000} className={styles.sliderWrapper}>
    <div data-src={slide_01} >
      <p className={styles.sliderDescription}></p>
    </div>
    <div data-src={slide_02} >
      <p className={styles.sliderDescription}></p>
    </div>
    <div data-src={slide_03} >
      <p className={styles.sliderDescription}></p>
    </div>
    <div data-src={slide_04} >
      <p className={styles.sliderDescription}></p>
    </div>
    <div data-src={slide_05} >
      <p className={styles.sliderDescription}></p>
    </div>
    <div data-src={slide_06} >
      <p className={styles.sliderDescription}></p>
    </div>
  </AutoplayerSlider>
);

export default FlatsSlider;
