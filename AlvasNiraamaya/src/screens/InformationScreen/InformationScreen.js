import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';

import {CustomText, CustomeButton} from '../../components';
import {COLORS, ROUTES} from '../../constants';

const InformationScreen = ({route}) => {
  const navigation = useNavigation();
  const routes = route.params.params;
  const name = routes.doctor;
  const dept = routes.title;

  const navigate = () => {
    navigation.navigate(ROUTES.BOOKING, {
      params: {name, dept},
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: routes.imageURL}} />
        <CustomText factor={13} style={styles.title}>
          {dept}
        </CustomText>
        <CustomText factor={18} style={styles.doctorName}>
          Doctor: {name}
        </CustomText>
        <CustomText style={styles.description}>{routes.info}</CustomText>
        <CustomeButton
          type="book"
          onPress={navigate}
          text={'Book Appointment'}
          factor={18}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'justify',
  },
  doctorName: {
    fontSize: 14,
    alignSelf: 'flex-end',
    fontWeight: 600,
    color: COLORS.clr10,
    marginBottom: 15,
  },
});

export default InformationScreen;
