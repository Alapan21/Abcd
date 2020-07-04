import React from 'react'
import Key from './Key';
import WindowEvent from './WindowEvent';

function Keyboard() {
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
      { key: 'BackSpace', id: 'Backspace' }
    ],
    [
      { key: 'Tab', id: 'Tab' },
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
      { key: 'Capslock', id: 'CapsLock' },
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
      { key: 'Enter', id: 'Enter' }
    ],
    [
      { key: 'Shift', id: 'ShiftLeft' },
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
      { key: 'Shift', id: 'ShiftRight' }
    ],
    [
      { key: 'Ctrl', id: 'ControlLeft' },
      { key: 'Alt', id: 'AltLeft' },
      { key: 'Spacebar', id: 'Space' },
      { key: 'Alt', id: 'AltRight' },
      { key: 'Ctrl', id: 'ControlRight' }
    ]
  ];
  return (
    <div className="keyboard">
      <div id='row'>
        {
          newAlphaNum[0].map((item, index) => <Key letter={item.key} id={item.id} key={index} />)
        }
      </div>
      <div id='row'>
        {
          newAlphaNum[1].map((item, index) => <Key letter={item.key} id={item.id} key={index} />)
        }
      </div>
      <div id='row'>
        {
          newAlphaNum[2].map((item, index) => <Key letter={item.key} id={item.id} key={index} />)
        }
      </div>
      <div id='row'>
        {
          newAlphaNum[3].map((item, index) => <Key letter={item.key} id={item.id} key={index} />)
        }
      </div>
      <div id='row'>
        {
          newAlphaNum[4].map((item, index) => <Key letter={item.key} id={item.id} key={index} />)
        }
      </div>
    </div>
  )
}

export default Keyboard
