import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './friends.css';
import Comment from './components/Comment.js';


class App extends Component {
  render() {
    return (
      <div className="page-container">
  
        <h1><a href="#">MyBook</a></h1>
        
        <div className="navbar">
          <nav>
            <div className="search-container">
              <input className="search" placeholder="Search" />
            </div>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="container">
          <div className="commentbox">
            <div className="whats-going-on"><label>What's going on?</label></div>
            <input className="status-post" placeholder="I've had a great weekend!"/>
            <button className="btn-post" type="post" value="post">Post</button>
          </div>

          <div className="comment-section">
            <p className="comments-title">Comments</p>
             <Comment text="Your comment"/>
          </div>

          <div className="friends">
            <p className="your-profile">Your Profile</p>
              <div className="profile">
              </div>
            <p className="friends-text">Find Friends</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
