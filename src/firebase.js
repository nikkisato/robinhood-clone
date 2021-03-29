import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyApj9kDVzGLAxtuDSkQKHduulGWod5Yl3Y',
  authDomain: 'robin-c016e.firebaseapp.com',
  projectId: 'robin-c016e',
  storageBucket: 'robin-c016e.appspot.com',
  messagingSenderId: '691052387220',
  appId: '1:691052387220:web:163ee54ebd2999cffb4d81',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
