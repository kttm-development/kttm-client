import React from 'react';
import {connect} from 'react-redux';
import {setLoggedIn} from '../actions/user-actions';
import {clearCredentials} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(setLoggedIn(false));
        clearCredentials();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
        }
        return (
            <div className="header-bar">
                <h1>
                    Foo App
                </h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser.loggedIn
});

export default connect(mapStateToProps)(HeaderBar);
