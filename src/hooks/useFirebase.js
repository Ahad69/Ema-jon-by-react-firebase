import {getAuth,signInWithPopup,FacebookAuthProvider, GithubAuthProvider , onAuthStateChanged , signOut , GoogleAuthProvider   } from "firebase/auth";
import { useEffect, useState } from "react";
import authentication from "../Firebase/Firebase.init";

authentication()

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const useFirebase =()=>{
    const [user , setUser]= useState({})
    const auth = getAuth();

    const signUpWithGoogle = ()=>{
     return signInWithPopup(auth, googleProvider)
        
    }
    // facebook 
    const signUpWithFacebook =()=>{
       return signInWithPopup(auth, facebookProvider)
    }
    const signUpWithGitHub =()=>{
      return  signInWithPopup(auth, gitHubProvider)
    }
    //--------------------------------- signOut
    const logOut =()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }


    // observe that states are changing or not 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])
    return {
        user,
        signUpWithGoogle,
        logOut,
        signUpWithFacebook,
        signUpWithGitHub

    }
    
}
export default useFirebase;