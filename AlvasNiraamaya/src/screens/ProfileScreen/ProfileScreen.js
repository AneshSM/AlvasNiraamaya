import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import {AuthContext} from '../../context/AuthProvider';
//flash message
import {showMessage} from 'react-native-flash-message';

import UserProfile from './UserProfile';
import BottomProfile from './BottomProfile';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const {user, signout} = useContext(AuthContext);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <UserProfile name={user.displayName} image={user.photoURL} />
        <BottomProfile />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    justifyContent: 'space-between',
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
  button: {
    padding: 0,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 20,
    borderRadius: 40,
    justifySelf: 'flex-end',
    elevation: 9,
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
