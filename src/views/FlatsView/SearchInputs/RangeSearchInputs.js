import React from "react";
import styles from "./RangeSearchInputs.module.scss";
import FloorRangeContainer from "./FloorRangeInput";
import RoomsRangeContainer from "./RoomsRangeInput";
import AreaRangeContainer from "./AreaRangeInput";
import PriceRangeContainer from "./PriceRangeInput";

const RangeSearchInputs = () => (
  <div className={styles.rangesWrapper}>
    <div className={styles.rangesItem}>
    <h3 className={styles.rangesTitle}>Piętro</h3>
    <FloorRangeContainer />
    </div>
    <div className={styles.rangesItem}>
    <h3 className={styles.rangesTitle}>Pokoje</h3>
    <RoomsRangeContainer />
    </div>
    <div className={styles.rangesItem}>
    <h3 className={styles.rangesTitle}>Powierzchnia</h3>
    <AreaRangeContainer />
    </div>
    <div className={styles.rangesItem}>
    <h3 className={styles.rangesTitle}>Cena</h3>
    <PriceRangeContainer />
    </div>
  </div>
);

export default RangeSearchInputs;