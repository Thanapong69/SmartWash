import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPJcvx_2_O9BNoFs8Wz_EveUmiIhZ8Wzo",
  authDomain: "project-e9bf5.firebaseapp.com",
  databaseURL: "https://project-e9bf5.firebaseio.com",
  projectId: "project-e9bf5",
  storageBucket: "project-e9bf5.appspot.com",
  messagingSenderId: "992917563573"
};
// firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
