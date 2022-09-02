import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import About from './pages/about';
import React, { Component } from 'react';

class App extends Component {
  state = {  
    count: 1
  }
  
  componentDidUpdate(prevProps, prevState){
    console.log("preveProps",prevProps);
    console.log("prevState",prevState);
    console.log(this.state.count);

    // if(prevProps.state.count != this.props.state.count){
    //   // ajax call to get new data from the server
    // }
  }

  constructor(){
    super();
    console.log("App-Constructor");
  }

  componentDidMount(){
    console.log("App-Mounted");
    this.setState({count: this.state.count + 1})
  }

  render() { 
    console.log("App-Rendered");
    return;
  }
}
 
export default App;
