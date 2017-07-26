/* @flow */
import React, { PropTypes } from 'react';
import Auth from '../../modules/Auth';

import Dashboard from '../../components/dashboard/Dashboard';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Aside from '../../components/Aside/Aside';

import { Provider } from 'mobx-react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../authentication/LoginPage';
import SignUpPage from '../authentication/SignUpPage';
import Logout from '../authentication/Logout';

// import all provided state here
import providedState from './../../modules/ProvidedState';
import ConsultantComponentRoutes from '../../components/consultant/ConsultantComponentRoutes';

export default class Routes extends React.Component {
	render() {
		return (
			<div>
				<Provider {...providedState}>
					<div className="app">
						{/**state of the in logged person must be available overall in application **/}
						<Header />
						<div className="app-body">
							<Sidebar {...this.props} />
							<main className="main">
								<Breadcrumb />
								<div className="container-fluid">{ConsultantComponentRoutes}</div>
							</main>
							<Aside />
						</div>
						<Footer />
					</div>
				</Provider>
			</div>
		);
	}
}
