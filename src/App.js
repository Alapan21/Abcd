import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import Data from './components/data';
import Score from './components/score';

import '../src/components/WindowEvent';
import './App.css';


class App extends Component {
  componentDidMount() {
    //quote api
    const get_quote_url = "http://api.quotable.io/random";

    //quote area
    const quote_display = document.getElementById('quote');

    //input area
    const input_area = document.getElementById('inputarea');

    // character count
    const quote_char_count = document.getElementById('charCount');

    // word count
    const quote_word_count = document.getElementById('wordCount');

    // adding event listener to the input text area
    input_area.addEventListener('input', () => {
      let correct = true;
      // selecting all span elements inside quote
      const arrayQuote = quote_display.querySelectorAll('span');
      // selecting input from user
      const arrayInput = input_area.value.split('');
      // answer check
      // checking
      arrayQuote.forEach((charSpan, index) => {
        const charInput = arrayInput[index];
        if (charInput == null) {
          charSpan.classList.remove('incorrect');
          charSpan.classList.remove('correct');
          correct = false;
        }
        else if (charInput === charSpan.innerText) {
          charSpan.classList.add('correct');
          charSpan.classList.remove('incorrect');
        }
        else {
          charSpan.classList.add('incorrect');
          charSpan.classList.remove('correct');
          correct = false;
        }
      });
      if (correct) renderQuote();
    });

    // getting quote from url
    function getQuote() {
      return fetch(get_quote_url)
        .then(res => res.json())
        .then(data => data.content)
        .catch(err => console.log(err))
    }

    async function renderQuote() {
      // get quote
      const quote = await getQuote();
      // reset quote area and input block
      quote_display.innerHTML = '';
      input_area.value = null;

      // get quote character count
      const charCount = quote.length;
      // get quote word count
      const wordCount = quote.split(' ').length;

      // split items
      quote.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        quote_display.appendChild(charSpan);
      });
      //
      // setting charcount
      quote_char_count.innerHTML = charCount;
      // setting word count
      quote_word_count.innerHTML = wordCount;

    }

    renderQuote();
  }

  render() {
    return (
      <div className="App">
        <Data />
        <Score />
        <div className='quote'>
          <h2 id="quote">loading text...</h2>
          <div className="charactercount">
            <p>Letter Count <span id="charCount">0</span></p>
          </div>
          <div className="wordcount">
            <p>Word Count <span id="wordCount">0</span></p>
          </div>
        </div>
        <div className="input">
          <textarea
            id="inputarea"
            type="text"
            autoFocus
            spellCheck='false' />
        </div>
        <div className="container">
          <Keyboard />
        </div>
      </div >
    )
  }
}

export default App;


