import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyAFpgj31Ep2hJhkdryw9H-551o2B_Hpt0s",
      authDomain: "chilley-commerce.firebaseapp.com",
      databaseURL: "https://chilley-commerce.firebaseio.com",
      projectId: "chilley-commerce",
      storageBucket: "chilley-commerce.appspot.com",
      messagingSenderId: "269394903588",
      appId: "1:269394903588:web:ab81fb0728bfba74090eb1",
      measurementId: "G-X642EM4F8N"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;