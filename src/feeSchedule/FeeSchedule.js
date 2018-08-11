import React, { Component } from 'react';
import '../index.css';
import Head from '../head/Head';
import fees from '../staticContent/fees.json';
import './feeSchedule.css';

const FeeSchedule = () => (
	<div>
		<Head />
		<h1 className="fees-header">Services and Fees</h1>
		<div className="fee-list-container">
			<SummaryList data={fees.summary} />
		</div>
		<div className="services-detail-container">
			<ServicesDetail data={fees.cpa} title="CPA Services" />
			<ServicesDetail data={fees.payroll} title="Payroll Services" />
		</div>
	</div>
);

const SummaryList = ({ data }) => (
	<div>
		<h2 className="fee-list-title">Fees at a Glance</h2>
		<div className="fee-list">
			<ul className="fee-list-items">
				{data.map(
					item =>
						item.header ? (
							<li className="fee-summary-item fee-summary-header">
								<p>{item.title}</p>
							</li>
						) : (
							<li className="fee-summary-item">
								<p>{item.title}</p>
							</li>
						)
				)}
			</ul>
			<ul className="fee-list-fees">
				{data.map(item => (
					<li className="fee-summary-item">
						<p>{item.fee}</p>
					</li>
				))}
			</ul>
		</div>
	</div>
);

const ServicesDetail = ({ data, title }) => {
	return (
		<div className="service-detail">
			<h2>{title}</h2>
			{data.map(item => <Single item={item} />)}
		</div>
	);
};

class Single extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { selected } = this.state;
		this.setState({ selected: !selected });
	}

	render() {
		const { item } = this.props;
		const { selected } = this.state;
		return (
			<div>
				<button className="service-button" onClick={this.handleClick}>
					{item.title}
				</button>
				{selected &&
					item.description && (
					<ul>{item.description.map(desc => <p>{desc}</p>)}</ul>
				)}
			</div>
		);
	}
}

export default FeeSchedule;
