import React, { Component } from "react";

import './App.css';


class Hospitals extends Component {
	
	
	constructor(props) {
    super(props);
    this.state = { 

	};
  }
  render() {
	  return (<div className="App">
		<div className="container">
		  <div className="row justify-content-center">
			<div className="col-8 col-xs-12">
				<h1>
			  List of blood donation centers
			</h1>
			<p>
				Here is the list of nearby blood donation centers you can apply to.
			</p>
			</div>
			<div className="col-12">
			<table className="table">
			  <thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">Hospital name</th>
				  <th scope="col">Location</th>
				  <th scope="col">Handle</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <th scope="row">1</th>
				  <td>NYC Health + Hospitals / Bellevue</td>
				  <td>462 1st Avenue, New York, NY 10016</td>
				  <td><button type="button" className="btn btn-success btn-lg">Apply</button></td>
				</tr>
				<tr>
				  <th scope="row">2</th>
				  <td>Lenox Hill Hospital</td>
				  <td>100 E 77th St, New York, NY 10075</td>
				  <td><button type="button" className="btn btn-success btn-lg">Apply</button></td>
				</tr>
				<tr>
				  <th scope="row">3</th>
				  <td>Tisch Hospital</td>
				  <td>550 1st Avenue, New York, NY 10016</td>
				  <td>No slots available</td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	</div>);
  }
  
}
 
export default Hospitals;