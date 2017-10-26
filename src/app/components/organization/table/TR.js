import React from 'react';
import TD from './TD';

const TR = (props) => {
  return (
    <tr>
      {props.row.map((td, index) => {
        return <TD td={td} key={index}/>
      })}
    </tr>
  )
}

export default TR;