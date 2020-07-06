import React, { Component } from 'react'
// functional
class Key extends Component {
  render() {
    const { letter, id, sp } = this.props;
    return (
      <div className={sp} id={id}>
        {letter}
      </div >
    )
  }
}

export default Key
