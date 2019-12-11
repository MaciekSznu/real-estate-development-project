import React from "react";
import styles from "./ColumnSearchWrapper.module.scss";
import BalconyCheckboxContainer from "./BalconySearchInput";
import StatusCheckboxContainer from "./StatusSearchInput";


const CheckboxSearchWrapper = () => (
  <>
    <div className={styles.columnWrapper}>
      <h3 className={styles.columnTitle}>Balkon</h3>
      <BalconyCheckboxContainer />
    </div>
    <div className={styles.columnWrapper}>
      <h3 className={styles.columnTitle}>Balkon</h3>
      <StatusCheckboxContainer />
    </div>
  </>
);

export default CheckboxSearchWrapper;