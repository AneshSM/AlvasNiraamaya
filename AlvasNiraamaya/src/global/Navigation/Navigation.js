import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  BookingScreen,
  DepartmentScreen,
  DoctorScreenList,
  InformationScreen,
  ProductScreen,
} from '../../screens';
import {ROUTES} from '../../constants';
import BottomTab from './BottomTab';
import {UserForm} from '../../components';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAIN} component={BottomTab} />
      <Stack.Screen name={ROUTES.DEPARTMENT} component={DepartmentScreen} />
      <Stack.Screen name={ROUTES.DOCTOR} component={DoctorScreenList} />
      <Stack.Screen name={ROUTES.PRODUCT} component={ProductScreen} />
      <Stack.Screen name={ROUTES.INFORMATION} component={InformationScreen} />
      <Stack.Screen name={ROUTES.BOOKING} component={BookingScreen} />
      <Stack.Screen name={ROUTES.USER_FORM} component={UserForm} />
    </Stack.Navigator>
  );
};

export default Navigation;
