import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions, StyleSheet, View} from 'react-native';

import {useForm} from 'react-hook-form';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';

import {AuthContext} from '../../context/AuthProvider';
import {CustomeButton, CustomeInput} from '../CustomComponents';
import {COLORS, ROUTES} from '../../constants';

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {user, setUserform, setUser} = useContext(AuthContext);
  const navigation = useNavigation();
  const [selectedGender, setselectedGender] = useState('Male');

  const onConfirmPressed = async data => {
    const {name, age, mobileNo, occupation, address, image} = data;
    try {
      firestore()
        .collection('Users')
        .doc(user.uid)
        .set({
          name: name,
          age: age,
          gender: selectedGender,
          mobileNo: mobileNo,
          occupation: occupation,
          address: address,
          image: image ? image : null,
          email: user.email,
        })
        .then(() => {
          setUserform(true);
          auth()
            .currentUser.updateProfile({
              displayName: name,
              photoURL: image ? image : null,
            })
            .catch(err => console.log(err));
          showMessage({
            message: 'Data added succesfully',
            description: 'You can Edit data in your profile',
            type: 'success',
            icon: 'auto',
          });
          navigation.navigate(ROUTES.DOCTOR);
        });
    } catch (error) {
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
          name="name"
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
          name="age"
          control={control}
          keyboardType="phone-pad"
          rules={{
            required: 'Age is required',
            minLength: {
              value: 2,
              message: 'Age should be minimum 2 units',
            },
          }}
        />

        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) =>
            setselectedGender(itemValue)
          }>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Transgender" value="Transgender" />
          <Picker.Item label="Non-binary" value="Non-binary" />
        </Picker>

        <CustomeInput
          placeholder="Mobile Number"
          name="mobileNo"
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
          name="occupation"
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
          name="address"
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
  gender: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
});
