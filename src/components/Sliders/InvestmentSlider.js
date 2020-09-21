import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './InvestmentSlider.module.scss';
import './InvestmentSlider.css';

import slide_01 from '../../assets/images/investment_slider/main_view_1920_1080.jpg';
import slide_02 from '../../assets/images/investment_slider/interior_view_1920_1080.jpg';
import slide_03 from '../../assets/images/investment_slider/main_view_02_1920_1080_flip.jpg';
import slide_04 from '../../assets/images/investment_slider/hero_1920_1080.jpg';
// import slide_05 from '../../assets/images/investment_slider/';

const AutoplayerSlider = withAutoplay(AwesomeSlider);

const InvestmentSlider = (
  <AutoplayerSlider bullets={true} play={true}
  cancelOnInteraction={false}
  interval={5000} className={styles.sliderWrapper}>
    <div data-src={slide_01} >
      <p className={styles.sliderDescription}>Nowoczesna willa miejska</p>
    </div>
    <div data-src={slide_02} >
      <p className={styles.sliderDescription}>Ekskluzywne wnętrza</p>
    </div>
    <div data-src={slide_03} >
      <p className={styles.sliderDescription}>Taras na dachu</p>
    </div>
    <div data-src={slide_04} >
      <p className={styles.sliderDescription}>Panorama Starego Miasta</p>
    </div>
    {/* <div data-src={slide_05} >
      <p className={styles.sliderDescription}>Komfortowe wnętrza</p>
    </div> */}
  </AutoplayerSlider>
);

export default InvestmentSlider;




