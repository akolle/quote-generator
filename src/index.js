import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuoteBox from './QuoteGenerator';
import PublicAPIComponent from './myComponent';
import Fetch from './Fetch';
import FetchPokeman from './Pokeman';
import { useState, useEffect } from 'react';

const Fetch2 = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuotes(data);
      });
      
  }, []);
  
  const num = Math.floor(Math.random() * (16 - 1 + 1) + 1);
  console.log(num)

  return (
    <div id="quote-box">
      <button id="new-quote">New Quote</button>
      <button> <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a></button>
      {quotes.map((quote, index) => (
        index === num ?
        <div id='info'>
          <li id="text">{quote.text}</li>
          <li id="author">{quote.author}</li>
          <br></br>
        </div> : 
        <div>
        </div>
        
  ))}
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fetch2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
