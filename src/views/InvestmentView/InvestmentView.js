import React from "react";
import styles from "./InvestmentView.module.scss";
import InvestmentSlider from '../../components/Sliders/InvestmentSlider';
import Fade from 'react-reveal/Fade';

const InvestmentView = () => (
  <div className={styles.investmentViewWrapper} id='inwestycja'>
    <div className={styles.investmentViewTextWrapper}>
      <Fade left duration={2000}>
        <h1 className={styles.sectionTitle}>Nazwa inwestycji</h1>
      </Fade>
      <Fade right cascade delay={500} duration={2000}>
        <div>
          <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
          <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
        </div>
      </Fade>
    </div>
    {InvestmentSlider}
  </div>
);

export default InvestmentView;