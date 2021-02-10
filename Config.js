import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrp-nlXckH_Tq94JTE8VJWa0BXiAJf0Ac",
    authDomain: "wireleibrary-f58cb.firebaseapp.com",
    projectId: "wireleibrary-f58cb",
    storageBucket: "wireleibrary-f58cb.appspot.com",
    messagingSenderId: "779643931602",
    appId: "1:779643931602:web:3970719deef2f7db5b560b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

















export default firebase.firestore();