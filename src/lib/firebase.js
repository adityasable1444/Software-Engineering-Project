import firebase from "firebase/compat/app";
import 'firebase/firestore'

const firebaseConfig = { 
    apiKey: "AIzaSyCiagU0ukhXvh4qMiw3Y-iFWHxZjcwUF3M",
    authDomain: "classroom-clone-94ca5.firebaseapp.com",
    projectId: "classroom-clone-94ca5",
    storageBucket: "classroom-clone-94ca5.firebasestorage.app",
    messagingSenderId: "662107587597",
    appId: "1:662107587597:web:04693ab34995805f044144",
    measurementId: "G-CT266BBW6D"

}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
