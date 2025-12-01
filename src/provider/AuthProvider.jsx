import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user (displayName / photoURL)
  const updateUser = async (updatedData) => {
    await updateProfile(auth.currentUser, updatedData);
    await reloadUser();   // 🔥 instantly refresh updated user
  };

  // Reload current user from Firebase
  const reloadUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser }); // 🔥 force re-render
    }
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authdata = {
    user,
    setUser,
    createUser,
    logOut,
    singIn,
    loading,
    setLoading,
    updateUser,
    reloadUser,   // 🔥 Export reloadUser
  };

  return (
    <AuthContext.Provider value={authdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
