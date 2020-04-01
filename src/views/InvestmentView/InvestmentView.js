import React from "react";
import styles from "./InvestmentView.module.scss";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const InvestmentView = () => (
  <>
  <div className={styles.investmentViewWrapper} id='inwestycja'>
    <h1 className={styles.sectionTitle}>Nazwa inwestycji</h1>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
  </div>
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div data-src='../../assets/images/room-4161937_1920.jpg' >
      <p>Lalalalalla</p>
    </div>
    <div data-src='../../assets/images/room-4161938_1920.jpg' >
      <p>Lalalalalla</p>
    </div>
    <div data-src='../../assets/images/room-4161939_1920.jpg' >
      <p>Lalalalalla</p>
    </div>
  </AwesomeSlider>
  </>
);

export default InvestmentView;