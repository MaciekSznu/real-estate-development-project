import React from "react";
import styles from "./ContactView.module.scss";
import { ContactMap as Map } from "../../components/Maps/Maps";
import SiteMap from "../../components/Footer/SiteMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';


const ContactView = () => (
  <>
    <div className={styles.contactViewWrapper} id='kontakt'>
      <div className={styles.contactViewTextWrapper}>
        <h2 className={styles.sectionTitle}><FontAwesomeIcon icon={faBuromobelexperte} />&nbsp; Logo</h2>
        <div className={styles.sectionAdress}>
          <span className={styles.adress}>Miasto</span>
          <span className={styles.adress}>ul. Ulica 123/456</span>
          <span className={styles.phone}><a href='tel:602-755-332'>602-755-332</a></span>
          <span className={styles.email}><a href='mailto: msznurawa@gmail.com'>email</a></span>
        </div>
      </div>
      <div className={styles.contactViewSiteMapWrapper}>
        <h3 className={styles.sectionTitle}>mapa strony</h3>
        <SiteMap />
      </div>
      <div className={styles.mapWrapper}>
        <Map />
      </div>
    </div>
    <div className={styles.copyRight}>
      <p className={styles.copyRightText}>&copy; 2020 Maciej Sznurawa / All rights reserved / Photos from Pixabay</p>
      <div className={styles.copyRightIcons}>
        <span className={styles.copyRightIcon}><FontAwesomeIcon icon={faFacebookSquare} /></span>
        <span className={styles.copyRightIcon}><FontAwesomeIcon icon={faInstagramSquare} /></span>
        <span className={styles.copyRightIcon}><FontAwesomeIcon icon={faTwitterSquare} /></span>
      </div>
    </div>
  </>
);

export default ContactView;