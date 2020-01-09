/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Zipcode extends React.Component {
constructor(props) {
    super(props);
    this.state = { zip_code_value: 11385,
    data:   
    [
        {
        State: "",
        LocationText: "",
        EstimatedPopulation: {},
        TotalWages: {},
        }
    ]

};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) 
{
    this.setState({ value: event.target.value });
}

handleSubmit(event) {
    alert('A Zipcode was submitted: ' + this.state.zip_code_value);
    event.preventDefault();
}

//After HTML from render() has finished loading, it is called once 
// in the component life-cycle 
componentDidMount() {
    this.fetchCityData();
}

fetchCityData() {
    axios.get("http://ctp-zip-api.herokuapp.com/zip/11385"+this.state.zip_code_value)
        .then(response => {
            console.log(response.data);

        })
        .catch(error=> {

            console.log(error);
        })

}


render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Zipcode:
          <input type="submit" value="submit" onChange={this.handleSubmit} name="zip_code" />
            </label>
            
        </form>
    );
}
}

Zipcode.propType =
{
    zip_code_value: PropTypes.number
}

export default Zipcode;