import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DepartmentScreen,
  DeskTopScreen,
  DoctorScreenList,
  HomeScreen,
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
    </Stack.Navigator>
  );
};

export default Navigation;
