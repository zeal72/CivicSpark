// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCgvhD3zBwJGo_ODVw89-7XaeO0lhoNew0",
	authDomain: "civic-spark-9f5f4.firebaseapp.com",
	projectId: "civic-spark-9f5f4",
	storageBucket: "civic-spark-9f5f4.firebasestorage.app",
	messagingSenderId: "332782534892",
	appId: "1:332782534892:web:6fa79ece0deec5bdf0e5c9",
	measurementId: "G-07LSJTR0GF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export { auth, provider, db };

