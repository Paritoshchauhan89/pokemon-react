import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUNyXj5BsjMnWHKO-TiT4xYOF5llViAiw",
  authDomain: "pokemon-4f653.firebaseapp.com",
  projectId: "project-145154916851",
  storageBucket: "pokemon-4f653.firebasestorage.app",
  messagingSenderId: "145154916851",
  appId: "1:145154916851:web:44e37e9f298994f8fbd286",
  measurementId: "G-BFS4W84B8F"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
