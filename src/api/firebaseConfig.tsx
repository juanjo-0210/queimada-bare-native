import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, browserLocalPersistence, initializeAuth  } from 'firebase/auth';
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY, PROJECT_ID } from "@env"

export { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, addDoc, where, onSnapshot, limit, orderBy } from "firebase/firestore";
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: PROJECT_ID + '.firebaseapp.com',
    projectId: PROJECT_ID,
    storageBucket: PROJECT_ID + ".appspot.com",
};

let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp();  // Usa la instancia ya inicializada
}
export const db = getFirestore(firebaseApp);

// export const auth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
// });