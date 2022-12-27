// import { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import "./Authentication.scss";
// import {
//   // auth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase";

const Authentication = () => {
  // useEffect(() => {
  //   const getAuth = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   };
  //   getAuth();
  // }, []);

  return (
    <div className="authentication-container">
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
