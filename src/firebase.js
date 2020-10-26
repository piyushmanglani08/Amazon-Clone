import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDg0S-QIG-GwMxlyoZA8IAy0APLoiIV6Y4",
    authDomain: "clone-1ec18.firebaseapp.com",
    databaseURL: "https://clone-1ec18.firebaseio.com",
    projectId: "clone-1ec18",
    storageBucket: "clone-1ec18.appspot.com",
    messagingSenderId: "838055770638",
    appId: "1:838055770638:web:bd30488a82608d95fc9a5f",
    measurementId: "G-GWD9N5QXZM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };