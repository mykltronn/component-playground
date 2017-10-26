import React from 'react';

const TH = (props) => {
  let isReversed = props.isReversed;
  return (
    <th
      key={props.index}
      onClick={props.sortColumn}
      id={props.index}
    >
      {props.header}
    </th>
  )
}

export default TH;