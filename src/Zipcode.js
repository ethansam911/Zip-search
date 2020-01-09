/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Zipcode extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    zip_code_value: "", //handleChange
	    data:[] //fetchCityData
	};
	//IDK IF I NEED THIS STILL
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
	this.setState({ zip_code_value: event.target.value });
    }

    handleSubmit = event => {
	event.preventDefault();
	console.log("A Zipcode was submitted: " + this.state.zip_code_value);
	this.fetchCityData();
    }

    //After HTML from render() has finished loading, it is called once 
    // in the component life-cycle 
    componentDidMount() {
    }

    fetchCityData() {
	axios.get("http://ctp-zip-api.herokuapp.com/zip/"+this.state.zip_code_value)
            .then(response => {
		console.log(response.data);
                this.setState({data: response.data});
            })
	    .then( () => console.log(this.state.data))
            .catch(error => console.log(error))
    }

    displayData = () => {
	const { data } = this.state;
	if(data.length !== 0) {
	    let result = data.map( zip => (
		    <div className="zip" key={zip.RecordNumber}>
		    <h2>{zip.City}, {zip.State}</h2> 
		    State: {zip.State}<br/>
		    Location: ({zip.Lat}, {zip.Long})<br/>
		    Population (estimated): {zip.EstimatedPopulation} <br/>
		    Total Wages: {zip.TotalWages}
		</div>
	    ));
	    return result;
	}
	else {
	    return (<div>No Results</div>);
	}
    }

    render() {
	return (
		<div>
		<h1>Zip Code</h1>
		<form onSubmit={this.handleSubmit}>
		<input id="zipcode" type="text" placeholder="Zip Code" onChange={this.handleChange}></input>
		<button type="submit">Submit</button>
		</form>
		<div>{this.displayData()}</div>
	    </div>
	);
    }
}

Zipcode.propType =
    {
	zip_code_value: PropTypes.number
    }

export default Zipcode;
