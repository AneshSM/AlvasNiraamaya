import {View, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {ColumnContainer, CustomText, CustomeButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ColumnContainer style={homeStyle.container}>
      <View style={homeStyle.container}>
        <ImageBackground
          source={require('../../assets/main_background.jpg')}
          style={homeStyle.backgroundImage}>
          <CustomText style={homeStyle.title}>Hospital App</CustomText>
          <CustomeButton
            type="main"
            style={homeStyle.button}
            onPress={() => navigation.navigate(ROUTES.APPOINTMENT)}
            text={'Appointments'}
          />
          <CustomeButton
            type="main"
            style={homeStyle.button}
            onPress={() => navigation.navigate(ROUTES.DOCTOR)}
            text={'Doctors'}
          />
          <CustomeButton
            type="main"
            style={homeStyle.button}
            onPress={() => navigation.navigate(ROUTES.DEPARTMENT)}
            text={'Departments'}
          />
          <CustomeButton
            type="main"
            style={homeStyle.button}
            onPress={() => navigation.navigate(ROUTES.PRODUCT)}
            text={'Products'}
          />
        </ImageBackground>
      </View>
    </ColumnContainer>
  );
};

export default HomeScreen;

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
