import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AppointmentScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.clr30,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

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
