import {createStackNavigator} from '@react-navigation/stack';
import {DeskTopScreen} from '../../screens';
import {Navigation} from '../../global';
// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider';
const Stack = createStackNavigator();

const AppStack = () => {
  const {user, setUserform} = useContext(AuthContext);
  const usersRef = firestore().collection('Users').doc(user.uid);

  usersRef.get().then(docSnapshot => {
    if (docSnapshot.exists) {
      // usersRef.onSnapshot((doc) => {
      //   // do stuff with the data
      // });
      setUserform(true);
    } else {
      // usersRef.set({...}) // create the document
    }
  });
  return <Navigation />;
};

export default AppStack;
