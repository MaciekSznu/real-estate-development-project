import React from "react";
import styles from "./LocationView.module.scss";
import { LocationMap as Map } from "../../components/Maps/Maps";
import Fade from 'react-reveal/Fade';


const LocationView = () => (
  <div className={styles.locationViewWrapper}  id='lokalizacja'>
    <div className={styles.locationViewTextWrapper}>
      <Fade right duration={2000}>
        <h1 className={styles.sectionTitle}>Lokalizacja</h1>
      </Fade>
      <Fade left cascade delay={500} duration={2000}>
        <div>
          <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
          <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
        </div>
      </Fade>
    </div>
    <div className={styles.mapWrapper}>
      <Map />
    </div>
  </div>
);

export default LocationView;