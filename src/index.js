import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfB30j4LXIlEOyVtK8Fam2EuTn4T4Kqhk",
  authDomain: "ui-library-ca661.firebaseapp.com",
  projectId: "ui-library-ca661",
  storageBucket: "ui-library-ca661.appspot.com",
  messagingSenderId: "447072143763",
  appId: "1:447072143763:web:c1ddd8792553fca845c066",
  measurementId: "G-3T4ZW7W2GD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
