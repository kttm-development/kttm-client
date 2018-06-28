import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import '../styles/Account.css';
import AddContact from '../Account/AddContact';
import Contacts from '../Account/Contacts';
import Favorites from '../Account/Favorites';
import { getFavorites } from '../../actions/favorite-actions'
import { getContacts } from '../../actions/contacts-actions';

export class Account extends React.Component {
    componentDidMount() {
        this.props.dispatch(getFavorites())
        this.props.dispatch(getContacts())

    }

    render() {
        let favorite;
        if(this.props.favoriteLoading){
            favorite=RiseLoader
        }
        if(this.props.favoriteError){
            favorite=`Oops! Something Went Wrong: ${this.props.favoriteError}`
        }
        if(!this.props.favoriteError&&!this.props.favoriteLoading){
            favorite= <span>{this.props.favorites.map(obj => (
                        <Favorites dispatch={this.props.dispatch} {...obj} key={String(obj.id)} />
                      ))}</span>
        }

        let contacts;
        if(this.props.contactLoading){
            contacts=RiseLoader
        }
        if(this.props.contactsError){
            contacts=`Oops! Something Went Wrong: ${this.props.contactsError}`
        }
        if (this.props.loggedIn && this.props.contacts[0] && this.props.contacts[0].email !== null && !this.props.contactsError) {
            contacts = this.props.contacts.map(obj => (
                <Contacts dispatch={this.props.dispatch} {...obj} key={String(obj.id)} />
            ))
        }

        if (this.props.loggedIn) {
            return (
                <div className="account-page">
                    <h1 className="concert-title">Account Management</h1>
                    <div className="account-details row">
                        <div className="row">
                            <div className="col-6">
                                <div className="">
                                    <AddContact />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="contacts contact-form-container">
                                    <h3 className="contact-section-title">Contacts:</h3>
                                    {contacts}
                                </div>
                            </div>
                        </div>
                        <div className="account-bottom-section row">
                            <div className="col-12">
                                <div className="favorites">
                                    <h3 className="favorite-section-title" >Favorited Concerts:</h3>
                                    {favorite}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
        else {
            return (
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
    contacts: state.contact.contacts,
    favoriteError: state.favorite.error,
    contactsError: state.contact.error,
    favoriteLoading: state.favorite.loading,
    contactLoading: state.contact.loading,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Account);