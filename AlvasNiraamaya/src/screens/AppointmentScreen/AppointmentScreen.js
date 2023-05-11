/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useContext, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Card, List} from 'react-native-paper';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, ROUTES} from '../../constants';
import {AuthContext} from '../../context/AuthProvider';
import {CustomeButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

function ActiveAppointments() {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Title
          title="John Doe"
          subtitle="Dentist"
          left={props => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text style={styles.title}>Appointment Details</Text>
          <List.Item
            title="Doctor"
            description="Dr. John Doe"
            left={props => <List.Icon {...props} icon="doctor" />}
          />
          <List.Item
            title="Date"
            description="April 12, 2023"
            left={props => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Time"
            description="10:00 AM"
            left={props => <List.Icon {...props} icon="clock-outline" />}
          />
          <List.Item
            title="Location"
            description="123 Main St"
            left={props => <List.Icon {...props} icon="map-marker" />}
          />
        </Card.Content>
        <Card.Actions>
          <Icon name="phone" size={30} />
          <Icon name="message" size={30} />
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

function PastAppointments({appointments}) {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(ROUTES.APPOINTMENT_INFORMATION, {
      params: {appointments},
    });
  };
  const pastData = [];
  appointments !== null &&
    appointments.forEach((value, key) => {
      console.log(value);
      const {name, docName, date, time, status} = value;
      pastData.push(
        // <Card key={key} style={styles.card}>
        //   <Card.Title
        //     title={docName}
        //     subtitle={date}
        //     style={styles.card_title}
        //     left={props => (
        //       <Avatar.Icon
        //         {...props}
        //         icon={
        //           status === 'Active'
        //             ? 'check'
        //             : status === 'Cancel'
        //             ? 'cancel'
        //             : 'history'
        //         }
        //         style={{
        //           backgroundColor:
        //             status === 'Active'
        //               ? COLORS.clr30
        //               : status === 'Cancel'
        //               ? 'tomato'
        //               : 'grey',
        //         }}
        //       />
        //     )}
        //   />
        //   {/* <Card.Content>
        //     <Text style={styles.title}>Appointment Details</Text>
        //     <List.Item
        //       title="Doctor"
        //       description={docName}
        //       left={props => <List.Icon {...props} icon="doctor" />}
        //     />
        //     <List.Item
        //       title="Date"
        //       description={date}
        //       left={props => <List.Icon {...props} icon="calendar" />}
        //     />
        //     <List.Item
        //       title="Time"
        //       description={time}
        //       left={props => <List.Icon {...props} icon="clock-outline" />}
        //     />
        //   </Card.Content>
        //   <Card.Actions>
        //     <Icon name="phone" size={30} />
        //     <Icon name="message" size={30} />
        //   </Card.Actions> */}
        // </Card>,
        <CustomeButton onPress={navigate} style={styles.card_button}>
          <Card key={key} style={styles.card}>
            <Card.Title
              title={docName}
              subtitle={date}
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
          </Card>
        </CustomeButton>,
      );
    });

  return <ScrollView>{pastData}</ScrollView>;
}

function CanceledAppointments() {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Title
          title="Tom Smith"
          subtitle="Cardiologist"
          left={props => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text style={styles.title}>Appointment Details</Text>
          <List.Item
            title="Doctor"
            description="Dr. Tom Smith"
            left={props => <List.Icon {...props} icon="doctor" />}
          />
          <List.Item
            title="Date"
            description="March 5, 2023"
            left={props => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Time"
            description="9:00 AM"
            left={props => <List.Icon {...props} icon="clock-outline" />}
          />
          <List.Item
            title="Location"
            description="789 Fifth Ave"
            left={props => <List.Icon {...props} icon="map-marker" />}
          />
        </Card.Content>
        <Card.Actions>
          <Icon name="phone" size={30} />
          <Icon name="message" size={30} />
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function AppointmentScreen({route}) {
  const routes = route.params ? route.params.params : '';

  const {user} = useContext(AuthContext);

  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    const data = new Map();
    firestore()
      .collection('Users/' + user.uid + '/Appointments')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const items = doc.data();
          for (const key in items) {
            data.set(items[key]['date'], items[key]);
          }
        });
      })
      .then(() => {
        setAppointments(new Map([...data.entries()].reverse()));
      });
  }, []);
  return (
    <Tab.Navigator
      style={styles.container}
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: COLORS.clr10,
        tabBarActiveTintColor: COLORS.clr60,
        // tabBarInactiveTintColor: COLORS.clr10,
        tabBarStyle: styles.tab_container,
        tabBarLabelStyle: styles.tab_text,
        tabBarPressOpacity: 0.5,
      })}>
      <Tab.Screen
        name="Active"
        children={() => <ActiveAppointments appointments={appointments} />}
      />
      <Tab.Screen
        name="Canceled"
        children={() => <CanceledAppointments appointments={appointments} />}
      />
      <Tab.Screen
        name="Past"
        children={() => <PastAppointments appointments={appointments} />}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    minHeight: 130,
    justifyContent: 'center',
  },
  card_button: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  tab_container: {
    backgroundColor: COLORS.clr10,
  },
  tab_text: {
    fontSize: 18,
    fontWeight: 600,
  },
  container: {
    marginBottom: 100,
  },
});
export default AppointmentScreen;
