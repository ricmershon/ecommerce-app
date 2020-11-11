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
 import { Switch, Route } from 'react-router-dom';

/*
 * INTERNAL DEPENDENCIES
 */

import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

/*
 * App functional component
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

            /*
             * If the user is logged in use the user reference returned from
             * createUserProfileDocument() to retrieve the snapshot data in
             * order set state currentUser. onSnapshot() also listens for
             * any changes of the snapshot data.
             */

            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })

                console.log(this.state);

            /*
             * If the user logs out set state currentUser to user,
             * which is null.
             */
            
            } else {
                this.setState({ currentUser: user });
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
                <Header currentUser={ this.state.currentUser }/>
                <Switch>
                    <Route exact path ='/' component={ HomePage } />
                    <Route path ='/shop' component={ ShopPage } />
                    <Route path ='/signin' component={ SignInAndSignUpPage } />
                </Switch>
            </div>
        )
    }


}
export default App;