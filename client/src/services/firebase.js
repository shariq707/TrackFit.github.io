import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4zIFnE1Gl8sgFaCzSD6QrJBKMZgf-YM",
  authDomain: "shariq-eb913.firebaseapp.com",
  projectId: "shariq-eb913",
  storageBucket: "shariq-eb913.firebasestorage.app",
  messagingSenderId: "740085684064",
  appId: "1:740085684064:web:9d8894825ca93971553005",
  measurementId: "G-CQS3TBN635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
