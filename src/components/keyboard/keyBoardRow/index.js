import React from 'react'
import Key from '../keyItem';

function KeyboardRow(props) {
  const { letterrow } = props;
  return (
    <div className="row">
      {
        letterrow.map((item, index) =>
          <Key
            letter={item.key}
            id={item.id}
            key={index}
            sp={item.sp || "key"} />)
      }
    </div>
  )
}

export default KeyboardRow
