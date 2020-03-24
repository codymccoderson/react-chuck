import React from 'react';
import './App.css';
import Quote from './components/quotes';

function App() {

    const theQuote = "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.";

    return (
      <div className="App">
        <header className="App-header">Chuckkkkkkk
        </header>
        <Quote quote={theQuote}/>
      </div>
    );
}

export default App;
