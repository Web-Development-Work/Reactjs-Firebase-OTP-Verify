import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyARdfAkrPhND48eSiBmdGhhtiAIwfRk3t4",
  authDomain: "otp-verify-4263e.firebaseapp.com",
  projectId: "otp-verify-4263e",
  storageBucket: "otp-verify-4263e.appspot.com",
  messagingSenderId: "645498443309",
  appId: "1:645498443309:web:a973e127901f5bcb528aa4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase
