import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  BookingScreen,
  ConfirmEmailScreen,
  DepartmentScreen,
  DeskTopScreen,
  DoctorScreenList,
  ForgotPassword,
  NewPasswordScreen,
  SigninScreen,
  SignupScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="DeskTop" component={DeskTopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
