/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Zipcode extends React.Component {
constructor(props) {
    super(props);
    this.state = { zip_code_value: {},
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
    this.setState({ zip_code_value: event.target.value });
}

handleSubmit(event) {
    this.setState({ zip_code_value: event.target.value });
    alert('A Zipcode was submitted: ' + this.state.zip_code_value);
    event.preventDefault();
}

//After HTML from render() has finished loading, it is called once 
// in the component life-cycle 
componentDidMount() {
    this.fetchCityData();
}

fetchCityData() {
    axios.get("http://ctp-zip-api.herokuapp.com/zip/")
        .then(response => {
            console.log(response.data);
                var wanted = [this.state.zip_code_value];
                var result = response.data.filter(zipcode =>wanted.includes(zipcode.id)  )
                this.setState({data: result})
        })
        .catch(error => console.log(error));

}


render() {
    return (
        <div>
        <label>
            Zip Code:
                <input type="value" value= "" onChange={this.handleChange} name="zip_code" />
        </label>
        <input type="button" onClick={this.handleSubmit} value="submit" />
        </div> 
    
    );
}
}

Zipcode.propType =
{
    zip_code_value: PropTypes.number
}

export default Zipcode;