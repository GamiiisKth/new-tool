import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Info from '../consultant/component/Info';
require('./tabsLayout.css');
const containerStyle = { marginTop: '60px' };

const ConsultantNav = ({ match }) => {
	// Consultant/info

	return (
		<div>
			<div class="card text-center">
				<div class="card-header">
					<ul className="nav nav-tabs tabs-3 transparent " role="tablist">
						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/info'} activeClassName={`${match.url}/info` ? 'active' : ''}>
								<i className="fa fa-info-circle" /> Info
							</NavLink>
						</li>

						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/podetails'} activeClassName={`${match.url}/podetails` ? 'active' : ''}>
								<i className="fa fa-bar-chart" /> Po Details
							</NavLink>
						</li>

						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/rfs'} activeClassName={`${match.url}/rfs` ? 'active' : ''}>
								<i className="fa fa-exchange" /> RFS
							</NavLink>
						</li>
						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/rr'} activeClassName={`${match.url}/rr` ? 'active' : ''}>
								<i className="fa fa-question-circle" /> RR
							</NavLink>
						</li>

						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/onoffboard'} activeClassName={`${match.url}/onoffboard` ? 'active' : ''}>
								<i className="fa fa-plane" /> ON/OFF board
							</NavLink>
						</li>
						<li className="nav-item" id="border">
							<NavLink className="nav-link" to={'/consultant/workpremit'} activeClassName={`${match.url}/workpremit` ? 'active' : ''}>
								<i className="fa fa-firefox" /> Work premit
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			{/* fix the layout here instead**/}

			<div style={containerStyle}>
				<Route exact path={`${match.url}/info`} component={Info} />
				<Route exact path={`${match.url}/podetails`} component={Info} />
				<Route exact path={`${match.url}/rfs`} component={Info} />
				<Route exact path={`${match.url}/rr`} component={Info} />
				<Route exact path={`${match.url}/onoffboard`} component={Info} />
				<Route exact path={`${match.url}/workpremit`} component={Info} />
			</div>
		</div>
	);
};
export default ConsultantNav;
