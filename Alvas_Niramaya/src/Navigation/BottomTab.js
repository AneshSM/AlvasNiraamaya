import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AppointmentScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, ROUTES} from '../constants';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.clr30,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }

          return <Icon name={iconName} size={22} color={color}></Icon>;
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
