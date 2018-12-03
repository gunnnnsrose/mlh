import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {NavLink} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <section>
	      {this.props.children}
	    </section>
      </div>
    );
  }
}

export default App;
