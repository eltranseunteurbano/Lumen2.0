import app from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database'; 
import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
    apiKey: "AIzaSyD0TOczvoDXtY0uzYY0TUuLVHI5aUF8-qE",
    authDomain: "lumen-celsia.firebaseapp.com",
    databaseURL: "https://lumen-celsia.firebaseio.com",
    projectId: "lumen-celsia",
    storageBucket: "lumen-celsia.appspot.com",
    messagingSenderId: "995771752615",
    appId: "1:995771752615:web:153a4bcba7f599e33cbb82"
  };

  var Firebase = app.initializeApp(firebaseConfig);

  export default Firebase;