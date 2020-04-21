import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './InvestmentSlider.module.scss';
import './InvestmentSlider.css';

import slide_01 from '../../assets/images/investment_04_1280_853.jpg';
import slide_02 from '../../assets/images/investment_06_1280_930.jpg';
import slide_03 from '../../assets/images/investment_03_1280_853.jpg';
import slide_04 from '../../assets/images/interior_02_1280_857.jpg';
import slide_05 from '../../assets/images/interior_03_1280_853.jpg';

const AutoplayerSlider = withAutoplay(AwesomeSlider);

const InvestmentSlider = (
  <AutoplayerSlider bullets={true} play={true}
  cancelOnInteraction={false}
  interval={5000} className={styles.sliderWrapper}>
    <div data-src={slide_01} >
      <p className={styles.sliderDescription}>Tradycja i nowoczesność</p>
    </div>
    <div data-src={slide_02} >
      <p className={styles.sliderDescription}>Tereny rekreacyjne</p>
    </div>
    <div data-src={slide_03} >
      <p className={styles.sliderDescription}>Zielone balkony</p>
    </div>
    <div data-src={slide_04} >
      <p className={styles.sliderDescription}>Bliskość natury</p>
    </div>
    <div data-src={slide_05} >
      <p className={styles.sliderDescription}>Komfortowe wnętrza</p>
    </div>
  </AutoplayerSlider>
);

export default InvestmentSlider;




