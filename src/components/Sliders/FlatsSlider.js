import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './InvestmentSlider.module.scss';
import './InvestmentSlider.css';

import slide_01 from '../../assets/images/flats_slider/living_room_01_1920_1080.jpg';
import slide_02 from '../../assets/images/flats_slider/kitchen_1920_1080.jpg';
import slide_03 from '../../assets/images/flats_slider/bedroom_02_1920_1080.jpg';
import slide_04 from '../../assets/images/flats_slider/home_office_1920_1080.jpg';
import slide_05 from '../../assets/images/flats_slider/bathroom_1920_1080.jpg';
import slide_06 from '../../assets/images/flats_slider/child_room_1920_1080.jpg';

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
