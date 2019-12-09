import React from 'react';
// import PropTypes from 'prop-types';
import { roomsRange } from '../../../components/Ranges/RangesData';
import InputRange from 'react-input-range';
import styles from 'react-input-range/lib/css/index.css';

class RoomsRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = roomsRange;
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <InputRange minValue={this.state.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => console.log(value)} />
      </React.Fragment>
    );
  }
}

export default RoomsRangeContainer;