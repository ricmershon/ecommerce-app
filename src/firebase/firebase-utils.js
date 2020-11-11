/*
 * PROJECT: ecommerce-app client
 * MODULE: firebase-utils.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: Utilities for Firebase integration and use.
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
 * createUserProfileDocument() creates a new user profile document in the
 * users collection within the Fireabase Cloud Firestore.
 */

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`); // reference in storage
    const snapShot = await userRef.get();               // data object from the
                                                        // reference userRef
    /*
     * Create the user profile document in the Cloud Firestore if it does
     * not already exist.
     */

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.error('Error creating user', error.message);
        }
    }
    return userRef; // Return user reference object.
}

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

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: 'select_account' })

/*
 * Export Google signin method. Takes provider class and uses for just Google signins.
 */ 

export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export default firebase;