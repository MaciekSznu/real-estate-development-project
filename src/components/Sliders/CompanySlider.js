import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './CompanySlider.module.scss';
import './InvestmentSlider.css';

import slide_01 from '../../assets/images/company_01_768_454.jpg';
import slide_02 from '../../assets/images/company_02_768_458.jpg';
import slide_03 from '../../assets/images/company_03_768_432.jpg';
import slide_04 from '../../assets/images/company_04_768_512.jpg';
import slide_05 from '../../assets/images/company_05_768_576.jpg';

const AutoplayerSlider = withAutoplay(AwesomeSlider);

const CompanySlider = (
  <AutoplayerSlider bullets={true} play={true}
  cancelOnInteraction={false}
  interval={4500} className={styles.sliderWrapper}>
    <div data-src={slide_01} >
      <p className={styles.sliderDescription}>2015 - 124 mieszkania</p>
    </div>
    <div data-src={slide_02} >
      <p className={styles.sliderDescription}>2016 - 97 mieszkań</p>
    </div>
    <div data-src={slide_03} >
      <p className={styles.sliderDescription}>2017 - 86 mieszkań</p>
    </div>
    <div data-src={slide_04} >
      <p className={styles.sliderDescription}>2018 - 43 mieszkania</p>
    </div>
    <div data-src={slide_05} >
      <p className={styles.sliderDescription}>2019 - 74 mieszkania</p>
    </div>
  </AutoplayerSlider>
);

export default CompanySlider;




