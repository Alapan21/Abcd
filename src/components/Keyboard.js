import React, { Component } from 'react'
import Key from './Key';


// create service to feed the key array

class Keyboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      capsOn: true
    }
  }
  render() {
    let newAlphaNum = [
      [
        { key: '~', id: 'Backquote' },
        { key: '1', id: 'Digit1' },
        { key: '2', id: 'Digit2' },
        { key: '3', id: 'Digit3' },
        { key: '4', id: 'Digit4' },
        { key: '5', id: 'Digit5' },
        { key: '6', id: 'Digit6' },
        { key: '7', id: 'Digit7' },
        { key: '8', id: 'Digit8' },
        { key: '9', id: 'Digit9' },
        { key: '0', id: 'Digit0' },
        { key: '-', id: 'Minus' },
        { key: '=', id: 'Equal' },
        { key: 'BackSpace', id: 'Backspace', sp: 'key special' }
      ],
      [
        { key: 'Tab', id: 'Tab', sp: 'key special' },
        { key: 'Q', id: 'KeyQ' },
        { key: 'W', id: 'KeyW' },
        { key: 'E', id: 'KeyE' },
        { key: 'R', id: 'KeyR' },
        { key: 'T', id: 'KeyT' },
        { key: 'Y', id: 'KeyY' },
        { key: 'U', id: 'KeyU' },
        { key: 'I', id: 'KeyI' },
        { key: 'O', id: 'KeyO' },
        { key: 'P', id: 'KeyP' },
        { key: '[', id: 'BracketLeft' },
        { key: ']', id: 'BracketRight' },
        { key: '\\', id: 'Backslash' }
      ],
      [
        { key: 'Capslock', id: 'CapsLock', sp: 'key special' },
        { key: 'A', id: 'KeyA' },
        { key: 'S', id: 'KeyS' },
        { key: 'D', id: 'KeyD' },
        { key: 'F', id: 'KeyF' },
        { key: 'G', id: 'KeyG' },
        { key: 'H', id: 'KeyH' },
        { key: 'J', id: 'KeyJ' },
        { key: 'K', id: 'KeyK' },
        { key: 'L', id: 'KeyL' },
        { key: ';', id: 'Semicolon' },
        { key: '\'', id: 'Quote' },
        { key: 'Enter', id: 'Enter', sp: 'key special' }
      ],
      [
        { key: 'Shift', id: 'ShiftLeft', sp: 'key special' },
        { key: 'Z', id: 'KeyZ' },
        { key: 'X', id: 'KeyX' },
        { key: 'C', id: 'KeyC' },
        { key: 'V', id: 'KeyV' },
        { key: 'B', id: 'KeyB' },
        { key: 'N', id: 'KeyN' },
        { key: 'M', id: 'KeyM' },
        { key: ',', id: 'Comma' },
        { key: '.', id: 'Period' },
        { key: '/', id: 'Slash' },
        { key: 'Shift', id: 'ShiftRight', sp: 'key special' }
      ],
      [
        { key: 'Ctrl', id: 'ControlLeft', sp: 'key special' },
        { key: 'Alt', id: 'AltLeft', sp: 'key special' },
        { key: 'Spacebar', id: 'Space', sp: 'key special space' },
        { key: 'Alt', id: 'AltRight', sp: 'key special' },
        { key: 'Ctrl', id: 'ControlRight', sp: 'key special' }
      ]
    ];

    return (
      <div className="keyboard">
        <div className='row'>
          {
            newAlphaNum[0].map((item, index) =>
              <Key
                letter={this.state.capsOn ? item.key : item.key.toLowerCase()}
                id={item.id}
                key={index}
                sp={item.sp || "key"} />)
          }
        </div>
        <div className='row'>
          {
            newAlphaNum[1].map((item, index) =>
              <Key
                letter={this.state.capsOn ? item.key : item.key.toLowerCase()}
                id={item.id}
                key={index}
                sp={item.sp || "key"} />)
          }
        </div>
        <div className='row'>
          {
            newAlphaNum[2].map((item, index) =>
              <Key
                letter={this.state.capsOn ? item.key : item.key.toLowerCase()}
                id={item.id}
                key={index}
                sp={item.sp || "key"} />)
          }
        </div>
        <div className='row'>
          {
            newAlphaNum[3].map((item, index) =>
              <Key
                letter={this.state.capsOn ? item.key : item.key.toLowerCase()}
                id={item.id}
                key={index}
                sp={item.sp || "key"} />)
          }
        </div>
        <div className='row'>
          {
            newAlphaNum[4].map((item, index) =>
              <Key
                letter={item.key}
                id={item.id}
                key={index}
                sp={item.sp || "key"} />)
          }
        </div>
      </div>
    )
  }
}

export default Keyboard

