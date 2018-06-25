import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import OnboardingPage from './Pages/OnboardingPage'
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer';
import Backdrop from './Navbar/Backdrop';
import Footer from '../commons/Footer';
import LoginPage from './Pages/LoginPage';
import ConcertSearchPage from './Pages/ConcertSearchPage';
import ConcertAboutPage from './Pages/ConcertAboutPage'
import DashboardPage from './Pages/DashboardPage';
import Account from './Pages/Account'
import RegistrationPage from './Pages/RegistrationPage';
import { refreshAuthToken } from '../actions/auth';
import Meta from './meta'

import './styles/App.css'

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {

        if (this.props.sideDrawerOpen) {
            return (
                <div class="wrapper">
                    <Meta />
                    <div className="app">
                    
                        <Navbar />
                        <SideDrawer show={this.props.sideDrawerOpen} />
                        <Backdrop />
                        <main className="content">
                            <Route exact path="/" component={OnboardingPage} />
                            <Route exact path="/concert-about" component={ConcertAboutPage} />
                            <Route exact path="/concerts" component={ConcertSearchPage} />
                            <Route exact path="/account" component={Account} />
                            <Route exact path="/dashboard" component={DashboardPage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegistrationPage} />
                        </main>
                        <Footer />
                    </div>
                </div>
                )
            } else {
                return (
                    <div className="wrapper">
                        <Meta />
                        <div className="app">
                            <Navbar />
                            <SideDrawer show={this.props.sideDrawerOpen} />
                            <main className="content">
                                <Route exact path="/" component={OnboardingPage} />
                                <Route exact path="/concert-about" component={ConcertAboutPage} />
                                <Route exact path="/concerts" component={ConcertSearchPage} />
                                <Route exact path="/account" component={Account} />
                                <Route exact path="/dashboard" component={DashboardPage} />
                                <Route exact path="/login" component={LoginPage} />
                                <Route exact path="/register" component={RegistrationPage} />
                            </main>
                            <Footer />
                        </div>
                    </div>
            );
        }


    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    sideDrawerOpen: state.sideDrawerOpen.sideDrawerOpen
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
