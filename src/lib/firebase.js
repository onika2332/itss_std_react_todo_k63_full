import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ2y-rGiFd7-ttytwgcGSYilKXdnigRTo",
    authDomain: "itss-todo-sample.firebaseapp.com",
    projectId: "itss-todo-sample",
    storageBucket: "itss-todo-sample.appspot.com",
    messagingSenderId: "374914989351",
    appId: "1:374914989351:web:8596196f7ea79dd8c3bd02"
};

firebase.initializeApp(firebaseConfig);