/*
 * PROJECT: ecommerce-app client
 * MODULE: firebase-utils.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Provides Firebase utilities.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import firebase from 'firebase/app';
import 'firebase/firestore';            // database
import 'firebase/auth';                 // authorization

/*
 * CONFIGURATION
 */

/*
 * Firebase configuration
 */

const firebaseConfig = {
    apiKey: "AIzaSyC-QGgQ_LPNdI2LLzM2EmFyZAD0r95acuM",
    authDomain: "ecommerce-app-db-4a4d6.firebaseapp.com",
    databaseURL: "https://ecommerce-app-db-4a4d6.firebaseio.com",
    projectId: "ecommerce-app-db-4a4d6",
    storageBucket: "ecommerce-app-db-4a4d6.appspot.com",
    messagingSenderId: "913660376031",
    appId: "1:913660376031:web:80a704ff9d31b6b9b98a6a",
    measurementId: "G-G2P4LTTDQ0"
};

/*
 * Initialize firebase
 */

firebase.initializeApp(firebaseConfig);


/*
 * Export Firebase auth and firestore utilities for use by app.
 */

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/*
 * Provide access to GoogleAuthProvider class from the authentication library.
 * setCustomerParameters() configured to trigger Google popup whenever we use
 * GoogleAuthProvider for authentication and signin.
 */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

/*
 * Google signin method. Takes provider Class and uses for just Google signins.
 */ 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;