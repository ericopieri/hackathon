import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyCJCN6pTYUdn40ystayZLy4-jSKroeuK10",
    authDomain: "hackathon-f274e.firebaseapp.com",
    projectId: "hackathon-f274e",
    storageBucket: "hackathon-f274e.appspot.com",
    messagingSenderId: "249193530607",
    appId: "1:249193530607:web:40e8afc370604095ba471a"
};

firebase.initializeApp(config)
const auth = firebase.auth()


export {
    auth
}