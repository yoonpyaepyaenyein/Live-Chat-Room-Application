import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCHWfygCk07-K-nbtT2mDwjFfOFQyggbhw",
    authDomain: "vue-blog-system-67c9b.firebaseapp.com",
    projectId: "vue-blog-system-67c9b",
    storageBucket: "vue-blog-system-67c9b.appspot.com",
    messagingSenderId: "250998634396",
    appId: "1:250998634396:web:1369c8827e777b40f4fa59"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let timestamp= firebase.firestore.FieldValue.serverTimestamp;
  let auth=firebase.auth();
  export {db,timestamp,auth};