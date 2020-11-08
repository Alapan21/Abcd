import React from "react";
//scss import
import './quote.scss';
// SVG imports
import { RefreshIcon } from '../../resources/assets/index';

const Quote = () => {
  return (
    <div className="quote">
      <h2 id="quote">loading text...</h2>
      <div className="charactercount">
        <p>
          Letter Count <span id="charCount">0</span>
        </p>
      </div>
      <div className="wordcount">
        <p>
          Word Count <span id="wordCount">0</span>
        </p>
      </div>
      <div className="d-flex">
        <button className="refresh-btn">
          <img src={RefreshIcon} alt="refresh-icon" />
        </button>
      </div>
    </div>
  );
};

export default Quote;
