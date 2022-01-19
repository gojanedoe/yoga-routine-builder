import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

//web app Firebase config

const firebaseConfig = {
    apiKey: "AIzaSyBAK05pq6Pp1qURQFy1czDGyNiEATk-wkc",
    authDomain: "yoga-routine-builder.firebaseapp.com",
    databaseURL: "https://yoga-routine-builder-default-rtdb.firebaseio.com",
    projectId: "yoga-routine-builder",
    storageBucket: "yoga-routine-builder.appspot.com",
    messagingSenderId: "389042885669",
    appId: "1:389042885669:web:97148a096437e8f4ed5bcc",
    measurementId: "G-J3DZCHMKPS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const analytics = getAnalytics(app);

  export default database;