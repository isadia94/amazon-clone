import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCItFJ1Pi_0KYobdF6oLmcvdZU7lMWvooM",
  authDomain: "clone-b539d.firebaseapp.com",
  projectId: "clone-b539d",
  storageBucket: "clone-b539d.appspot.com",
  messagingSenderId: "891951104236",
  appId: "1:891951104236:web:c4f2bf3395ce54f7e0a5c9",
};

const firebaseApp =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
