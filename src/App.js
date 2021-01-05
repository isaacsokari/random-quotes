import React from 'react';

import quotes from './data/quotes'
import './App.css';

const getRandomQuote = () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  return quotes[quoteIndex];
};

const App = () => {
  const [currentQuote, setCurrentQuote] = React.useState(getRandomQuote());

  const {quote, author} = currentQuote;
  
  return (
    <>
      <div id="quote-box">
        <i className="fa fa-quote-left fa-2x"></i>
        <p id="text">{quote}</p>
        <i className="fa fa-quote-right fa-2x"></i>
        
        <span id="author">- {author}</span>

        <div className='bottom'>
        <div className="share-links">
          <a href={`https://www.twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote + '" - ' + author)}`} target="_blank" rel='noreferrer' id="tweet-quote">
            <i className="fab fa-twitter"></i> 
          </a>
        </div>
        <button
          id="new-quote"
          onClick={() => setCurrentQuote(getRandomQuote())}
        >
          New Quote
        </button>
        </div>
      </div>
    </>
  );
};

export default App;