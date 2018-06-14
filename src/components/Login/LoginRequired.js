import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export const LoginRequired = (getLoggedIn, redirectTo) => Component => {
    const Inner = props => {
        if (!props.loggedIn) {
            return <Redirect to={redirectTo} />;
        }

        return <Component {...props} />;
    }

    const mapStateToProps = (state, props) => ({
        loggedIn: getLoggedIn(state, props)
    });
    return connect(mapStateToProps)(Inner);
};
