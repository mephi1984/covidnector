import React from 'react';
import logo from './COVIDnector-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to COVIDnector!
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about us
        </a>
      </header>
    </div>
  );
}

export default App;
