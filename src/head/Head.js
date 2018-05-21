import React, { Component } from 'react';

import '../index.css';
import './head.css';

export default class Head extends Component {

  render() {
    return (
      <div>
        <nav className="menu-container">
          <ul>
            <li className="menu-item">About</li>
            <li className="menu-item">Services</li>
            <li className="menu-item">Fee Schedule</li>
            <li className="menu-item">Calendar</li>
            <li className="menu-item">Tools</li>
            <li className="menu-item portal">Client Portal</li>
          </ul>
        </nav>
        <div className="banner">
          <div className="banner-content">
            <h1>Stephen D. Townsend, C.P.A.</h1>
            <h3>Getting to the top may look daunting, but we can help.</h3>
          </div>
          <div className="banner-image">
            <img src={require(`../images/stairsBanner.jpg`)} height="350"/>
          </div>
        </div>
      </div>
    );
  }
}