import React from "react";
import styles from "./ColumnSearchWrapper.module.scss";
import BalconyCheckboxContainer from "./BalconySearchInput";

const BalconySearchWrapper = () => (
  <>
    <div className={styles.columnWrapper}>
      <h3 className={styles.columnTitle}>Balkon</h3>
      <BalconyCheckboxContainer />
    </div>
  </>
);

export default BalconySearchWrapper;