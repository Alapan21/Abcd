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
      <div className="keyboard">
        {newAlphaNum.map((item, index) => (
          <KeyboardRow key={index} letterRow={item} />
        ))}
      </div>
    );
  }
}

Keyboard.defaultProps = {};
Keyboard.propTypes = {};

export default Keyboard;
