import React, { Component } from 'react'

class Key extends Component {
  render() {
    const { letter, id } = this.props;
    return (
      <div className="key" id={id} >
        {letter}
      </div >
    )
  }
}

export default Key
