// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvpBOQfbl793hQnj31f7mjnA4QV2TcD2c",
    authDomain: "world-gaming-53ac2.firebaseapp.com",
    projectId: "world-gaming-53ac2",
    storageBucket: "world-gaming-53ac2.appspot.com",
    messagingSenderId: "71957519231",
    appId: "1:71957519231:web:bcbfd858c963767cc7984a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}