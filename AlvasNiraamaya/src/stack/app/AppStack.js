import {createStackNavigator} from '@react-navigation/stack';
import {DeskTopScreen} from '../../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeskTop" component={DeskTopScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
