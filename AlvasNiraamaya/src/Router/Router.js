import {NavigationContainer} from '@react-navigation/native';

//Firebase Auth
import auth from '@react-native-firebase/auth';

// stack
import {AppStack, AuthStack} from '../stack';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthProvider';

const Router = () => {
  const {user, setUser} = useContext(AuthContext);
  console.log(user);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);

      if (initializing) {
        setInitializing(false);
      }
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing, setUser]);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
