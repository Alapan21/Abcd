import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import KeyboardRow from "./keyBoardRow";
import keyConfig from "./keyboard.json";
import "./keyBoard.scss";

class Keyboard extends Component {
  render() {
    let newAlphaNum = JSON.parse(JSON.stringify(keyConfig));

    return (
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) =>
          console.log(`do something upon keydown event of ${key}`)
        }
      >
        <div className="keyboard">
          {newAlphaNum.map((item, index) => (
            <KeyboardRow key={index} letterRow={item} />
          ))}
        </div>
      </KeyboardEventHandler>
    );
  }
}

Keyboard.defaultProps = {};
Keyboard.propTypes = {};

export default Keyboard;
