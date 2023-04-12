import {createStackNavigator} from '@react-navigation/stack';
import {
  ConfirmEmailScreen,
  ForgotPassword,
  NewPasswordScreen,
  SigninScreen,
  SignupScreen,
} from '../../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
