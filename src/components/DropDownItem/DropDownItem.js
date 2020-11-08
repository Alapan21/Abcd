import React from 'react';
import './DropDownItem.scss';

function DropDownItem(props) {
  return (
    <a className="menu-item" href="#link" onClick={props.goTo}>
      <span className="icon-button">{props.left}</span>
      {props.children}
      <span className="icon-right">{props.right}</span>
    </a>
  )
}

export default DropDownItem
