import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
export const createcontext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const createuserEmail = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginwithEmail = ( email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const singOutPage = () => {
    signOut(auth)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

const AuthContext = ({children}) => {
    const [curentuser, setCureentuser] = useState([])

    useEffect(()=>{
        const unsuscripbe = onAuthStateChanged(auth,currentUser =>{
            setCureentuser(currentUser)
        }) ;

       return () => unsuscripbe()
   
    },[])
    

    const singinWithGoogle = () => {
       signInWithPopup(auth,googleProvider)
       .then(result => console.log(result))
       .catch(error => console.log(error))
    }
 
    const autInfomation = {createuserEmail,singinWithGoogle,loginwithEmail,curentuser,singOutPage}

    return (
       <createcontext.Provider value={autInfomation}>
            {children}
       </createcontext.Provider>
    );
};

export default AuthContext;