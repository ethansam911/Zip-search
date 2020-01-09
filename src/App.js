/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zipcode from './Zipcode'
import City from './City'

class App extends Component {
  render() {
      return (
	      <div>
	      <div className="zip_code_page">
	      <Zipcode />
	      </div>
	      <div className="city_page">
	      <City />
	      </div>
	      </div>
    );
  }
}

export default App;
