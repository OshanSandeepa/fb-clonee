// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBpV7XdTvyLf93ahKGgfO-ELbjmT1PHEl8",
    authDomain: "facebook-clone-3f400.firebaseapp.com",
    databaseURL:"",
    projectId: "facebook-clone-3f400",
    storageBucket: "facebook-clone-3f400.appspot.com",
    messagingSenderId: "1047337574860",
    appId: "1:1047337574860:web:2dc9328001f3b1edf7fd69",
    measurementId: "G-XDSLMSLSPG"
  };



  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;