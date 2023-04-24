import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const BottomProfile = () => {
  return (
    <View style={styles.bottomCard}>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Appointment History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Booked Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Customer Care</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Rate Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  },
  logoutButton: {
    backgroundColor: '#3f51b5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: '20px',
  },
});

export default BottomProfile;
