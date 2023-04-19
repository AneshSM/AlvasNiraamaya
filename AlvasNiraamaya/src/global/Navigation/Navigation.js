import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  BookingScreen,
  DepartmentScreen,
  DoctorScreenList,
  InformationScreen,
} from '../../screens';
import {ROUTES} from '../../constants';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAIN} component={BottomTab} />
      <Stack.Screen name={ROUTES.DEPARTMENT} component={DepartmentScreen} />
      <Stack.Screen name={ROUTES.DOCTOR} component={DoctorScreenList} />
      <Stack.Screen name={ROUTES.INFORMATION} component={InformationScreen} />
      <Stack.Screen name={ROUTES.BOOKING} component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
