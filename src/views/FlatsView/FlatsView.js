import React from "react";
import styles from "./FlatsView.module.scss";
import RangeSearchInputs from "../FlatsView/SearchInputs/RangeSearchInputs";
import SearchResultsTable from "../../components/SearchResults/SearchResultsTable";
import FlatsSlider from '../../components/Sliders/FlatsSlider';
 
class FlatsView extends React.Component {

  state = {filters:{
    selectedFloors: {},
    selectedRooms: {},
    selectedArea: {},
    selectedPrice: {},
  }}

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

  render() {
    return (
      <div className={styles.flatsViewWrapper} id='mieszkania'>
        <h1 className={styles.sectionTitle}>Mieszkania</h1>
        <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
        {FlatsSlider}
        <h2 className={styles.sectionSubTitle}>Znajdź swoje wymarzone mieszkanie</h2>
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