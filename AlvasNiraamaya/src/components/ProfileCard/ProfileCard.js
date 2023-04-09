import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../../constants';
import CustomText from '../CustomText/CustomText';

const ProfileCard = ({name, picture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} source={{uri: null}} />
        </View>
        <CustomText factor={16} style={styles.name}>
          name
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: COLORS.clr60,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  profilePictureContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 20,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileCard;
