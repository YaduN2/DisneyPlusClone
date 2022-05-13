import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

/* 
  const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyChz2EvXaggtdR3p0WauBiFlzD0RAw5x44",
  authDomain: "testing-421d0.firebaseapp.com",
  databaseURL:
    "https://testing-421d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testing-421d0",
  storageBucket: "testing-421d0.appspot.com",
  messagingSenderId: "583029025745",
  appId: "1:583029025745:web:9ca12fb28483586e018ef0",
  measurementId: "G-2LH7W8KJKS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
