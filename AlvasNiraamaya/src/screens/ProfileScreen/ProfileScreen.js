import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import {CustomeButton, ProfileCard} from '../../components';
import {AuthContext} from '../../context/AuthProvider';
//flash message
import {showMessage} from 'react-native-flash-message';

const ProfileScreen = () => {
  const {user, signout} = useContext(AuthContext);
  const onSignOutPressed = () => {
    signout().then(
      showMessage({
        message: 'SignedOut succesfully',
        description: 'Thank you',
        type: 'success',
        icon: 'auto',
      }),
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ProfileCard />
        <UserDetailCard email={user.email} />
        <AppointmentCard />
        <HelpCard />
        <CustomeButton text="Logout" onPress={onSignOutPressed} />
      </View>
    </>
  );
};
const UserDetailCard = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>User Email: {props.email}</Text>
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

// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import UserProfile from './UserProfile';
// import BottomProfile from './BottomProfile';

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <UserProfile />
//       <BottomProfile />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default ProfileScreen;
