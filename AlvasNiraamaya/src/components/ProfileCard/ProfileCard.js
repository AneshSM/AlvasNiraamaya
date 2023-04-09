/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {COLORS} from '../../constants';
import CustomText from '../CustomText/CustomText';

const {width, height} = Dimensions.get('window');
const imageSize = Math.min(width, height) / 4;

const ProfileCard = ({name, picture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View
          style={[
            styles.imageContainer,
            {width: imageSize, height: imageSize},
          ]}>
          <Image style={styles.image} source={{uri: null}} />
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
    borderRadius: imageSize / 2,
    overflow: 'hidden',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileCard;
