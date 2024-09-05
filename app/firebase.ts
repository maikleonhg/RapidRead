import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, Firestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Platform } from 'react-native';  // Importa el módulo Platform

// Configuración de Firebase - Usa los valores de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyC-JohXtcB6_6NihTR_hflXUtSeCjQWfz4",
  authDomain: Constants.manifest?.extra?.FIREBASE_AUTH_DOMAIN,
  projectId: "rapidread-b3032",
  storageBucket: Constants.manifest?.extra?.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.manifest?.extra?.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.manifest?.extra?.FIREBASE_APP_ID,
};

// Inicializar Firebase
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializar servicios de Firebase condicionalmente
let auth: Auth;
let hasInitializedAuth = false;

if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  // Usar un indicador externo para evitar múltiples inicializaciones
  if (!hasInitializedAuth) {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    hasInitializedAuth = true;
  } else {
    auth = getAuth(app);
  }
}

const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { auth, db, storage, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, };
