
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyD_k5fPXY3C3Jr03cDe3aYD7Hhmj6TmdiI",
  authDomain: "b-kart-28716.firebaseapp.com",
  projectId: "b-kart-28716",
  storageBucket: "b-kart-28716.firebasestorage.app",
  messagingSenderId: "743574903009",
  appId: "1:743574903009:web:edb5769f76bbc91db63fa0",
  measurementId: "G-8Z6GWQHET0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export {app};