import React, { Component } from 'react';
import Head from '../head/Head';
import './services.css';
import '../index.css';
import services from '../staticContent/services.json';

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const selected = this.state.selected;
		this.setState({ selected: !selected });
	}

	render() {
		const { title, content } = this.props;
		return (
			<div className="service-item">
				<button className="service-title" onClick={this.handleClick}>
					<h2>{title}</h2>
				</button>
				<div>
					{this.state.selected && (
						<p className="service-description">{content}</p>
					)}
				</div>
			</div>
		);
	}
}

const Services = () => (
	<div className="container">
		<h1 className="service-header">Services</h1>
		<div className="service-items">
			<h2 className="group-title">Tax Services</h2>
			{services.taxes.map(s => (
				<Service title={s.title} content={s.content} key={s.id} />
			))}
			<h2 className="group-title">Acccounting Services</h2>
			{services.accounting.map(s => (
				<Service title={s.title} content={s.content} key={s.id} />
			))}
			<h2 className="group-title">Consulting Services</h2>
			{services.consulting.map(s => (
				<Service title={s.title} content={s.content} key={s.id} />
			))}
		</div>
	</div>
);

export default Services;
