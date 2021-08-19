import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZmf_nE0Ju7uC2RbdivrGJqtzgT11pt9M",
    authDomain: "admin-dashboard-bbf89.firebaseapp.com",
    projectId: "admin-dashboard-bbf89",
    storageBucket: "admin-dashboard-bbf89.appspot.com",
    messagingSenderId: "105371743170",
    appId: "1:105371743170:web:c31f31ec4b68ac080b5c5b"
  };



const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();


export {db, auth};
