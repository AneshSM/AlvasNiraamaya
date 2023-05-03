import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions, StyleSheet, View} from 'react-native';

import {useForm} from 'react-hook-form';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import {AuthContext} from '../../context/AuthProvider';
import {CustomeButton, CustomeInput} from '../CustomComponents';
import {COLORS} from '../../constants';

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    const {name, age, gender, mobileNo, occupation, address, image} = data;
    // Authentication
    try {
      // firestore()
      //   .collection('Users')
      //   .doc(user.uid)
      //   .add(
      //     name,
      //     age,
      //     gender,
      //     mobileNo,
      //     occupation,
      //     address,
      //     image ? image : null,
      //   );
      showMessage({
        message: 'Data added succesfully',
        description: 'You can Edit data in your profile',
        type: 'success',
        icon: 'auto',
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  const onCancelPressed = () => {
    navigation.goBack();
  };
  // const initializeUserData = () => {
  //   firestore().collection('Users').doc(user.uid).set({
  //     name: user.displayName,
  //     age: 0,
  //     eamil: user.email,
  //     gender: '',
  //     occupation: '',
  //     mobileNo: user.phoneNumber,
  //     image: user.photoURL,
  //     address: '',
  //   });
  // };
  // useEffect(() => {
  //   initializeUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // console.log(user);

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
          keyboardType="phone-pad"
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
          numberOfLines={5}
          multiline={true}
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
