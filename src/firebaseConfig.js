import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCGywzmBTTqhXuMrWvrj21v0ZF08F12ngw",
  authDomain: "react-dts-kominfo.firebaseapp.com",
  projectId: "react-dts-kominfo",
  storageBucket: "react-dts-kominfo.appspot.com",
  messagingSenderId: "1033817091991",
  appId: "1:1033817091991:web:44f8edef93718e1d501ed2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);