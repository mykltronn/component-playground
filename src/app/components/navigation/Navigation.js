import React from 'react';
import Tabs from './tabs/Tabs';

const Navigation = () => {
  return (
    <div className="Navigation">
      <h1>It's the Navigation page</h1>
      <div className="nav-component">
        <hr />
        <h3>Tabs!</h3>
        <p></p>

        <Tabs />
        <hr />
      </div>
    </div>
  )
}

export default Navigation;
