import {View, Text} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

import {CustomeButton} from '../../components';

const ProfileScreen = () => {
  const user = firebase.auth().currentUser;
  const navigation = useNavigation();

  const onSignOutPressed = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <Text>{user != null && 'User email: ' + user.email}</Text>
      <CustomeButton text="Logout" onPress={onSignOutPressed} />
    </View>
  );
};

export default ProfileScreen;
