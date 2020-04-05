import React from 'react';
import flatsArray from '../../assets/flatsArray';
import { minFloorValue, maxFloorValue, minAreaValue, maxAreaValue, minRoomsValue, maxRoomsValue, minPriceValue, maxPriceValue } from '../Ranges/RangesData';
import styles from './SearchResults.module.scss';

class SearchResultsTable extends React.Component {
  state = {
    flats: flatsArray,
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  isBooleanTrue = (item) => {return item === true ? '\u2022' : ''};

  filterFlatsArray(props) {
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
    )
  }

  renderSearchResults() {
    console.log(this.filterFlatsArray().length);
    return (
        this.filterFlatsArray().map((flat, index) => {
        const {buildingNumber, flatNumber, floor, rooms, area, balcony, terrace, price, status, chart} = flat
        return (
          <tr className={styles.searchResultTableRow} key={index}>
            <td>{buildingNumber}</td>
            <td>{flatNumber}</td>
            <td>{floor}</td>
            <td>{rooms}</td>
            <td>{area}</td>
            { this.state.width >= 930 && <td>{this.isBooleanTrue(balcony)}</td> }
            { this.state.width >= 930 && <td>{this.isBooleanTrue(terrace)}</td> }
            <td>{price}</td>
            { this.state.width >= 930 && <td>{status}</td> }
            <td>{chart}</td>
          </tr>
          )
        })
    );
  }

  renderPagination() {
    const numberOfflats = this.filterFlatsArray().length;
    const perPage = (this.state.width >= 720) ? 5 : 3;
    const pages = Math.ceil(numberOfflats / perPage);
    const pagesNumbersArray = [...Array(pages).keys()].map(i => ++i);
    console.log(this.filterFlatsArray());
    console.log(pagesNumbersArray);



    // const changePage = () => {

    // const from = pagesNumbersArray[i-1]*perPage;
    // const to = pagesNumbersArray[i]*perPage;

    //   this.filterFlatsArray().slice(from, to);
    // }


    return (

      pagesNumbersArray.map((value, index) => {
        return <span key={index} onClick={console.log(value)}>{value}</span>
        })
    );
  }


  renderSearchResultsHeader() {
    const header = (this.state.width >= 930) ? {
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
    } : {
      buildingNumber: 'budynek',
      flatNumber: 'mieszkanie',
      floor: 'piętro',
      rooms: 'pokoje',
      area: 'powierzchnia',
      price: 'cena',
      chart: 'karta',
    };

    const headerValues = Object.values(header);
    return headerValues.map((value, index) => {
      return <th key={index}>{value.toUpperCase()}</th>
    });
  }

  render() {
    // this.props.filter - propsy z wartościami przefiltrowanymi
    console.log(this.props);

    return (
      <>
        <h2 className={styles.searchResultHeader}>Nasze mieszkania</h2>
        <div className={styles.searchResultsTableWrapper}>
          <table className={styles.searchResultTable}>
            <tbody>
              <tr className={styles.searchResultTableHeader}>{this.renderSearchResultsHeader()}</tr>
              {this.renderSearchResults()}
            </tbody>
          </table>
        </div>
        <div>{this.renderPagination()}</div>
      </>
    )
  }
}

export default SearchResultsTable;