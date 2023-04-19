import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import {ColumnContainer, CustomText, CustomeButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../constants';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ColumnContainer style={homeStyle.container}>
      <View style={homeStyle.container}>
        <ImageBackground
          source={require('../../assets/main_background.jpg')}
          style={homeStyle.backgroundImage}
          imageStyle={{opacity: 1}}>
          <View style={homeStyle.main}>
            <View style={homeStyle.header}>
              <CustomText factor={10} style={homeStyle.title}>
                Alva's Niraamaya
              </CustomText>
            </View>
            <View style={homeStyle.navigation_action}>
              <CustomeButton
                type="main"
                style={homeStyle.button}
                onPress={() => navigation.navigate(ROUTES.APPOINTMENT)}
                text={'Appointments'}
                icon={{name: 'arrow-forward-ios', size: 30, color: 'black'}}
                factor={18}
              />
              <CustomeButton
                type="main"
                style={homeStyle.button}
                onPress={() => navigation.navigate(ROUTES.DOCTOR)}
                text={'Doctors'}
                icon={{name: 'arrow-forward-ios', size: 30, color: 'black'}}
                factor={18}
              />
              <CustomeButton
                type="main"
                style={homeStyle.button}
                onPress={() => navigation.navigate(ROUTES.DEPARTMENT)}
                text={'Departments'}
                icon={{name: 'arrow-forward-ios', size: 30, color: 'black'}}
                factor={18}
              />
              <CustomeButton
                type="main"
                style={homeStyle.button}
                onPress={() => navigation.navigate(ROUTES.PRODUCT)}
                text={'Products'}
                icon={{name: 'arrow-forward-ios', size: 30, color: 'black'}}
                factor={18}
              />
            </View>
          </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
  },
  header: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.clr30,
    textShadowColor: COLORS.clr10,
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 1,
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
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90%',
    width: width * 0.95,
  },
  navigation_action: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
});
