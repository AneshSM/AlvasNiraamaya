import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Card, List} from 'react-native-paper';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

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

function PastAppointments() {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Title
          title="Jane Doe"
          subtitle="Optometrist"
          left={props => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text style={styles.title}>Appointment Details</Text>
          <List.Item
            title="Doctor"
            description="Dr. Jane Doe"
            left={props => <List.Icon {...props} icon="doctor" />}
          />
          <List.Item
            title="Date"
            description="March 24, 2023"
            left={props => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Time"
            description="2:30 PM"
            left={props => <List.Icon {...props} icon="clock-outline" />}
          />
          <List.Item
            title="Location"
            description="456 Broadway"
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

function AppointmentScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: COLORS.clr10,
        tabBarActiveTintColor: COLORS.clr60,
        // tabBarInactiveTintColor: COLORS.clr10,
        tabBarStyle: styles.tab_container,
        tabBarLabelStyle: styles.tab_text,
      })}>
      <Tab.Screen name="Active" component={ActiveAppointments} />
      <Tab.Screen name="Past" component={PastAppointments} />
      <Tab.Screen name="Canceled" component={CanceledAppointments} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
  },
  tab_container: {
    backgroundColor: COLORS.clr10,
  },
  tab_text: {
    fontSize: 18,
    fontWeight: 600,
  },
});
export default AppointmentScreen;
