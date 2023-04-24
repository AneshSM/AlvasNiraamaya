import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CustomeButton, CustomeInput} from '../CustomComponents';
import {COLORS} from '../../constants';
import {useForm} from 'react-hook-form';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    const {Name, Age, Gender, Mobile_Number, Occupation, Address} = data;
    // Authentication
    try {
      firestore().collection('Users').doc().add();
      showMessage({
        message: 'SignedIn succesfully',
        description: "Welcome to Alva's Niraamaya Application",
        type: 'success',
        icon: 'auto',
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        showMessage({
          message: 'user-not-found',
          description: 'That email address is not registered!',
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
      if (error.code === 'auth/wrong-password') {
        showMessage({
          message: 'wrong-password',
          description: 'Please enter an valid password',
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
      if (error.code === 'auth/too-many-requests') {
        showMessage({
          message: 'too-many-requests',
          description:
            'We have blocked all requests from this device due to unusual activity. Try again later. [ Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ',
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
  const onCancelPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.bottomCard}>
      <ScrollView>
        <CustomeInput
          placeholder="Name"
          name="Name"
          control={control}
          rules={{
            required: 'Name is required',
            pattern: {
              value: 4,
              message: 'Name should be minimum 4 characters long',
            },
          }}
        />
        <CustomeInput
          placeholder="Age"
          name="Age"
          control={control}
          rules={{
            required: 'Age is required',
            minLength: {
              value: 2,
              message: 'Age should be minimum 2 units',
            },
          }}
        />
        <CustomeInput
          placeholder="Gender"
          name="Gender"
          control={control}
          rules={{
            required: 'Gender is required',
            minLength: {
              value: 4,
              message: 'Gender should be minimum 4 characters long',
            },
          }}
        />
        <CustomeInput
          placeholder="Mobile Number"
          name="Mobile_Number"
          control={control}
          rules={{
            required: 'Mobile Number is required',
            minLength: {
              value: 10,
              message: 'Mobile Number should be minimum 10 units',
            },
          }}
        />
        <CustomeInput
          placeholder="Occupation"
          name="Occupation"
          control={control}
          rules={{
            required: 'Occupation is required',
            minLength: {
              value: 4,
              message: 'Occupation should be minimum 4 characters long ',
            },
          }}
        />
        <CustomeInput
          placeholder="Address"
          name="Address"
          control={control}
          rules={{
            required: 'Address is required',
            minLength: {
              value: 4,
              message: 'Address should be minimum 4 characters long',
            },
          }}
        />
        <CustomeButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomeButton
          text="Cancel"
          onPress={onCancelPressed}
          type="Tertiary"
        />
      </ScrollView>
    </View>
  );
};

export default UserForm;

const {width} = Dimensions.get('window');

const CARD_WIDTH = width;
const styles = StyleSheet.create({
  alert_container: {
    backgroundColor: COLORS.alert,
  },
  message: {
    color: COLORS.clr60,
    fontSize: 19,
    textAlign: 'center',
  },
  topCard: {
    width: CARD_WIDTH,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.clr30,
  },
  bottomCard: {
    width: CARD_WIDTH,
    borderRadius: 10,
    backgroundColor: COLORS.clr60,
    elevation: 3,
    padding: 30,
    flex: 1,
  },
});
