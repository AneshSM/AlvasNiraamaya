/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {COLORS} from '../../constants';
import CustomText from '../CustomText/CustomText';
import {CustomeButton} from '../CustomComponents';

const {width, height} = Dimensions.get('window');
const imageSize = Math.min(width, height) / 4;

const ProfileCard = ({name, picture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={[styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require('../../assets/user/user-default.png')}
          />
        </View>
        <View style={{width: 300}}>
          <CustomText factor={30} style={styles.name}>
            edit Profile to enter the name
          </CustomText>
          <CustomeButton
            type="Secondary"
            style={{padding: 0}}
            text={'Edit Profile'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.95,
    padding: 5,
    elevation: 5,
    marginBottom: 30,
    borderRadius: 10,
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    color: COLORS.clr60,
    borderRadius: 8,
    padding: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.clr60,
    gap: width / 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: imageSize / 2,
    overflow: 'hidden',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileCard;
