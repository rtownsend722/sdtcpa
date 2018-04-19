import React, {Component} from 'react';

export default class Head extends Component {

  render() {
    <div>
      <div className="menu-container">
        <button className="menu-item">About</div>
        <button className="menu-item">Services</div>
        <button className="menu-item">Calendar</div>
        <button className="menu-item">Fee Schedule</div>
        <button className="menu-item">Tools & Links</div>
        <button className="menu-item menu-item-portal">Client Portal</div>
      </div>
      <div className="banner">
        <img src="" alt="staircase">
      </div>
    {{/*The below may either go inside of the image OR be only on the home page and deleted from this component*/}}
      <div className="title-container">
        <h2 className="title">Stephen D. Townsend, C.P.A.</h2>
        <h4 className="subtitle">Helping you navigate to the top!</h4>
      </div>
    </div>
  }
}