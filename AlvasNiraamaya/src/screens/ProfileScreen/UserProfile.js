import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.topCard}>
      <View style={styles.userProfile}>
        <Image
          source={{uri: 'https://i.pravatar.cc/300'}}
          style={styles.avatar}
        />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  editButton: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserProfile;
