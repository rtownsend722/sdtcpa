import React from 'react';
import '../index.css';
import Head from '../head/Head';
import fees from '../staticContent/fees.json';
import './feeSchedule.css';

const FeeSchedule = () => (
	<div>
		<Head />
		<h1 className="fees-header">Services and Fees</h1>
		<div>
			<SummaryList data={fees.summary} />
		</div>
		<ServicesDetail data={fees.cpa} title="CPA Services" />
		<ServicesDetail data={fees.payroll} title="Payroll Services" />
	</div>
);

const SummaryList = ({ data }) => (
	<div className="fee-list-container">
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
		<div>
			<h2>{title}</h2>
			{data.map(
				item =>
					item.multiple ? (
						<Multiple items={item.items} title={item.title} />
					) : (
						<Single item={item} />
					)
			)}
		</div>
	);
};

const Multiple = ({ items, title }) => (
	<div>
		<h3>{title}</h3>
		<ul>
			{items.map(service => (
				<div>
					<h4>{service.title}</h4>
					<p>{service.description ? service.description : ''}</p>
				</div>
			))}
		</ul>
	</div>
);

const Single = ({ item }) => (
	<div>
		<h3>{item.title}</h3>
		<ul>{item.description.map(desc => <p>{desc}</p>)}</ul>
	</div>
);

export default FeeSchedule;
