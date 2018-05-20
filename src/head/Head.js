import React, { Component } from 'react';

import banner from '../images/stairsBanner.jpg';
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
          {{/*working on getting these to show up over banner*/}}
          <h2>Stephen D. Townsend, C.P.A.</h2>
          <h4>Helping you reach your goals</h4>
        </div>
      </div>
    );
  }
}