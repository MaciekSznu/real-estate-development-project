import React from 'react';
import PropTypes from 'prop-types';
import flatsArray from '../../assets/flatsArray';
//import styles from './SearchResults.module.scss';

console.log(flatsArray);

class SearchResultsTable extends React.Component {
  contsructor(props) {
    //super(props);
    this.setState = flatsArray
  }

  renderSearchResults() {
    return flatsArray.map((flat, index) => {
      const {buildingNumber, flatNumber, floor, rooms, area, balcony, terrace, price, status, chart} = flat
      return (
        <tr key={flatNumber}>
          <td>{buildingNumber}</td>
          <td>{flatNumber}</td>
          <td>{floor}</td>
          <td>{rooms}</td>
          <td>{area}</td>
          <td>{balcony}</td>
          <td>{terrace}</td>
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
        <h2>Nasze mieszkania</h2>
        <table>
          <tbody>
            <tr>{this.renderSearchResultsHeader()}</tr>
            {this.renderSearchResults()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default SearchResultsTable;