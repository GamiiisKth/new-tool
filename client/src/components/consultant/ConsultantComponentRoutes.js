import React from 'react';
import {} from 'react-router-dom';
import ConsultantNav from './ConsultantNav';
import Info from './component/Info';
import Dashboard from './../dashboard/Dashboard';
import Logout from './../../containers/authentication/Logout';
import { Switch, Redirect, Route, Router } from 'react-router-dom';

module.exports = (
	<Switch>
		<Route path="/logout" name="Logout" component={Logout} />
		<Route path="/dashboard" name="Dashboard" component={Dashboard} />
		<Route path="/consultant" name="Consultant" component={ConsultantNav}>
			<Route path="/consultant/info" name="Info" component={Info} />
			<Route path="/consultant/podetails" name="podetajles" component={Info} />
			<Route path="/consultant/podetails" name="rfs" component={Info} />
			<Route path="/consultant/podetails" name="rr" component={Info} />
			<Route path="/consultant/podetails" name="onoffboard" component={Info} />
			<Route path="/consultant/podetails" name="workpremit" component={Info} />
		</Route>
		<Redirect exact from="/" to="/dashboard" />
	</Switch>
);
