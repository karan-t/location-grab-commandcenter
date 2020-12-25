import firebase from "firebase";
import "firebase/storage"

const config = {
    apiKey: "AIzaSyDlliphVxpkXbruYKa_iWwfko2aswV_VX0",
    authDomain: "location-grabber-299505.firebaseapp.com",
    databaseURL: "https://location-grabber-299505-default-rtdb.firebaseio.com",
    projectId: "location-grabber-299505",
    storageBucket: "location-grabber-299505.appspot.com",
    messagingSenderId: "132667695784",
    appId: "1:132667695784:web:b3d7a1c1740beac65d589d"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
