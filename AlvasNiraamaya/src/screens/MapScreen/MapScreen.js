import React, {useRef, useState} from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import {CustomText, CustomeButton} from '../../components';

import MapView, {Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = height * 0.4;
const MAP_API_KEY = 'AIzaSyB3K2506bgDNpSg9AqC8SxkuXy3B3u5lNo';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 110,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F5FCFF',
    width: width,
  },
  directionsContainer: {
    height: height / 3.5,
    width: width - 20,
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
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const GoogleMapsCard = () => {
  const hospitalLocation = {
    latitude: 13.062136861175764,
    longitude: 74.97781986370683,
    latitudeDelta: 0.0005072113930033595,
    longitudeDelta: 0.0004422292113304138,
  };
  const [region, setRegion] = useState({
    latitude: 13.062136861175764,
    longitude: 74.97781986370683,
    latitudeDelta: 0.0005072113930033595,
    longitudeDelta: 0.0004422292113304138,
  });
  const mapRef = useRef(null);
  const goTodestination = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(hospitalLocation, 3 * 1000);
  };
  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={region}
        onRegionChangeComplete={data => setRegion(data)}>
        <Marker coordinate={region} title="Alva's Niraamaya Hospital" />
      </MapView>
      <View style={styles.directionsContainer}>
        <CustomeButton
          type="Secondary"
          onPress={() => goTodestination()}
          text={'Go to Hospital'}
        />
        {/* <CustomeButton
          type="book"
          onPress={() => goTodestination()}
          text={'From: Mangalore'}
        />
        <CustomeButton
          type="book"
          onPress={() => goTodestination()}
          text={'From: Moodabidre'}
        /> */}
      </View>
    </View>
  );
};

const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <GoogleMapsCard />
    </View>
  );
};

export default MapScreen;
