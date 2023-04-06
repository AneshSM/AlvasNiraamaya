/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AppointmentScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
} from '../../screens';

import {COLORS, ROUTES} from '../../constants';
import {bottomTabStyle} from '../../styles';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarActiveTintColor: COLORS.clr60,
        tabBarInactiveTintColor: COLORS.clr10,
        tabBarStyle: style.tab_container,
        tabBarLabel: '',
        tabBarIcon: ({color, focused}) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.APPOINTMENT) {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === ROUTES.MAP) {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Icon style={style.icon} name={iconName} size={28} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({...bottomTabStyle});
export default BottomTab;
