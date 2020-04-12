import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('rhcWzA7MkAElFWhCDIzE')
  .collection('cartItems')
  .doc('4B4ZrCM9lLs4y6LP1Mir');

firestore.doc('/users/rhcWzA7MkAElFWhCDIzE/cartItems/4B4ZrCM9lLs4y6LP1Mir');
firestore.collection('/users/rhcWzA7MkAElFWhCDIzE/cartItems');
