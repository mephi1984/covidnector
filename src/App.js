import React from 'react';
import logo from './COVIDnector-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to COVIDnector!
        </h1>
		<p>
          Please let us know who you are
        </p>
		 <div className="Buttons">
			<div className="ButtonRow">
			<a className="btn btn-primary" href="#" role="button">I want to become a donor</a>
			</div>
			<div className="ButtonRow">
			<a className="btn btn-primary btn-success" href="#" role="button">I represent a hospital</a>
			</div>
		</div>
      </header>
	  
	 

    </div>
  );
}

export default App;
