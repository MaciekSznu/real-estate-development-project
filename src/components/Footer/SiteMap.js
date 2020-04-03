import React from "react";
import styles from "./SiteMap.module.scss";
import { Link } from 'react-scroll';


class SiteMap extends React.Component {

  render() {
    return (
      <>
        <span>
          <Link to='inwestycja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.siteMapItem} >Inwestycja</Link>
        </span>
        <span>
          <Link to='lokalizacja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.siteMapItem} >Lokalizacja</Link>
        </span>
        <span>
          <Link to='mieszkania' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.siteMapItem} >Mieszkania</Link>
        </span>
        <span>
          <Link to='inwestor' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.siteMapItem} >Inwestor</Link>
        </span>
        <span>
          <Link to='kontakt' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.siteMapItem} >Kontakt</Link>
        </span>
      </>
    );
  }
};

export default SiteMap;