import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {
  CustomeButton,
  CustomeInput,
  SocialSignInButtons,
} from '../../components';
import {COLORS, IMGS, ROUTES} from '../../constants';
import {SigninScreen_Style} from '../../styles';

const SigninScreen = () => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // console.log(errors);

  const [alert, setAlert] = useState();
  const [mailStatus, setMailStatus] = useState(false);

  const showAlert = setTimeout(() => {
    setMailStatus(false);
    clearTimeout(showAlert);
  }, 10000);

  const onSiginPressed = data => {
    console.log(data);
    const {Email, Password} = data;
    // Authentication
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => {
        // Navigation
        navigation.navigate('DeskTop');
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          setMailStatus(true);
          setAlert('That email address is not registered!');
          console.log('That email address is not registered!');
          return;
        }
        console.error(error);
      });
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('SignUp');
    navigation.navigate('SignUp');
  };

  return (
    <View style={SigninScreen_Style.root}>
      <View style={[SigninScreen_Style.head]}>
        <View style={[SigninScreen_Style.logo]}>
          <Image
            source={IMGS.logo}
            style={[SigninScreen_Style.image]}
            resizeMode="contain"
          />
        </View>
        <View style={[SigninScreen_Style.title]}>
          <Text style={[SigninScreen_Style.text]}>{ROUTES.TITLE}</Text>
        </View>
      </View>
      <View style={[SigninScreen_Style.container]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={SigninScreen_Style.form}>
          <CustomeInput
            placeholder="Username"
            name="Email"
            control={control}
            rules={{required: 'Username is required'}}
          />
          <CustomeInput
            placeholder="Password"
            name="Password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be minimum 8 characters long',
              },
            }}
            secureTextEntry
          />

          <CustomeButton text="LogIn" onPress={handleSubmit(onSiginPressed)} />
          <CustomeButton
            text="Forgot Password ?"
            onPress={onForgotPasswordPressed}
            type="Tertiary"
          />
          <SocialSignInButtons />
          <CustomeButton
            text="Don't have an account ? Create one"
            onPress={onSignUpPressed}
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

export default SigninScreen;

const styles = StyleSheet.create({
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
