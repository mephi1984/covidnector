import React, { Component } from "react";

import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

import './App.css';


class MyAccount extends Component {
	
	
	constructor(props) {
    super(props);
    this.state = { 

	};
  }
  render() {
	  return (<div className="App">
		
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <Nav.Link href="#">My Profile</Nav.Link>
			  <Nav.Link href="#notifications">Notifications</Nav.Link>
			  <Nav.Link href="/hospitals">Appointments</Nav.Link>
			  <Nav.Link href="#settings">Settings</Nav.Link>
			  
			</Nav>
		  </Navbar.Collapse>
		</Navbar>

<div className="container">
		  <div className="row justify-content-center">
			<div className="col-8 col-xs-12">
				<h1>
			  Account profile
			</h1>
			<table className="table account-table">
			  <tbody>
				<tr>
				  <td>Account status:</td>
				  <td className="account-table-verified"><b>VERIFIED</b></td>
				</tr>
				<tr>
				  <td>Appointments to schedule:</td>
				  <td>2</td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	</div>);
  }
  
}
 
export default MyAccount;