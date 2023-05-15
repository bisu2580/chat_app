import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQemx5u2B9Q6g-ZqbQgJNbzDd1TH2lS0k",
  authDomain: "chat-app-f119f.firebaseapp.com",
  projectId: "chat-app-f119f",
  storageBucket: "chat-app-f119f.appspot.com",
  messagingSenderId: "946440848706",
  appId: "1:946440848706:web:c73b974c90b60562d7b4db",
  measurementId: "G-DR17YQHGDL"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore(app);