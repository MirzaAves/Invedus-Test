import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCqInA3rpAknJT8bXOEyRWkVCnpMVajM-E",
    authDomain: "inved-test.firebaseapp.com",
    projectId: "inved-test",
    storageBucket: "inved-test.appspot.com",
    messagingSenderId: "911022250220",
    appId: "1:911022250220:web:3db80501becf3617b6adc9",
    measurementId: "G-0L83H8CE2K"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;