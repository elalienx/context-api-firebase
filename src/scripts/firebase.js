// NPM package
import { initializeApp } from "firebase/app";

const firebaseConfiguration = {
  apiKey: "AIzaSyCgsmZUwC5hgd-qh5gLHO8u8qlP7fP6YLA",
  authDomain: "fe-firebase-setup-v9.firebaseapp.com",
  projectId: "fe-firebase-setup-v9",
  storageBucket: "fe-firebase-setup-v9.appspot.com",
  messagingSenderId: "429743436351",
  appId: "1:429743436351:web:df2f88a4b113f7c7567e8a",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export default firebaseInstance;
