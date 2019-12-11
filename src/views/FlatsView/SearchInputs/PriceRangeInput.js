import React from 'react';
// import PropTypes from 'prop-types';
import { priceRange, numberFormat } from '../../../components/Ranges/RangesData';
import InputRange from 'react-input-range';
//import styles from 'react-input-range/lib/css/index.css';

class PriceRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = priceRange;
    console.log(this.state);
  }
  //pozmieniać na priceRange
  // to może być środek do reusable code of this component
  render() {
    return (
      <React.Fragment>
        <InputRange minValue={priceRange.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => console.log(value)} formatLabel={value => `${numberFormat(value)} ${this.state.label}`} />
      </React.Fragment>
    );
  }
}

export default PriceRangeContainer;