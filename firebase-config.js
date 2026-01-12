// ==================== FIREBASE CONFIGURATION ====================
// Replace with your actual Firebase config from Firebase Console

const firebaseConfig = {
  apiKey: "AIzaSyA-QLb54wT2y-k4W3GUrsxB9SA-WFZ_03w",
  authDomain: "gyanu-notes-6f6d8.firebaseapp.com",
  projectId: "gyanu-notes-6f6d8",
  storageBucket: "gyanu-notes-6f6d8.firebasestorage.app",
  messagingSenderId: "149239448624",
  appId: "1:149239448624:web:4e4695a7d557dce234d9f5",
  measurementId: "G-WM3DLZTBPN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services (WITHOUT Storage)
const auth = firebase.auth();
const db = firebase.firestore();

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Export for use in other files
window.auth = auth;
window.db = db;
window.googleProvider = googleProvider;

console.log('🔥 Firebase initialized successfully (Auth + Firestore only)!');