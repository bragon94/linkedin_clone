import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4j69z5n1gl_6gfkgzPXhyis3zJowcgKo",
  authDomain: "linkedinclone-3e07b.firebaseapp.com",
  projectId: "linkedinclone-3e07b",
  storageBucket: "linkedinclone-3e07b.appspot.com",
  messagingSenderId: "678195522369",
  appId: "1:678195522369:web:72069f789193e156c00fc0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
