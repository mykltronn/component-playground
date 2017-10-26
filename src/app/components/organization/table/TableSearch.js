import React from 'react';

const TableSearch = (props) => {
  return (
    <div className="TableSearch">
      <span>Search</span>
      <input type="text" onChange={props.handleSearch} />
    </div>
    
  )
}

export default TableSearch;