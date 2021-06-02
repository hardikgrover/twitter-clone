import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA56ZdP-NZuYuqKr5fcUNmlhi1mN1mbHvo",
  authDomain: "twitter-clone-ff76a.firebaseapp.com",
  projectId: "twitter-clone-ff76a",
  storageBucket: "twitter-clone-ff76a.appspot.com",
  messagingSenderId: "11831750807",
  appId: "1:11831750807:web:1b5e635a422485a1bcf9d2",
  measurementId: "G-F3NDDBKLC6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
