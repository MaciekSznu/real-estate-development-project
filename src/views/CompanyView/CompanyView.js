import React from "react";
import styles from "./CompanyView.module.scss";
import CountersWrapper from './CountersWrapper';
import CompanySlider from '../../components/Sliders/CompanySlider';
import Fade from 'react-reveal/Fade';


const CompanyView = () => (
  <div className={styles.companyViewWrapper} id='inwestor'>
    <Fade left duration={2000}>
      <h1 className={styles.sectionTitle}>Inwestor</h1>
    </Fade>
    <div className={styles.companyTopSectionWrapper}>
    <Fade right duration={2000}>
      <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est. <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
    </Fade>
    {CompanySlider}
    </div>
    <CountersWrapper />
  </div>
);
 
export default CompanyView;