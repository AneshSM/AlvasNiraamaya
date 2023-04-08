/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB3K2506bgDNpSg9AqC8SxkuXy3B3u5lNo',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
