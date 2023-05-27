import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBL00jLgpaaxz59kexmNrDb8I1qsvIKqsw",
    authDomain: "totaleuc.firebaseapp.com",
    projectId: "totaleuc",
    storageBucket: "totaleuc.appspot.com",
    messagingSenderId: "895286492230",
    appId: "1:895286492230:web:1d74e5d53fecac07e9de47",
};

const app = initializeApp(firebaseConfig);

//const firestore =getFirestore(app)
export const db = getFirestore(app);
