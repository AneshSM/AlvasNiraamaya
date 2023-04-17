import {StyleSheet, View, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';

import {CustomText, CustomeButton, CustomeInput} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//flash message
import {showMessage} from 'react-native-flash-message';
// icon
import Icon from 'react-native-vector-icons/FontAwesome';

// constants
import {COLORS, ROUTES} from '../../constants';

const SignupScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const onSigInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSignUpPressed = async data => {
    const {Email, Password} = data;
    // Authentication
    try {
      await auth().createUserWithEmailAndPassword(Email, Password);
      showMessage({
        message: 'SignedUp succesfully',
        description: 'Welcome to Alvas Niraamaya',
        type: 'success',
        icon: 'auto',
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({
          message: 'email-already-in-use',
          description: 'That email address is already in use',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
        console.log(error);
      }
      if (error.code === 'auth/invalid-email') {
        showMessage({
          message: 'invalid-email',
          description: 'That email address is Invaild',
          type: 'warning',
          icon: () => (
            <Icon
              name="warning"
              size={30}
              color="#aa2020"
              style={{paddingRight: 20, paddingTop: 14}}
            />
          ),
          position: 'bottom',
        });
      }
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const pwd = watch('Password');

  return (
    <View style={styles.root}>
      <CustomText factor={12} style={styles.title}>
        Create New Account
      </CustomText>
      <View style={[styles.container, {padding: height * 0.04}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomeInput
            placeholder="Email"
            name="Email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Enter valid Email id',
              },
            }}
          />
          <CustomeInput
            placeholder="Password"
            secureTextEntry
            control={control}
            name="Password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
            }}
          />
          <CustomeInput
            placeholder="Confirm Password"
            secureTextEntry
            control={control}
            name="Confirm Password"
            rules={{
              required: 'Re-Enter the same Password',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
              validate: value => value === pwd || 'Password does not match',
            }}
          />

          <CustomeButton
            text="Create Account"
            onPress={handleSubmit(onSignUpPressed)}
          />
          <CustomText factor={29} style={styles.text}>
            By Registering, you confirm that you accept our
            <CustomText factor={29} style={styles.link}>
              {' Terms of Use'}
            </CustomText>
            {' and '}
            <CustomText factor={29} style={styles.link}>
              Privacy and Policy
            </CustomText>
          </CustomText>
          <CustomeButton
            text="Alreafy have an account ? Login"
            onPress={onSigInPressed}
            type="Tertiary"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.clr60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    margin: 10,
  },
  link: {
    color: COLORS.clr30,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },

  alert_container: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.alert,
    borderRadius: 10,
  },
  message: {
    color: COLORS.clr60,
    fontSize: 19,
    textAlign: 'center',
  },
});
