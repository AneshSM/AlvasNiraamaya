import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import React from 'react';
import {CardComponent} from '../../components';
import bgIMG from '../../assets/niramaya.png';

const HomeScreen = () => {
  return (
    <View style={homeStyle.root}>
      <ImageBackground
        source={bgIMG}
        resizeMode="cover"
        style={homeStyle.bgImg}>
        <CardComponent>
          <Text style={homeStyle.fontStyles}>Departments</Text>
        </CardComponent>
        <CardComponent>
          <Text style={homeStyle.fontStyles}>Doctors</Text>
        </CardComponent>
        <CardComponent>
          <Text style={homeStyle.fontStyles}>Products</Text>
        </CardComponent>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const homeStyle = StyleSheet.create({
  root: {
    borderWidth: 1,
    flexGrow: 1,
  },
  bgImg: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
  fontStyles: {
    fontSize: 20,
  },
});
