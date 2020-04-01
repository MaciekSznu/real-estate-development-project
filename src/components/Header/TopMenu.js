import React from "react";
import styles from "./TopMenu.module.scss";
import { Link } from 'react-scroll';


class TopMenu extends React.Component {

  render() {
    return (
      <ul className={styles.topMenuWrapper}>
        <li>
          <Link to='inwestycja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestycja</Link>
        </li>
        <li>
          <Link to='lokalizacja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Lokalizacja</Link>
        </li>
        <li>
          <Link to='mieszkania' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Mieszkania</Link>
        </li>
        <li>
          <Link to='inwestor' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestor</Link>
        </li>
        <li>
          <Link to='kontakt' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Kontakt</Link>
        </li>
      </ul>
    );
  }
};

export default TopMenu;