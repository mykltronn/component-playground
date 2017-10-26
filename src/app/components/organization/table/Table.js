import React, { Component } from 'react';
import { orderData } from '../../../../data/tableData';
import TH from './TH';
import TR from './TR';
import TableSearch from './TableSearch';
import './table.css';

const tableHeader = [
  "PO",
  "Shipping",
  "Collection",
  "Design",
  "Color",
  "Date Shipped"
]

const tableStyles = {
  "height": "400px",
  "width": "800px",
  "display": "block",
  "overflow": "scroll",
  "border": "1px solid black",
}

export default class Table extends Component {
  constructor(props) {
    super(props)

    this.sortColumn = this.sortColumn.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      // STATE for SORTING
      displayData: orderData,
      prevSortedCol: 0,
      isReversed: false
    }
  }

  /**
   * Create a filteredData array and 
   */

  handleSearch(event) {
    let query = event.target.value.toLowerCase();
    let filteredData = [];

    orderData.map(row => { // For each row
      row.map(item => { // push any row that matches query on to new array
        if (item.toLowerCase().includes(query)) {
          filteredData.push(row)
        }
      })
    })

    this.setState({ displayData: filteredData })
  }

  sortColumn(event) {
    console.log("sortColumn fires!");

    let data = this.state.displayData;
    let displayData;
    let shouldReverse;
    let isReversed = this.state.isReversed;
    let colToSort = event.target.id;
    let prevSortedCol = this.state.prevSortedCol;

    // ========
    // LOGIC To copy (.slice()) and sort (.sort()) a Two-Dimensional Array for table construction
    // ========

    let initialdisplayData = data.slice().sort(function (a, b) {
      if (a[colToSort] === b[colToSort]) {
        return 0;
      }
      else {
        return (a[colToSort] < b[colToSort]) ? -1 : 1;
      }
    });

    // ==========
    // LOGIC To determine click behavior. Should it show normal or reversed?
    // ==========
    if(isReversed || colToSort !== prevSortedCol) {
      displayData = initialdisplayData;
      shouldReverse = false;
    }
    else if (!isReversed) {
      // if the target is already sorted, reverse the sort order
      displayData = initialdisplayData.reverse();
      isReversed = !this.state.isReversed;
      shouldReverse = true;
    }

    // ========
    // SETSTATE To store the proper sorted data and information about sort order
    // ========

    this.setState({ 
      displayData,
      prevSortedCol: colToSort,
      isReversed: shouldReverse
    })
  }

  render () {
    let orderData = this.state.displayData;

    return (
      <div className="Table">
        <TableSearch handleSearch={this.handleSearch} />
        <table style={tableStyles}>

          <thead>
            <tr>
              {tableHeader.map((header, index) => {
                return <TH
                  header={header}
                  index={index}
                  sortColumn={this.sortColumn}
                  header={header}
                  isReversed={this.state.isReversed}
                />
              })}
            </tr>
          </thead>

          <tbody>
            {orderData.map((row, i) => {
              return (
                <TR row={row} key={i} />
              )
            })}
          </tbody>

        </table>
      </div>
    )
  }
}