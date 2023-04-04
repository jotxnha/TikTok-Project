import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBJbq9AT2yjI9Zh0vxxOo4kXqc1cV9mOSg",
  authDomain: "tiktok---jornada-2f8a0.firebaseapp.com",
  projectId: "tiktok---jornada-2f8a0",
  storageBucket: "tiktok---jornada-2f8a0.appspot.com",
  messagingSenderId: "548735679782",
  appId: "1:548735679782:web:52e429d745a014f5b4d5e7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;