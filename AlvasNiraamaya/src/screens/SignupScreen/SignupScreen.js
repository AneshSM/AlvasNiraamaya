import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';

import {
  CustomeButton,
  CustomeInput,
  SocialSignInButtons,
} from '../../components';
import SocialSignUpButtons from '../../components/SocialButtons/SocialSignUpButtons/SocialSignUpButtons';

import {useNavigation} from '@react-navigation/native';

import {Controller, useForm} from 'react-hook-form';
import {COLORS} from '../../constants';

const SignupScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const onSigInPressed = () => {
    console.warn('SignIn');
    navigation.navigate('SignIn');
  };

  const [alert, setAlert] = useState();
  const [mailStatus, setMailStatus] = useState(false);

  const showAlert = setTimeout(() => {
    setMailStatus(false);
    clearTimeout(showAlert);
  }, 10000);

  const onSignUpPressed = data => {
    const {Email, Password} = data;
    // Authentication
    auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {
        // Navigation
        navigation.navigate('ConfirmEmail');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setMailStatus(true);
          setAlert('That email address is already in use!');
          console.log('That email address is already in use!');
          return;
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
      <Text style={styles.title}>Create New Account</Text>
      <View style={[styles.container, {padding: height * 0.04}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomeInput
            placeholder="Username"
            name="Username"
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 4,
                message: 'Username should be minimum 4 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Username should be maximum 20 characters long',
              },
            }}
          />
          <CustomeInput
            placeholder="Phone Number"
            control={control}
            name="Phone Number"
            rules={{
              required: 'Phone Number is required',
              minLength: {
                value: 10,
                message: 'Phone Number should be minimum 10 characters long',
              },
              maxLength: {
                value: 10,
                message: 'Phone Number should be maximum 10 characters long',
              },
            }}
          />
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
          <Text style={styles.text}>
            By Registering, you confirm that you accept our{' '}
            <Text style={styles.link}>Terms of Use</Text> and{' '}
            <Text style={styles.link}>Privacy and Policy</Text>
          </Text>
          <SocialSignUpButtons />
          <CustomeButton
            text="Alreafy have an account ? Login"
            onPress={onSigInPressed}
            type="Tertiary"
          />
          {mailStatus && (
            <View style={styles.alert_container}>
              <Text style={styles.message}>{alert}</Text>
            </View>
          )}
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
  },
});
