import React from 'react';
import './App.css';

import Keyboard from './components/Keyboard';
import WindowEvent from '../src/components/WindowEvent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
