// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import axios from "axios";
// import { auth } from "./firebase";




// export const handleLogin = async (email, password) => {
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   const user = userCredential.user;
//   const token = await user.getIdToken();

//   const userData = {
//     name: user.displayName,
//     email: user.email,
//     avatar: user.photoURL,
//     uid: user.uid,
//   };

//   const res = await postUserData(userData, token);
//   return { res, token };
// };

// export const handleGoogleAuth = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithPopup(auth, provider);
//   const user = result.user;
//   const token = await user.getIdToken();

//   const userData = {
//     name: user.displayName,
//     email: user.email,
//     avatar: user.photoURL,
//     uid: user.uid,
//   };

//   const res = await postUserData(userData, token);

//   return { res, token };
// };

// // Post user data to the server
// export const postUserData = async (userData, idToken) => {
//   const res = await axios.post(
//     `${import.meta.env.VITE_APP_API_URL}users`,
//     userData,
//     {
//       headers: {
//         Authorization: `Bearer ${idToken}`,
//       },
//     }
//   );








import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import { auth } from "./firebase";

// Handle login with email and password
export const handleLogin = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const token = await user.getIdToken();

  const userData = {
    name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
    uid: user.uid,
  };

  const res = await postUserData(userData, token);
  return { res, token };
};

// Handle login with Google authentication
export const handleGoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const token = await user.getIdToken();

  const userData = {
    name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
    uid: user.uid,
  };

  const res = await postUserData(userData, token);
  return { res, token };
};


export const postUserData = async (data, token) => {
  try {
    const response = await axios.post("http://localhost:5000/api/users", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting user data:", error.response?.data || error.message);
    throw error;
  }
};



// Post user data to the server
// 

// export const postUserData = async (userData, idToken) => {
//   try {
//     const res = await axios.post(
//       `${import.meta.env.VITE_API_URL}users`,
//       userData,
//       {
//         headers: {
//           Authorization: `Bearer ${idToken}`,
//         },
//       }
//     );
 
