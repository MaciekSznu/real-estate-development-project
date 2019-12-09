import React from "react";
import styles from "./TopMenu.module.scss";

const TopMenu = () => (
  <ul className={styles.topMenuWrapper}>
    <li className={styles.topMenuItem}>Inwestycja</li>
    <li className={styles.topMenuItem}>Lokalizacja</li>
    <li className={styles.topMenuItem}>Mieszkania</li>
    <li className={styles.topMenuItem}>Inwestor</li>
    <li className={styles.topMenuItem}>Kontakt</li>
  </ul>
);

export default TopMenu;