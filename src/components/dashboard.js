import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {loginRequired} from './login-required';

export function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="dashboard-username">
                Username: {props.username}
            </div>
            <div className="dashboard-name">
                Name: {props.name}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    username: state.currentUser.username,
    name: `${state.currentUser.firstName} ${state.currentUser.lastName}`
});

export default compose(
    loginRequired(state => state.currentUser.loggedIn, '/'),
    connect(mapStateToProps)
)(Dashboard);

