import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXCEGk5SeWGRvGsAvJpR3m0gOb1NiGqC4",
    authDomain: "e-commerce-63c74.firebaseapp.com",
    projectId: "e-commerce-63c74",
    storageBucket: "e-commerce-63c74.appspot.com",
    messagingSenderId: "949156639922",
    appId: "1:949156639922:web:a720e7673a4d4fc82145ab"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


provider.setCustomParameters({ prompt: "select_account" });


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);


export const database = getFirestore();

//Sign In with Google Account
export const createUserDocument = async (userAuth,additionalInformaiton) => {
    if (!userAuth) return;

    const userRef = doc(database,'users' ,userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformaiton
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

//Sign Up with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        return await createUserWithEmailAndPassword(auth,email, password);
}

// Sign In with Email and Password
export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email, password);
}

