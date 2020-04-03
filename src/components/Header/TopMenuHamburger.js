import React from "react";
import styles from "./TopMenuHamburger.module.scss";

class Hamburger extends React.Component {

  render() {
    return (
      <button className={styles.hamburger}>
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    )
  }
}

export default Hamburger;