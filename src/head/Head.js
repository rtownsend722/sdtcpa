import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './head.css';

const Menu = () => (
	<nav className="menu-container">
		<ul>
			<li className="menu-item">
				<Link to="/">Services</Link>
			</li>
			<li className="menu-item">
				<Link to="/feeSchedule">Fee Schedule</Link>
			</li>
			<li className="menu-item">
				<Link to="/about">About</Link>
			</li>
			<li className="menu-item">Calendar</li>
			<li className="menu-item">Tools</li>
			<li className="menu-item portal">Client Portal</li>
		</ul>
	</nav>
);

const Banner = () => (
	<div className="banner">
		<div className="banner-content">
			<h1>Stephen D. Townsend, C.P.A.</h1>
			<h3>Getting to the top may look daunting, but we can help.</h3>
		</div>
		<div className="banner-image">
			<img src={require('../images/stairsBanner.jpg')} height="350" />
		</div>
	</div>
);

export default class Head extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Banner />
			</div>
		);
	}
}
