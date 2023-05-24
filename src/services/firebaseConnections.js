import { initializeApp } from 'firebase/app'
import { getAuth }from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDHb5NVRJTwG_cGD9Z_NfJB2JywUcHIXkk",
    authDomain: "tickets-38f97.firebaseapp.com",
    projectId: "tickets-38f97",
    storageBucket: "tickets-38f97.appspot.com",
    messagingSenderId: "284967433003",
    appId: "1:284967433003:web:6a565c54ef63a5650d0b6e",
    measurementId: "G-D20J9KZW14"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

export {auth, db, storage};
