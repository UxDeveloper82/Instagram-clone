import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7hFShQKcSzPfMGltnSra1woaZT_VsI_g",
    authDomain: "day-spa-8da57.firebaseapp.com",
    databaseURL: "https://day-spa-8da57.firebaseio.com",
    projectId: "day-spa-8da57",
    storageBucket: "day-spa-8da57.appspot.com",
    messagingSenderId: "543987424441",
    appId: "1:543987424441:web:b85c31bb54e61e6a64cf68"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage= firebaseApp.storage();

export { db, auth, storage };