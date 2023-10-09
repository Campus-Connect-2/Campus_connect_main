import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

import { api_key, app_id } from "./index.js";

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "campus-connect-2.firebaseapp.com",
  projectId: "campus-connect-2",
  storageBucket: "campus-connect-2.appspot.com",
  messagingSenderId: "534698994991",
  appId: app_id,
  measurementId: "G-QW44G4HRPS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
