import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase/firebase";


const useSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default useSignUp
