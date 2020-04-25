import React, { Component } from "react";

import logo from './COVIDnector-logo.png';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
class Main extends Component {
  render() {
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
			<Link className="btn btn-primary" to="/donor" role="button">I want to become a donor</Link>
			</div>
			<div className="ButtonRow">
			<a className="btn btn-primary btn-success" href="#" role="button">I represent a hospital</a>
			</div>
		</div>
      </header>
    </div>
    );
  }
}
 
export default Main;