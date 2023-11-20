// huynh tan loc

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz6Jd_yhKWgP8q7EpbEzpYXzEeqwfhFuo",
    authDomain: "cdefgab-dd818.firebaseapp.com",
    projectId: "cdefgab-dd818",
    storageBucket: "cdefgab-dd818.appspot.com",
    messagingSenderId: "782759016989",
    appId: "1:782759016989:web:aadf934a3450b44071e4f4",
    measurementId: "G-PG1TR78D8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);