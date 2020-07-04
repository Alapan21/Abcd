import React, { Component } from 'react';
import './App.css';

import Keyboard from './components/Keyboard';
import '../src/components/WindowEvent';


class App extends Component {

  componentDidMount() {

    const get_quote_url = "http://api.quotable.io/random";

    function getQuote() {
      return fetch(get_quote_url)
        .then(res => res.json())
        .then(data => data.content)
        .catch(err => console.log(err))
    }

    async function render() {
      const quote_tag = document.getElementById('quote');
      const quote = await getQuote();
      quote_tag.innerHTML = '';
      quote.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        quote_tag.appendChild(charSpan);
      });

    }

    render();
  }

  render() {
    return (
      <div className="App">
        <div className='quote'>
          <h2 id="quote">loading text...</h2>
        </div>
        <div className="input">
          <input type="text" autoFocus />
        </div>
        <div className="container">
          <Keyboard />
        </div>
      </div>
    )
  }
}

export default App;


