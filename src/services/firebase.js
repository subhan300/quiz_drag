import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig ={
  apiKey: "AIzaSyCsNuqKVVE60DS9hBTE4jv_CNoWbm364H0",
  authDomain: "subhanwebdevelopment.firebaseapp.com",
  databaseURL: "https://subhanwebdevelopment.firebaseio.com",
  projectId: "subhanwebdevelopment",
  storageBucket: "subhanwebdevelopment.appspot.com",
  messagingSenderId: "936216790872",
  appId: "1:936216790872:web:acee6b6ceba12c9b86072d",
  measurementId: "G-HTRQ04JF9P"
};
new firebase.initializeApp(firebaseConfig)
export const auth =new firebase.auth();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    // await db.collection("users").add({
    //   uid: user.uid,
    //   name,
    //   authProvider: "local",
    //   email,
    // });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export default firebase
// const provider = new firebase.auth.GoogleAuthProvider();
//   const faceBookProvider = new firebase.auth.FacebookAuthProvider();
//   provider.setCustomParameters({
//     promt: "select_account",
//   });

//   export const signInWithGoogle = () => {
//     auth.signInWithRedirect(provider);
//   };
//  

// export const auth = firebase.auth();







// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCsNuqKVVE60DS9hBTE4jv_CNoWbm364H0",
//   authDomain: "subhanwebdevelopment.firebaseapp.com",
//   databaseURL: "https://subhanwebdevelopment.firebaseio.com",
//   projectId: "subhanwebdevelopment",
//   storageBucket: "subhanwebdevelopment.appspot.com",
//   messagingSenderId: "936216790872",
//   appId: "1:936216790872:web:acee6b6ceba12c9b86072d",
//   measurementId: "G-HTRQ04JF9P"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);