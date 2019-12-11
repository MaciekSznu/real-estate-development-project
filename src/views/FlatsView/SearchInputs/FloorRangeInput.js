import React from 'react';
import { floorRange } from '../../../components/Ranges/RangesData';
import InputRange from 'react-input-range';
import styles from './RangeSearchInputs.scss';

class FloorRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = floorRange;
    console.log(this.state);
  }

  render() {

    return (
      <React.Fragment>
        <InputRange minValue={this.state.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => console.log(value)} allowSameValues={true} />
      </React.Fragment>
    );
  }
}

export default FloorRangeContainer;