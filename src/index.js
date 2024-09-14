import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { defineSecret } = require('firebase-functions/params');

const apiKey = defineSecret('API_KEY')

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "ui-library-d0fa7.firebaseapp.com",
  projectId: "ui-library-d0fa7",
  storageBucket: "ui-library-d0fa7.appspot.com",
  messagingSenderId: "106813751860",
  appId: "1:106813751860:web:efaad97ac25f357dd90061",
  measurementId: "G-MYEWRJ4X0Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
