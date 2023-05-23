import React, {createContext, useState} from 'react';

// Firebase
import auth from '@react-native-firebase/auth';

// Google auth
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userform, setUserform] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        userform,
        setUserform,
        setUser,
        signout: async () => {
          try {
            auth().signOut();
          } catch (e) {
            console.log(e.message);
          }
        },
        googleSignIn: async () => {
          // Get the users ID token
          const {idToken} = await GoogleSignin.signIn();
          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          // Sign-in the user with the credential
          return auth().signInWithCredential(googleCredential);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
