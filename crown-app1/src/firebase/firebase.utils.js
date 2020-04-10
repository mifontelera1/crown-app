import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCYdUMSFfCQrCeaqjGtEVIujSM25Zx3dJw',
  authDomain: 'crown-6e668.firebaseapp.com',
  databaseURL: 'https://crown-6e668.firebaseio.com',
  projectId: 'crown-6e668',
  storageBucket: 'crown-6e668.appspot.com',
  messagingSenderId: '424453259074',
  appId: '1:424453259074:web:0c8d09c4b0adfd6f8992db',
  measurementId: 'G-8Z744CFPRJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
