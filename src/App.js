import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import About from './pages/about';
import React, { Component } from 'react';

class App extends Component {
  state = {  } 

  constructor(){
    super();
    console.log("App-Constructor");
  }

  componentDidMount(){
    console.log("App-Mounted");
  }

  render() { 
    console.log("App-Rendered");
    return;
  }
}
 
export default App;
