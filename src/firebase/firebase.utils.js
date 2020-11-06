import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDm_SjlAlOmYvo9qmea0tP10xe3rvgE0Fw",
    authDomain: "crwn-db-7d23f.firebaseapp.com",
    databaseURL: "https://crwn-db-7d23f.firebaseio.com",
    projectId: "crwn-db-7d23f",
    storageBucket: "crwn-db-7d23f.appspot.com",
    messagingSenderId: "842629721252",
    appId: "1:842629721252:web:e58629962bc3c46a9e0a31",
    measurementId: "G-BZEJK298ST"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'})
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
