import React from "react";
import styles from "./InvestmentView.module.scss";
import InvestmentSlider from '../../components/Sliders/InvestmentSlider';

 
const InvestmentView = () => (
  <div className={styles.investmentViewWrapper} id='inwestycja'>
    <div className={styles.investmentViewTextWrapper}>
      <h1 className={styles.sectionTitle}>Nazwa inwestycji</h1>
      <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
      <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
    </div>
    {/* <AwesomeSlider transitionDelay={100} bullets={true} className={styles.sliderWrapper}>
      <div data-src={slide_01} >
        <p className={styles.sliderDescription}>Lalalalalla</p>
      </div>
      <div data-src={slide_02} >
        <p className={styles.sliderDescription}>Lalalalalla</p>
      </div>
      <div data-src={slide_03} >
        <p className={styles.sliderDescription}>Lalalalalla</p>
      </div>
    </AwesomeSlider> */}
    {InvestmentSlider}
  </div>
);

export default InvestmentView;