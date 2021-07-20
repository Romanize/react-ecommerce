
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAhbBO1Vye6U_b1_zHd4zg5Tr_w9PsX2DY",
    authDomain: "react-ecommerce-coder-6f8f8.firebaseapp.com",
    projectId: "react-ecommerce-coder-6f8f8",
    storageBucket: "react-ecommerce-coder-6f8f8.appspot.com",
    messagingSenderId: "293898038992",
    appId: "1:293898038992:web:3bc6127820eb7fb201f8d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const storage = firebase.storage()