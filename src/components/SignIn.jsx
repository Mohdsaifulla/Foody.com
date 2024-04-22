import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../fireBase/firebase";
import { validation } from "../constants/validation";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const notifySignIn = () => toast.success("You are now signed in");
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmitDetails = () => {
    const message = validation(emailRef.current.value, passRef.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          notifySignIn();
          updateProfile(user, {
            displayName: nameRef,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode},${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          notifySignIn();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode},${errorMessage}`);
        });
    }
  };

  return (
    <div className="">
      <div className="w-full relative  flex items-center justify-center  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="shadow-2xl border border-gray-400 flex flex-col sm:w-[400px] w-full gap-4 absolute top-2 rounded-lg mt-20"
        >
          <label className="text-3xl text-gray-400 font-semibold pt-6 mx-4">
            {isSignIn ? "Sign in" : "Sign Up"}
          </label>
          {!isSignIn && (
            <input
              type="text"
              ref={nameRef}
              id="name"
              name="name"
              placeholder="Name"
              className="border-gray-400 text-gray-400 border p-4 mx-4 rounded"
            />
          )}
          <input
            type="email"
            ref={emailRef}
            id="email"
            name="email"
            placeholder="Email"
            className=" text-gray-400  border border-gray-400 p-4 mx-4 rounded"
          />
          <input
            type="password"
            ref={passRef}
            id="password"
            name="password"
            placeholder="Password"
            className=" border p-4 mx-4 rounded border-gray-400 text-gray-400"
          />
          <p className="text-green-600 text-sm mx-4">{errorMessage}</p>
          <button
            className="bg-green-600 rounded text-xl font-semibold p-2 mx-4 text-white hover:bg-green-700"
            onClick={handleSubmitDetails}
          >
            {isSignIn ? "Sign in" : "Sign Up"}
          </button>
          <div className="flex gap-2 p-2 mx-4">
            <p className="">
              {isSignIn ? "New to Swiggy" : "Already have account"}
            </p>
            <p
              className="font-semibold cursor-pointer hover:text-gray-400"
              onClick={toggleForm}
            >
              {isSignIn ? "Sign up now" : "Sign in now"}
            </p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default SignIn;
