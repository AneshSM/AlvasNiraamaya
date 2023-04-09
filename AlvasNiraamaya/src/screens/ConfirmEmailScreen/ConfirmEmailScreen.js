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

import {Controller, useForm} from 'react-hook-form';
import {CustomText, CustomeButton, CustomeInput} from '../../components';
import {COLORS} from '../../constants';
const ConfirmEmailScreen = () => {
  const {height} = useWindowDimensions();
  const {Code, setCode} = useState('');

  const navigation = useNavigation();

  const onResendPressed = () => {
    console.warn('Resend');
  };
  const onSigInPressed = () => {
    console.warn('SignIn');
    navigation.navigate('SignIn');
  };

  const onConfirmPressed = () => {
    console.warn('Confirm');
    navigation.navigate('Home');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return (
    <View style={styles.root}>
      <CustomText factor={15} style={styles.title}>
        Confirm Your Email
      </CustomText>
      <View style={[styles.container, {padding: height * 0.04}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomeInput
            placeholder="Enter your confirmation code"
            name="Confirmation code"
            control={control}
            rules={{
              required: 'Enter the code',
              minLength: {
                value: 4,
                message: 'code must be minimum of 4 characters long',
              },
              pattern: {
                value: EMAIL_REGEX,
                message: 'Enter valid Email id',
              },
            }}
          />
          <CustomeButton
            text="Confirm"
            onPress={handleSubmit(onConfirmPressed)}
          />
          <CustomeButton
            text="Resend Code"
            onPress={onResendPressed}
            type="Secondary"
          />
          <CustomeButton
            text="Back to Signin"
            onPress={onSigInPressed}
            type="Tertiary"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;

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
});
