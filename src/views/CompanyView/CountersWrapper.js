import React from 'react';
import styles from './CountersWrapper.module.scss';
import Counters from './Counters';


const CountersWrapper = () => {
  return (
    <div className={styles.countersWrapper}>
      <Counters />
    </div>
  );
};

export default CountersWrapper;
