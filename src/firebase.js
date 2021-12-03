import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyABIjlmPSzH5KbnYSKuDNVx4-JJfLLVpU4",
    authDomain: "linkedin-clone-8df50.firebaseapp.com",
    projectId: "linkedin-clone-8df50",
    storageBucket: "linkedin-clone-8df50.appspot.com",
    messagingSenderId: "220429817795",
    appId: "1:220429817795:web:e3fa5eaf174b4316060f76"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;