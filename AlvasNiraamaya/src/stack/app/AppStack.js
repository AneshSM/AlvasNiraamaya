import {createStackNavigator} from '@react-navigation/stack';
import {DeskTopScreen} from '../../screens';
import {Navigation} from '../../global';

const Stack = createStackNavigator();

const AppStack = () => {
  return <Navigation />;
};

export default AppStack;
