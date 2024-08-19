// firebase.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, getDocs } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Configuración de Firebase - Usa los valores de tu proyecto
const firebaseConfig = {
  apiKey: 'AIzaSyC-JohXtcB6_6NihTR_hflXUtSeCjQWfz4',
  authDomain: 'rapidread-b3032.firebaseapp.com',
  projectId: 'rapidread-b3032',
  storageBucket: 'rapidread-b3032.appspot.com',
  messagingSenderId: '893415538236',
  appId: '1:893415538236:web:16f9d14605151c6da00d39'
};

// Inicializar Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Servicios de Firebase
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { auth, db, storage, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, getDocs };
