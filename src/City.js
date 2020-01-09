import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class City extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    city: "",
	    data: []
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
	let name = event.target.value.toUpperCase();
	console.log(name);
	this.setState({ city: name });
    }

    handleSubmit = event => {
	event.preventDefault();
	this.fetchData();
    }

    fetchData = () => {
	axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.city)
	    .then( response => {
		console.log(response.data);
		this.setState({data: response.data});
	    })
	    .then ( () => console.log(this.state.data))
	    .catch(error => console.log(error))
    }

    displayData = () => {
	const {data} = this.state;
	if(data.length !== 0){
	    let result = data.map( city => {
		for(let i = 0; i < data.length; i++){
			<p className="city" key={i}>{data[i]}<br/></p>;
		}
	    });
	    return result;
	}
	else {
	    return (<p>No Results</p>);
	}
    }
    
    render() {
	return(
		<div>
		<h1>City Search</h1>
		<form onSubmit={this.handleSubmit}>
		<input id="city" type="text" placeholder="City" onChange={this.handleChange}></input>
		<button type="submit">Submit</button>
		</form>
		<div>{this.displayData}</div>
		</div>
	);
    }
};

City.propType = {
    city: PropTypes.string
}

export default City;
