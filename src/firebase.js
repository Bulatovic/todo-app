import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9PaK8dSxHCVj6mK4Bmg81w-QYmB_k3bo",
    authDomain: "todo-app-ea6f5.firebaseapp.com",
    projectId: "todo-app-ea6f5",
    storageBucket: "todo-app-ea6f5.appspot.com",
    messagingSenderId: "1032058574494",
    appId: "1:1032058574494:web:d64579b36f489e9142cd8f",
    measurementId: "G-9Z2NMXH7WP"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth(); 

export default db;


