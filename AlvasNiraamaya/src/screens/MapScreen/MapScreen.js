import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {CustomText} from '../../components';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = height * 0.4;
const MAP_API_KEY = 'YOUR_API_KEY';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    width: width,
  },
  map: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    marginBottom: 10,
  },
  directionsContainer: {
    flex: 1,
    width: width,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    padding: 10,
  },
  directionsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 15,
    paddingRight: 10,
  },
  directionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 15,
  },
  directionIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  directionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
  },
});

const GoogleMapsCard = () => {
  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          showsUserLocation: true,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="My Marker"
          description="This is my marker"
        />
      </MapView> */}
    </View>
  );
};

const DirectionsCard = () => {
  return (
    <View style={styles.directionsContainer}>
      <CustomText factor={20} style={styles.directionsTitle}>
        Directions
      </CustomText>
      <View style={styles.directionCard}>
        {/* Replace 'car.png' with your own icon */}
        {/* <Image style={styles.directionIcon} source={require('./car.png')} /> */}
        <CustomText style={styles.directionText}>From: Moodabidre</CustomText>
      </View>
      <View style={styles.directionCard}>
        {/* Replace 'train.png' with your own icon */}
        {/* <Image style={styles.directionIcon} source={require('./train.png')} /> */}
        <CustomText style={styles.directionText}>From: Mangalore</CustomText>
      </View>
    </View>
  );
};

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <GoogleMapsCard />
      <DirectionsCard />
    </View>
  );
};

export default MapScreen;
