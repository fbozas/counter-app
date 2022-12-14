import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import About from './pages/about';
import React, { Component } from 'react';
import Axios from 'axios';

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {  
    posts:[]
  }

  handleAdd = async () => {
    const obj = {title: 'a', body: 'b'};
    const {data: post} = await Axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({posts});
  }

  handleUpdate = async post => {
    post.title += " UPDATED";
    await Axios.put(apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post};
    this.setState({posts});
  }

  handleDelete = async post => {
    await Axios.delete(apiEndpoint + "/" + post.id);
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts});
  }

  async componentDidMount(){
    const {data: posts} = await Axios.get(apiEndpoint);
    this.setState({posts});
  }
  
  render() { 
    return (
      <React.Fragment>
          <button className='btn btn-primary' onClick={this.handleAdd}>
            Add
          </button>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <button 
                      className='btn btn-info btn-sm' 
                      onClick={() => this.handleUpdate(post)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button 
                      className='btn btn-danger btn-sm' 
                      onClick={() => this.handleDelete(post)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </React.Fragment>
    );
  }
}
 
export default App;
