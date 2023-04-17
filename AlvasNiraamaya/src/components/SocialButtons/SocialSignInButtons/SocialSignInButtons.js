import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {CustomeButton} from '../../CustomComponents';

//flash message
import FlashMessage, {showMessage} from 'react-native-flash-message';

// context
import {AuthContext} from '../../../context/AuthProvider';

const SocialSignInButtons = () => {
  const {googleSignIn} = useContext(AuthContext);
  const onSignInGoogle = () => {
    googleSignIn();
    showMessage({
      message: 'SignedIn succesfully',
      description: "Welcome to Alva's Niraamaya Application",
      type: 'success',
      icon: 'auto',
    });
  };
  const onSignInFaceBook = () => {
    console.warn('FaceBook');
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  return (
    <>
      {Platform.OS === 'android' ? (
        <>
          <CustomeButton
            text="Sign In with Google"
            onPress={onSignInGoogle}
            bgColor="#FFFFFF"
            fgColor="#757575"
          />
          {/* <CustomeButton
            text="Sign In with FaceBook"
            onPress={onSignInFaceBook}
            bgColor="#1877F2"
            fgColor="#FFFFFF"
          /> */}
        </>
      ) : (
        <CustomeButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#000000"
          fgColor="#FFFFFF"
        />
      )}
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
