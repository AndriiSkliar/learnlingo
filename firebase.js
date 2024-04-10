import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'learnlingo-efd49.firebaseapp.com',
  databaseURL:
    'https://learnlingo-efd49-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-efd49',
  storageBucket: 'learnlingo-efd49.appspot.com',
  messagingSenderId: '591628495341',
  appId: '1:591628495341:web:9111de8e04619fe92e1fe4',
  measurementId: 'G-FZ5ZX4HEG8',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
