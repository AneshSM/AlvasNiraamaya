import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Google auth
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {
  ConfirmEmailScreen,
  ForgotPassword,
  SigninScreen,
  SignupScreen,
} from '../../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '87437797407-7r3rrprtuel5ifmpg5kiph2ji20nehe2.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
