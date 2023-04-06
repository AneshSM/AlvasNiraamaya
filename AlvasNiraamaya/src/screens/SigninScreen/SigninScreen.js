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
        </ScrollView>
      </View>
    </View>
  );
};

export default SigninScreen;
