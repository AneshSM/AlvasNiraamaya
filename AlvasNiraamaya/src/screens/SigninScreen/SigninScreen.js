import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';
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

  const onSiginPressed = data => {
    console.log(data);
    //Validate User
    navigation.navigate('DeskTop');
  };

  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexGrow: 1,
      height: '100%',
      width: '100%',
    },
    root_view: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flexGrow: 1,
      borderWidth: 1,
    },
    container: {
      width: '100%',
      backgroundColor: COLORS.clr60,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      flex: 2,
    },
  });

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    console.warn('SignUp');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={[styles.root_view]}>
          <View style={[SigninScreen_Style.head]}>
            <View style={[SigninScreen_Style.logo]}>
              <Image
                source={IMGS.logo}
                style={[styles.logo, SigninScreen_Style.image]}
                resizeMode="contain"></Image>
            </View>
            <View style={[SigninScreen_Style.title]}>
              <Text style={[SigninScreen_Style.text]}>{ROUTES.TITLE}</Text>
            </View>
          </View>
          <View style={[styles.container]}>
            <CustomeInput
              placeholder="Username"
              name="Username"
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

            <CustomeButton
              text="LogIn"
              onPress={handleSubmit(onSiginPressed)}
            />
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SigninScreen;
