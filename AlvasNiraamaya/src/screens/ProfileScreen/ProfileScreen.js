import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

import {CustomText, CustomeButton, ProfileCard} from '../../components';

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
    // <View>
    //   <CustomText>{user != null && 'User email: ' + user.email}</CustomText>
    //   <CustomeButton text="Logout" onPress={onSignOutPressed} />
    // </View>
    <>
      <View style={styles.container}>
        <ProfileCard />
        <UserDetailCard />
        <AppointmentCard />
        <HelpCard />
        <View style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </View>
      </View>
    </>
  );
};
const UserDetailCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>User Details</Text>
    </View>
  );
};
const AppointmentCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>Appointment History</Text>
    </View>
  );
};

const HelpCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>Help Us Improve</Text>
      <Text style={styles.helpText}>
        If you have any feedback or suggestions on how we can improve our
        services, please let us know.
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Rate Us</Text>
        <Text style={styles.buttonText}>Contact Us</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 6,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  subCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  subCardHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888888',
  },
  subCardText: {
    flex: 2,
    fontSize: 16,
    color: '#333333',
  },

  helpText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 20,
    borderRadius: 40,
    justifySelf: 'flex-end',
    elevation: 9,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
