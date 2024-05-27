import {auth, googleProvider} from '../Config/firebase-config';
import { signOut, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user
        return user

    } catch(error) {
        console.log(error)
    }
}

export const signOutUser = async () => {
    try {
        await signOut(auth)
    } catch(error) {
        console.log(error)
    }
}

export const signUpWithEmail = async (email, password) => {
    try {
       await createUserWithEmailAndPassword(auth, email, password)
    } catch(error) {
        console.log(error)
    }
}

export const emailSignIn = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        return user
    } catch(error) {
        console.log(error)
        throw error
    }
}