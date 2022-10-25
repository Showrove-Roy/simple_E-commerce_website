import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

// getting auth with passing app from firebase
const auth = getAuth(app);

// create and export context api
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  // User data storage
  const [user, setUser] = useState(null);

  // Loading system
  const [loading, setLoading] = useState(true);

  // create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in function
  const signIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Current user data getting from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signIN, logOut, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
