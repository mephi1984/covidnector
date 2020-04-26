import React from 'react';
import logo from './COVIDnector-logo.png';
import './App.css';
import Main from './Main';
import Donor from './Donor';
import Hospitals from './Hospitals';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
	<Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/donor">
            <Donor />
          </Route>
		  <Route path="/hospitals">
            <Hospitals />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
