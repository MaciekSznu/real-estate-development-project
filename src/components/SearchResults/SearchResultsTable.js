import React from 'react';
import flatsArray from '../../assets/flatsArray';
import { minFloorValue, maxFloorValue, minAreaValue, maxAreaValue, minRoomsValue, maxRoomsValue, minPriceValue, maxPriceValue } from '../Ranges/RangesData';
import styles from './SearchResults.module.scss';

class SearchResultsTable extends React.Component {
  state = {
    flats: flatsArray,
  }

  isBooleanTrue = (item) => {return item === true ? '\u2022' : ''};

  renderSearchResults(props) {
    return (
        this.state.flats.filter((el) => {
          return el.floor <= (this.props.filters.selectedFloors.max !== undefined ? this.props.filters.selectedFloors.max : maxFloorValue) &&
                 el.floor >= (this.props.filters.selectedFloors.min !== undefined ? this.props.filters.selectedFloors.min : minFloorValue) &&
                 el.rooms <= (this.props.filters.selectedRooms.max !== undefined ? this.props.filters.selectedRooms.max : maxRoomsValue) &&
                 el.rooms >= (this.props.filters.selectedRooms.min !== undefined ? this.props.filters.selectedRooms.min : minRoomsValue) &&
                 el.area <= (this.props.filters.selectedArea.max !== undefined ? this.props.filters.selectedArea.max : maxAreaValue) &&
                 el.area >= (this.props.filters.selectedArea.min !== undefined ? this.props.filters.selectedArea.min : minAreaValue) &&
                 el.price <= (this.props.filters.selectedPrice.max !== undefined ? this.props.filters.selectedPrice.max : maxPriceValue) &&
                 el.price >= (this.props.filters.selectedPrice.min !== undefined ? this.props.filters.selectedPrice.min : minPriceValue) &&
                 el.balcony !== '' &&
                 el.terrace !== '' &&
                 el.status === 'for sale'
        })
        .map((flat, index) => {
        const {buildingNumber, flatNumber, floor, rooms, area, balcony, terrace, price, status, chart} = flat
        return (
          <tr className={styles.searchResultTableRow} key={flatNumber}>
            <td>{buildingNumber}</td>
            <td>{flatNumber}</td>
            <td>{floor}</td>
            <td>{rooms}</td>
            <td>{area}</td>
            <td>{this.isBooleanTrue(balcony)}</td>
            <td>{this.isBooleanTrue(terrace)}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>{chart}</td>
          </tr>
          )
        })
      )
    }

  renderSearchResultsHeader() {
    const header = {
      buildingNumber: 'budynek',
      flatNumber: 'mieszkanie',
      floor: 'piętro',
      rooms: 'pokoje',
      area: 'powierzchnia',
      balcony: 'balkon',
      terrace: 'taras',
      price: 'cena',
      status: 'status',
      chart: 'karta',
    }

    const headerValues = Object.values(header)
    return headerValues.map((value, index) => {
      return <th key={index}>{value.toUpperCase()}</th>
    })
  }

  render() {
    // this.props.filter - propsy z wartościami przefiltrowanymi
    console.log(this.props);

    return (
      <>
        <h2 className={styles.searchResultHeader}>Nasze mieszkania</h2>
        <table className={styles.searchResultTable}>
          <tbody>
            <tr className={styles.searchResultTableHeader}>{this.renderSearchResultsHeader()}</tr>
            {this.renderSearchResults()}
          </tbody>
        </table>
      </>
    )
  }
}

export default SearchResultsTable;