import React from 'react';
import Toggle from './toggle/Toggle';

const Buttons = () => {
  return (
    <div>
      <h1>This is the Buttons page</h1>
      <div className="btn-component">
        <hr />
        <h3>A toggle switch</h3>
        <p></p>

        <Toggle />
        <hr />
      </div>
    </div>
  )
}

export default Buttons;