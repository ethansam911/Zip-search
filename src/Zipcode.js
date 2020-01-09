/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Zipcode extends React.Component {
constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) 
{
    this.setState({ value: event.target.value });
}

handleSubmit(event) {
    alert('A Zipcode was submitted: ' + this.state.value);
    event.preventDefault();
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Zipcode:
          <input type="submit" value={this.state.zip_code_value} onChange={this.handleSubmit} name="zip_code" />
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