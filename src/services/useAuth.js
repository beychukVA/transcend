// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/Auth/auth-actions";
import { firebaseConfig } from "./config/firebaseConfig";

const useAuth = () => {
  const [auth, setAuth] = useState();
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [app, setApp] = useState();
  const dispatch = useDispatch();

  if (!auth) {
    const app = initializeApp(firebaseConfig);
    setApp(app);
    const resAuth = getAuth();
    setAuth(resAuth);

    onAuthStateChanged(resAuth, (user) => {
      if (!user) {
        setUser(null);
        dispatch(addToken(null));
        return;
      }
      setUser(user);
      dispatch(addToken(user?.accessToken));
    });
  }

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError(null);
      })
      .catch((error) => setError(error));
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError(null);
      })
      .catch((error) => setError(error));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
        dispatch(addToken(null));
      })
      .catch((error) => setError(error));
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email)
      .then((res) => {
        setError(null);
        setUser(null);
        return true;
      })
      .catch((error) => setError(error));
  };

  return {
    app,
    auth,
    user,
    error,
    signIn,
    signUp,
    logOut,
    resetPassword,
    setError,
  };
};

export default useAuth;
