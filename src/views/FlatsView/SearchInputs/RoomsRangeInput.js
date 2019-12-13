import React from 'react';
import AppContext from '../../../context';
import { roomsRange } from '../../../components/Ranges/RangesData';
import InputRange from 'react-input-range';
import './RangeSearchInputs.scss';

class RoomsRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = roomsRange;
    console.log(this.state);
  }

  render() {
    const roomsChangedValue = {
      ...this.state.value
    }
    console.log(roomsChangedValue);

    return (
      <React.Fragment>
        <AppContext.Provider value={roomsChangedValue}>
        <InputRange minValue={this.state.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => console.log(value) } allowSameValues={true} />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

export default RoomsRangeContainer;