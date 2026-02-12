import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXytdpc5W6QAhCV3TMny8RhYfKBsyGoJs",
  authDomain: "quickshow-80fd0.firebaseapp.com",
  projectId: "quickshow-80fd0",
  storageBucket: "quickshow-80fd0.firebasestorage.app",
  messagingSenderId: "704080586009",
  appId: "1:704080586009:web:9bfd72cb0f7aa46c999188",
  measurementId: "G-MCSBMC20S8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
