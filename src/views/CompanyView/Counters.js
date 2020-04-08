import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './Counters.module.scss';

const countersParameters = [
  {
    end: 11,
    duration: 3,
    suffix: '',
    description: 'lat na rynku',
  },
  {
    end: 13,
    duration: 3,
    suffix: '',
    description: 'ukończonych inwestycji',
  },
  {
    end: 637,
    duration: 3,
    suffix: '',
    description: 'sprzedanych mieszkań',
  },
  {
    end: 29876,
    duration: 3,
    suffix: ' m2',
    description: 'powierzchni mieszkań',
  }
]

const Counters = () => {

  const parameters = countersParameters;
 
  return (
  <>
    {parameters.map((counter, index) =>
      <div className={styles.counterItem} key={index}>
        <CountUp end={counter.end} duration={counter.duration} suffix={counter.suffix}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} offset={{top: -100, bottom: -100}} delayedCall>
                    <span className={styles.counterNumbers} ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
        <p className={styles.counterDescription}>{counter.description}</p>
      </div>
    )}
  </>
  );
};

export default Counters;
