import React, { Component } from "react";

import formpic1 from './formpic1.png';
import formpic2 from './formpic2.png';
import './App.css';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
class Donor extends Component {
	
	
	constructor(props) {
    super(props);
    this.state = { 
	formSubmitted: false,
	sympthomsValue: 'option1',
	sympthomsDate: ''

	};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
	
	this.setState( {formSubmitted: true});
    //alert("You are submitting " + this.state.username);
  }
  
  symthomsSelectionHandler = (event) => {
    //event.preventDefault();
	
	//this.setState( {symthomsSelectionChecked: ! this.state.symthomsSelectionChecked});
	console.log("-----");
	console.log(event.currentTarget.value);
	
	this.setState( {sympthomsValue : event.currentTarget.value});

  }
  
  
  handleDateChange = date => {
    this.setState({
      sympthomsDate: date
    });
  }
  
  
  
  render() {
	  if (this.state.formSubmitted)
		return this.renderSuccess();
	else{
		return this.renderForm();
	}
  }
  
  renderSuccess() {
	  return (<div className="App">
		<div className="container">
		  <div className="row justify-content-center">
			<div className="col-8 col-xs-12">
				<h1>
			  Thank you for your submission!
			</h1>
		  </div>
		</div>
	  </div>
	</div>);
  }
  
  renderSympthomsSelectedForm() {
	  
	  return (
	  <div className="form-group">
					<label>Enter the last date when you had sympthoms</label>
					<div >
	  <DatePicker id="example-datepicker"
selected={this.state.sympthomsDate}
  onChange={this.handleDateChange} //only when value has changed
  />
	  </div>
	  </div>
	  );
  }
  
  
  renderForm() {
    return (
    <div className="App">
		<div className="container">
		  <div className="row justify-content-center">
			<div className="col-8 col-xs-12">
				<h1>
			  Hi donor!
			</h1>
			<p>
			  Please fill the form below
			</p>
		  </div>
		</div>
			
		<div className="row justify-content-center DonorForm">
			<div className="col-8 col-xs-12">
			<form onSubmit={this.mySubmitHandler}>
			  <div className="form-group">
				<label htmlFor="firstName">First name:</label>
				<input type="text" className="form-control" id="firstName" placeholder="Enter your first name here..." />
			  </div>
			  <div className="form-group">
				<label htmlFor="lastName">Last name:</label>
				<input type="text" className="form-control" id="lastName" placeholder="Enter your last name here..." />
			  </div>
			
			  <div className="form-group">
				<label htmlFor="exampleFormControlInput1">Email address</label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
			  </div>
			  <div className="form-group">
				<label htmlFor="phoneNumber">Phone number:</label>
				<input type="tel" id="phoneNumber" name="phone" className="form-control"  pattern="[0-9]{10}"  placeholder="Format: 1234567890"/>
			  </div>
			  <div className="form-group">
				<label htmlFor="gender">Gender:</label>
				<select className="form-control" id="gender">
				  <option>Male</option>
				  <option>Female</option>
				  <option>Other</option>
				</select>
			  </div>
			  
			  
			  <div className="row justify-content-center form-group App-formpic-container">
			  <div className="col-6">
			  <img src={formpic1} className="App-formpic" alt="pic1" />
			  <p>
			  You are at least 17 years old and weigh 55 kg. Additional weight requirements apply for donors age 18 or younger.
			  </p>
			  </div>
			  <div className="col-6">
			  <img src={formpic2} className="App-formpic" alt="pic2" />
			  <p>
			  In good health. You generally feel well, even if you're being treated for a chronic condition.
			  </p>
			  </div>
			  </div>
			  		
				
				<div className="form-group">
					<label htmlFor="question1">Was your COVID-19 diagnosis confirmed by the lab test?</label>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question1" id="question1_choice1" value="option1" checked />
					  <label className="form-check-label" htmlFor="question1_choice1">
						Yes
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question1" id="question1_choice2" value="option2" />
					  <label className="form-check-label" htmlFor="question1_choice2">
						No
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question1" id="question1_choice3" value="option3" />
					  <label className="form-check-label" htmlFor="question1_choice3">
					  I don't know
					  </label>
					</div>
				</div>
				
				<div className="form-group">
					<label htmlFor="question2">Do you currently have sympthoms?</label>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question2" id="question2_choice1" value="option1" checked />
					  <label className="form-check-label" htmlFor="question2_choice1">
						Yes
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question2" id="question2_choice2" value="option2" />
					  <label className="form-check-label" htmlFor="question2_choice2">
						No
					  </label>
					</div>
				</div>
				
				
		
				
				<div className="form-group">
					<label htmlFor="question3">Has it been at least 14 days since the last day of your sympthoms?</label>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question3" id="question3_choice1" value="option1" checked={this.state.sympthomsValue == 'option1'} onChange={event => this.symthomsSelectionHandler(event)}/>
					  <label className="form-check-label" htmlFor="question3_choice1">
						Yes
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question3" id="question3_choice2" value="option2" checked={this.state.sympthomsValue == 'option2'} onChange={event => this.symthomsSelectionHandler(event)}/>
					  <label className="form-check-label" htmlFor="question3_choice2">
						No
					  </label>
					</div>
				</div>
				
				{ this.state.sympthomsValue == 'option2' ? this.renderSympthomsSelectedForm() : null }

				<div className="form-group">
					<label htmlFor="question4">Have you had a follow up test that was negative?</label>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question4" id="question4_choice1" value="option1" checked />
					  <label className="form-check-label" htmlFor="question4_choice1">
						Yes
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="question4" id="question4_choice2" value="option2" />
					  <label className="form-check-label" htmlFor="question4_choice2">
						No
					  </label>
					</div>
				</div>
				
				
				<div className="form-group row">
				  <button type="submit" className="btn btn-primary">Submit</button>
			  </div>
				
			
			</form>
			</div>
		  </div>
		</div>
	
        
    </div>
    );
  }
}
 
export default Donor;