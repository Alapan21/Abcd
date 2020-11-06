
import React, { Component } from 'react'

import KeyboardRow from './keyBoardRow';
import './keyBoard.scss';

import keyConfig from './keyboard.json';

class Keyboard extends Component {
  render() {
    let newAlphaNum = JSON.parse(JSON.stringify(keyConfig));

    return (
      <div className="keyboard">
        {newAlphaNum.map((item, index) => (
          <KeyboardRow key={index} letterRow={item} />
        ))}
      </div>
    );
  }
}

export default Keyboard;
