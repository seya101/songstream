import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBUizvXNUBm15u0pbfIxrrmp7sEBMoqovE",
  authDomain: "songstream-1cd27.firebaseapp.com",
  projectId: "songstream-1cd27",
  storageBucket: "songstream-1cd27.appspot.com",
  messagingSenderId: "1002906722399",
  appId: "1:1002906722399:web:7e3c653eb43758c9aabbea"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
