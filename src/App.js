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
	      <Zipcode />
	      <City />
	  </div>
    );
  }
}

export default App;
