import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './styles/App.css'
import OnboardingPage from './Pages/OnboardingPage'
import HeaderBar from '../commons/HeaderBar';
import Footer from '../commons/Footer'
import LoginPage from './Pages/LoginPage';
import ConcertSearchPage from './Pages/ConcertSearchPage';
import DashboardPage from './Pages/DashboardPage';
import RegistrationPage from './Pages/RegistrationPage';
import { refreshAuthToken } from '../actions/auth';

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
        return (
            <div className="app">
                <HeaderBar />
                <div className="content">
                    <Route exact path="/" component={OnboardingPage} />
                    <Route exact path="/concerts" component={ConcertSearchPage} />
                    <Route exact path="/dashboard" component={DashboardPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegistrationPage} />
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
