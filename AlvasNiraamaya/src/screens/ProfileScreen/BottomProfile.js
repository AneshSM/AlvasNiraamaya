import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CustomeButton} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {AuthContext} from '../../context/AuthProvider';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const BottomProfile = () => {
  const {signout} = useContext(AuthContext);
  const navigation = useNavigation();
  const navigate = route => {
    navigation.navigate(ROUTES.INFORMATION, {
      params: {route},
    });
  };
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
    <View style={styles.bottomCard}>
      <CustomeButton
        style={styles.bottomButton}
        textStyle={styles.buttonText}
        text={'Appointment History'}
      />
      <CustomeButton
        style={styles.bottomButton}
        textStyle={styles.buttonText}
        text={'Booked Appointments'}
      />
      <CustomeButton
        style={styles.bottomButton}
        textStyle={styles.buttonText}
        text={'Customer Care'}
      />
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Help Us Improve</Text>
        <Text style={styles.helpText}>
          If you have any feedback or suggestions on how we can improve our
          services, please let us know.
        </Text>
        <CustomeButton
          style={{...styles.bottomButton, elevation: 0, borderWidth: 1}}
          textStyle={styles.buttonText}
          text={'Rate Us'}
        />
      </View>
      <CustomeButton
        style={styles.logoutButton}
        onPress={onSignOutPressed}
        text="Logout"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  helpText: {
    fontSize: 16,
  },
  bottomButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.clr10,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default BottomProfile;
