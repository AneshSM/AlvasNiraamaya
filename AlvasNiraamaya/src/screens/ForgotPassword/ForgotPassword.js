import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
// firebase
import auth from '@react-native-firebase/auth';

//flash message
import {showMessage} from 'react-native-flash-message';

// icon
import Icon from 'react-native-vector-icons/FontAwesome';

import {CustomText, CustomeButton, CustomeInput} from '../../components';

import {useNavigation} from '@react-navigation/native';

import {Controller, useForm} from 'react-hook-form';
import {COLORS, ROUTES} from '../../constants';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const ForgotPassword = () => {
  const {height} = useWindowDimensions();
  const {username, setUsername} = useState('');

  const navigation = useNavigation();

  const onSigInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSendPressed = async data => {
    try {
      await auth().sendPasswordResetEmail(data.Email);
      showMessage({
        message: 'Reset Mail sent succesfully',
        description: 'Check your mail and reset password through link',
        type: 'success',
        icon: 'auto',
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        showMessage({
          message: 'user-not-found',
          description:
            'There is no user record corresponding to this Email.\n Please cross check provided email',
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
      console.log(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View style={styles.root}>
      <CustomText factor={15} style={styles.title}>
        Reset Your Password
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
          <CustomeButton text="Send" onPress={handleSubmit(onSendPressed)} />
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

export default ForgotPassword;

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
