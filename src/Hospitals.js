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
				  <td>PMI Kota Jakarta Barat</td>
				  <td>Jl. Perdana No.12, RT.1/RW.1, Wijaya Kusuma, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11460</td>
				  <td><button type="button" className="btn btn-success btn-lg">Apply</button></td>
				</tr>
				<tr>
				  <th scope="row">2</th>
				  <td>Unit Donor Darah Senayan City</td>
				  <td>RT.1/RW.3, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270</td>
				  <td><button type="button" className="btn btn-success btn-lg">Apply</button></td>
				</tr>
				<tr>
				  <th scope="row">3</th>
				  <td>PMI Kota Jakarta Utara</td>
				  <td>Jl. Plumpang Semper No.54, RT.1/RW.4, Tugu Sel., Kec. Koja, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14260</td>
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