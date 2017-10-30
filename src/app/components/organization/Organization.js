import React from 'react';
import Table from './table/Table'

const Organization = () => {
  return (
    <div className="Organization">
      <h1>It's the Organization page</h1>
      <div className="component-container">

        <div className="org-component">
          <hr />
          <h3>A sortable, searchable table</h3>
          <p>This table conditionally renders each row according to sort/search params given by user</p>

          <Table />
          <hr />
        </div>

        <div className="org-component">
          <hr />
          <h3>Some other thing</h3>
          <p>This is a whole other thing.</p>

          {/* here's where that thing goes */}
          <hr />
        </div>

      </div>
    </div>
  )
}

export default Organization;
