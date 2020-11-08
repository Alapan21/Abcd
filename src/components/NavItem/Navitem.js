/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navitem.scss';

function Navitem(props) {
  // state
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#link" className="icon-button" onClick={() => setOpen(!open)} >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export default Navitem
