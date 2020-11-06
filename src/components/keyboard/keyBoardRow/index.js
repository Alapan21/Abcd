import React from "react";
import PropTypes from "prop-types";
import Key from "../keyItem";

const KeyboardRow = ({ letterRow }) => {
  return (
    <div className="row">
      {letterRow.map((item, index) => (
        <Key letter={item.key} id={item.id} key={index} sp={item.sp || "key"} />
      ))}
    </div>
  );
};
KeyboardRow.propTypes = {
  letterRow: PropTypes.arrayOf({
    letter: PropTypes.string,
    id: PropTypes.string,
    sp: PropTypes.string,
  }),
};

export default KeyboardRow;
