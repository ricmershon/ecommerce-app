/*
 * PROJECT: ecommerce-app client
 * MODULE: App.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: App main entry point.
 */

 /*
 * EXTERNAL DEPENDENCIES
 */

 import React, { Component } from 'react';
 import { Switch, Route, Redirect } from 'react-router-dom';
 import { connect } from 'react-redux';

/*
 * INTERNAL DEPENDENCIES
 */

import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user-actions'

/*
 * App functional component
 */

class App extends Component {

    /* 
     * unsubscribeFromAuth is used to store firebase.Unsubscribe method returned
     * by auth.onAuthStateChanged().
     */

    unsubscribeFromAuth = null;

    /*
     * React lifecycle method componentDidMount(). auth.onAuthStateChanged() sets
     * up a firebase observer that is triggered on user sign-in or sign-out.
     * The observer fires the anoymous funcion within auth.OnAuthStateChanged()
     * and passes in the user, whose state changed, as a parameter. This
     * anonymous function calls createUserProfileDocument() to attempt to create
     * a new user.
     * 
     * auth.onAuthStateChanged returns the firebase.Unsubscribe() method, which
     * is stored in this.unsubscribeFromAuth to turn off the firebase observer
     * in the componentWillUnmount() React lifecycle method.
     *
     * More details at
     * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
     */

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

            /*
             * If the user is logged in use the user reference returned from
             * createUserProfileDocument() to retrieve the snapshot data in
             * order to set currentUser. onSnapshot() also listens for any
             * changes of the user snapshot data.
             */

            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })

            /*
             * The user is logged out. Set currentUser to user, which
             * is null.
             */
            
            } else {
                setCurrentUser(user);
            }
        })
    }

    /*
     * React lifecycle method componentWillMount(). Uses the method returned
     * from auth.onAuthStateChanged to turn off the firebase observer.
     */

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (    
            <div>
                <Header />
                <Switch>
                    <Route exact path ='/' component={ HomePage } />
                    <Route path ='/shop' component={ ShopPage } />

                    {/*
                      * If a user is logged in, i.e., currentUser is set in
                      * in the store, redirect to home page and don't allow
                      * access to the sign in page.
                      */}

                    <Route
                        exact path ='/signin'
                        render={ () => this.props.currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            (<SignInAndSignUpPage />)
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);