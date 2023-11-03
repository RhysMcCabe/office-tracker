import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login({ setUser }) {
  const signIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
      <div>
        <form onSubmit={signIn}>
          {" "}
          <button
            type="submit"
            className="border rounded-full w-36 bg-zinc-700 hover:bg-zinc-800 px-2 py-1"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
