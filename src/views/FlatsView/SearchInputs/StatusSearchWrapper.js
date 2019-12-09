import React from "react";
import styles from "./ColumnSearchWrapper.module.scss";
import StatusCheckboxContainer from "./StatusSearchInput";

const StatusSearchWrapper = () => (
  <>
    <div className={styles.columnWrapper}>
      <h3 className={styles.columnTitle}>Status</h3>
      <StatusCheckboxContainer />
    </div>
  </>
);

export default StatusSearchWrapper;