/* eslint-disable react/no-unstable-nested-components */
import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Card, List, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import firestore from '@react-native-firebase/firestore';

import {CustomText, CustomeButton} from '../../components';
import {COLORS, ROUTES} from '../../constants';
import {AuthContext} from '../../context/AuthProvider';

const AppointmentInformationScreen = ({route}) => {
  const navigation = useNavigation();
  const routes = route.params.params;

  const {user} = useContext(AuthContext);

  const {docName, date, status, time} = routes.value;
  const navigate = () => {
    navigation.goBack();
  };

  const cancelAppointment = () => {
    firestore().collection('Appointments').doc(date).delete();
    firestore()
      .collection('Users/' + user.uid + '/Appointments')
      .doc(date)
      .update({[`${time}.status`]: 'Cancel'});

    navigate();
  };

  return (
    <View style={styles.container}>
      <View>
        <ImageProfile docName={docName} />
        <DetailsCard data={routes.value} />
      </View>
      {status === 'Active' && (
        <CustomeButton
          type="book"
          onPress={cancelAppointment}
          text={'Cancel Appointment'}
          factor={18}
          style={{backgroundColor: 'tomato'}}
        />
      )}
    </View>
  );
};

const ImageProfile = ({docName}) => {
  const [data, setData] = useState({
    name: '',
    dept: '',
    imageURL: '',
  });
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        await firestore()
          .collection('Doctor')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              if (doc.data().DocName === docName) {
                setData({
                  name: doc.data().DocName,
                  dept: doc.data().Department,
                  imageURL: doc.data().Image,
                });
              }
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
  }, []);
  return (
    <View style={styles.item}>
      <View style={styles.profilePictureContainer}>
        {data.imageURL && (
          <Image style={styles.profilePicture} source={{uri: data.imageURL}} />
        )}
      </View>
      <View style={styles.detailcontainer}>
        <CustomText style={styles.name}>{data.name}</CustomText>
        <CustomText factor={28} style={styles.name}>
          Department: {data.dept}
        </CustomText>
      </View>
    </View>
  );
};

const DetailsCard = ({data}) => {
  const {docName, date, status, time} = data;
  return (
    <Card style={styles.card}>
      <Card.Title
        title={
          status === 'Active'
            ? 'Active Appointment'
            : status === 'Cancel'
            ? 'Canceled Appointment'
            : 'Past Appointment'
        }
        style={styles.card_title}
        left={props => (
          <Avatar.Icon
            {...props}
            icon={
              status === 'Active'
                ? 'check'
                : status === 'Cancel'
                ? 'cancel'
                : 'history'
            }
            style={{
              backgroundColor:
                status === 'Active'
                  ? COLORS.clr30
                  : status === 'Cancel'
                  ? 'tomato'
                  : 'grey',
            }}
          />
        )}
      />
      <Card.Content>
        <Text style={styles.title}>Appointment Details</Text>
        <List.Item
          title="Date"
          description={date}
          left={props => <List.Icon {...props} icon="calendar" />}
        />
        <List.Item
          title="Time"
          description={time}
          left={props => <List.Icon {...props} icon="clock-outline" />}
        />
      </Card.Content>
    </Card>
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
    flex: 1,
    justifyContent: 'space-between',
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
  item: {
    height: 200,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profilePictureContainer: {
    height: 140,
    width: 140,
    borderRadius: 100,
    overflow: 'hidden',
    margin: 20,
    borderWidth: 1,
  },
  profilePicture: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  detailcontainer: {
    flex: 1,
    marginHorizontal: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    fontWeight: 'bold',
  },
});

export default AppointmentInformationScreen;
