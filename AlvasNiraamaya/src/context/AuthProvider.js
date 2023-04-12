import React, {createContext, useReducer, useState} from 'react';

// Firebase
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

const initialValue = {
  signinError: false,
  signupError: false,
  signinMessage: '',
  singupMessage: '',
};

const errorReducer = (state, action) => {
  if (action.type === 'SIGNIN') {
    state.signinMessage = action.message;
    state.signinError = action.status;
  }
  if (action.type === 'SIGNUP') {
    state.singupMessage = action.message;
    state.signupError = action.status;
  }
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, dispatchError] = useReducer(errorReducer, initialValue);
  const {signinError, signupError, signinMessage, singupMessage} = error;
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signin: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            if (error.code === 'auth/user-not-found') {
              dispatchError({
                type: 'SIGNIN',
                message: 'That email address is not registered!',
                status: false,
              });
            }
            console.log(e.message);
          }
        },
        signup: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            if (error.code === 'auth/email-already-in-use') {
              throw new Error(e.code);
            }
            console.log(e.message);
          }
        },
        signout: async () => {
          try {
            auth().signOut();
          } catch (e) {
            console.log(e.message);
          }
        },
        signinError,
        signupError,
        signinMessage,
        singupMessage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
