import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AppointmentScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, ROUTES} from '../constants';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarActiveTintColor: COLORS.clr30,
        tabBarIcon: ({color, size, focused}) => {
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

          return <Icon name={iconName} size={size} color={color}></Icon>;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;
