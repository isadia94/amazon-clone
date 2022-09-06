import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyCItFJ1Pi_0KYobdF6oLmcvdZU7lMWvooM",
    authDomain: "clone-b539d.firebaseapp.com",
    projectId: "clone-b539d",
    storageBucket: "clone-b539d.appspot.com",
    messagingSenderId: "891951104236",
    appId: "1:891951104236:web:c4f2bf3395ce54f7e0a5c9",
  }),
});
