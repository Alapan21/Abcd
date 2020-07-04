import React from 'react';
import './App.css';

import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      {/*<input type="text" onKeyPress={(event) => { console.log(event.key); }}></input>*/}
      <Keyboard />
    </div>
  );
}

export default App;
