import React from 'react'

import './scoreCard.scss';

function score() {
  return (
    <div className="scorecard">
      <h2>Score <span className="score">0</span></h2>
      <h2>Speed <span className="score">0</span>/pm</h2>
    </div>
  )
}

export default score
