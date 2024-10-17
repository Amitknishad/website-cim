
import React from 'react';
import { firebase } from "./firebase";
import { useFetchWrapper } from '../hooks/useFetchWrapper';

export { useFirebaseAuthState  };

// https://firebase.google.com/docs/auth/web/manage-users
const useFirebaseAuthState = () => {

    const fetchWrapper = useFetchWrapper();
    const [ authState, setAuthState ] = React.useState(null);

    React.useEffect( () => {
        // console.log("useFirebaseAuthState.useEffect, authState : "+authState);    
        try {
            // firebase.auth().onIdTokenChanged(async (user) => {
            firebase.auth().onAuthStateChanged((user) => {
                if(user && user.uid ) setAuthState(user);
                else setAuthState({});               
                // console.log("onAuthStateChanged.user.phoneNumber =>  : "+user?.phoneNumber);
            });
        } catch (error) {
            setAuthState({});
            console.log("useFirebaseAuthState.useEffect => Error : "+error?.message);
        }
    }, [] );

    let fireLogout = async() => {
        try {            
            await firebase.auth().signOut();
            let apiRes = await fetchWrapper.post( '/api/cookies', { cookieName: 'phoneNumber', cookieValue: '' } );
        } catch (error) {
            setAuthState({});
            console.log("useFirebaseAuthState.fireLogout => Error : "+error?.message);
        }
    }

    let fetchIdToken = async(forceRefresh ) => {
        try {
            let idToken = await firebase.auth().currentUser.getIdToken(forceRefresh);
            return idToken;
        } catch (error) {
            console.log("fetchIdToken => Error : "+error?.message);
            return null;
        }
    }

    return { authState, fireLogout, fetchIdToken };

}