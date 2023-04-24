import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {CustomText, CustomeButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';

const InformationScreen = ({route}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: route.params.params.imageURL}}
        />
        <CustomText factor={13} style={styles.title}>
          {route.params.params.title}
        </CustomText>
        <CustomText factor={18} style={styles.doctorName}>
          Doctor: {route.params.params.doctor}
        </CustomText>
        <CustomText style={styles.description}>
          {route.params.params.info}
        </CustomText>
        <CustomeButton type="book" text={'Book Doctor'} />
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
