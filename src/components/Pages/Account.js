import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import '../styles/Account.css';
import ChangePassword from '../Account/ChangePassword';
import AddContact from '../Account/AddContact';
// import Contacts from '../Account/Contacts';
import Favorites from '../Account/Favorites';
import {getFavorites} from '../../actions/favorite-actions'

export class Account extends React.Component {
    componentDidMount() {
        this.props.dispatch(getFavorites())
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <div className="account-page">
                    <h1 className="concert-title">Account Management</h1>
                    <div className="account-details row">
                        <div className="row">
                            <div className="col-6">
                                <div className="add-contact">
                                    {/* <h3>Add Contact</h3> */}
                                    <AddContact />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="change-password">
                                    {/* <h3>Change Password</h3> */}
                                    <ChangePassword />
                                </div>
                            </div>

                        </div>
                        <div className="account-bottom-section row">
                            <div className="col-6">
                                <div className="contacts">
                                    <h3>Placeholder for contacts</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="favorites">
                                    <h3>Favorited Concerts:</h3>
                                    {this.props.favorites.map(obj => (
                                        <Favorites dispatch={this.props.dispatch} {...obj} key={String(obj.id)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        else{
            return(
                <div className="account-page">
                    <h1 className="concert-title">Account Management</h1>
                    <div className="account-details row">
                     <h2 className="concert-title">Please login to see account page</h2>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    empty: state.ticketmaster.empty,
    favorites: state.favorite.favorites,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Account);