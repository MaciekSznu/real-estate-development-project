import React from "react";
import styles from "./CompanyView.module.scss";
import CountersWrapper from './CountersWrapper';
import CompanySlider from '../../components/Sliders/CompanySlider'

const CompanyView = () => (
  <div className={styles.companyViewWrapper} id='inwestor'>
    <h1 className={styles.sectionTitle}>Inwestor</h1>
    <div className={styles.companyTopSectionWrapper}>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est. <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
    {CompanySlider}
    </div>
    <CountersWrapper />
  </div>
);
 
export default CompanyView;