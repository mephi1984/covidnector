import React, { Component } from "react";

import './App.css';

import {
  Redirect
} from "react-router-dom";

 
class DonorSuccess extends Component {
	
	
	constructor(props) {
    super(props);
	this.state = {
            navigate: false
        }
  }
  
  componentWillMount(){
        setTimeout(() => { 
            this.setState({ navigate: true });
        }, 2000)
    }
  
  render() {
	  if (this.state.navigate) {
          return <Redirect to="/hospitals" />
        }

		return (<div className="App">
				<div className="container">
				  <div className="row justify-content-center">
					<div className="col-8 col-xs-12">
						<h1>
					  Thank you for your submission!
					</h1>
					<p>
						Wait a bit, you will be redirected to the list of hospitals to make appointment to...
					</p>
					<div class="spinner-border" role="status">
					  <span class="sr-only">Loading...</span>
					</div>
				  </div>
				</div>
			  </div>
			</div>);
  }
  
}
 
export default DonorSuccess;