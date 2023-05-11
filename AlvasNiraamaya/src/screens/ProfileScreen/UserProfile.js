import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {CustomText, CustomeButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';
import {AuthContext} from '../../context/AuthProvider';

const UserProfile = ({name, image}) => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.topCard}>
      <View style={styles.userProfile}>
        <Image
          source={{uri: image ? image : 'https://i.pravatar.cc'}}
          style={styles.avatar}
        />
        <CustomText style={styles.username}>
          {name ? name : 'no name'}
        </CustomText>
        <CustomeButton
          factor={25}
          onPress={() => navigation.navigate(ROUTES.USER_FORM)}
          style={styles.editButton}
          text="Edit"
        />
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
    justifyContent: 'space-evenly',
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
    padding: 5,
    borderRadius: 5,
    marginLeft: 'auto',
    width: '30%',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserProfile;
