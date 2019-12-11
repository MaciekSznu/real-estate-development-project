import React from 'react';
import flatsArray from '../../assets/flatsArray';
import styles from './SearchResults.module.scss';

//console.log(flatsArray);

class SearchResultsTable extends React.Component {
  state = {
    allFlats: flatsArray,
    selectedFlats: null,
  }

  isBooleanTrue = (item) => { return item === true ? '\u2022' : ''};

  renderSearchResults() {
    return flatsArray.map((flat, index) => {
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
  }

  renderSearchResultsHeader() {
    let header = {
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

    let headerValues = Object.values(header)
    return headerValues.map((value, index) => {
      return <th key={index}>{value.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={styles.searchResultHeader}>Nasze mieszkania</h2>
        <table className={styles.searchResultTable}>
          <tbody>
            <tr className={styles.searchResultTableHeader}>{this.renderSearchResultsHeader()}</tr>
            {this.renderSearchResults()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default SearchResultsTable;