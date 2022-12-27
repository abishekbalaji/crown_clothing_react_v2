// import { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  // useEffect(() => {
  //   const getAuth = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   };
  //   getAuth();
  // }, []);
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    console.log(user);
    const userRef = await createUserDocumentFromAuth(user);
    console.log(userRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Pop Up</button>
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
