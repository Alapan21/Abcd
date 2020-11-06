import React from "react";
import PropTypes from "prop-types";
// functional
const Key = ({ letter, id, sp }) => {
  return (
    <div className={sp} id={id}>
      {letter}
    </div>
  );
};
Key.defaultProps = {};
Key.propTypes = {
  letter: PropTypes.string,
  id: PropTypes.string,
  sp: PropTypes.string,
};
export default Key;
