import React from "react";
import styles from "./FlatsView.module.scss";
import RangeSearchInputs from "../FlatsView/SearchInputs/RangeSearchInputs";
import SearchResultsTable from "../../components/SearchResults/SearchResultsTable";

class FlatsView extends React.Component {

  // stan filtrów po zmianie
  state = {filters:{
    selectedFloors: {},
    selectedRooms: {},
    selectedArea: {},
    selectedPrice: {},
  }}

  // funkcja rejestrująca zmiany plus destrukturyzacja i dodawanie value
  onFloorChange = (value) => {
    const selectedFloors = value.floor;
    this.setState({filters: {...this.state.filters, selectedFloors}});
  };

  onRoomsChange = (value) => {
    const selectedRooms = value.rooms;
    this.setState({filters: {...this.state.filters, selectedRooms}});
  };

  onAreaChange = (value) => {
    const selectedArea = value.area;
    this.setState({filters: {...this.state.filters, selectedArea}});
  };

  onPriceChange = (value) => {
    const selectedPrice = value.price;
    this.setState({filters: {...this.state.filters, selectedPrice}});
  };

  // onRangeChange jako props
  render() {
    return (
      <div className={styles.flatsViewWrapper} id='mieszkania'>
        <h1 className={styles.sectionTitle}>Mieszkania</h1>
        <h2 className={styles.sectionTitle}>Znajdź swoje wymarzone mieszkanie</h2>
        <div className={styles.flatSearchWrapper}>
          <RangeSearchInputs
          onFloorChange = {this.onFloorChange}
          onRoomsChange = {this.onRoomsChange}
          onAreaChange = {this.onAreaChange}
          onPriceChange = {this.onPriceChange} />
        </div>
        <SearchResultsTable filters={this.state.filters} />
      </div>
    )
  }
};

export default FlatsView;