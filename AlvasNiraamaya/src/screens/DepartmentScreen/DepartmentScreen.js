/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {COLORS} from '../../constants';

const DATA = [
  {
    id: '1',
    // image: require('./images/image1.jpg'),
    heading: 'Card 1 Heading',
    description: 'Card 1 Description',
  },
  {
    id: '2',
    // image: require('./images/image2.jpg'),
    heading: 'Card 2 Heading',
    description: 'Card 2 Description',
  },
  {
    id: '3',
    // image: require('./images/image3.jpg'),
    heading: 'Card 3 Heading',
    description: 'Card 3 Description',
  },
  {
    id: '3',
    // image: require('./images/image3.jpg'),
    heading: 'Card 3 Heading',
    description: 'Card 3 Description',
  },
  {
    id: '3',
    // image: require('./images/image3.jpg'),
    heading: 'Card 3 Heading',
    description: 'Card 3 Description',
  },
  {
    id: '3',
    // image: require('./images/image3.jpg'),
    heading: 'Card 3 Heading',
    description: 'Card 3 Description',
  },
  // Add more cards as needed
];

const DepartmentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Main Header</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {DATA.map(item => (
          <View style={styles.card} key={item.id}>
            <Image style={styles.image} source={null} />
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: COLORS.clr10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

export default DepartmentScreen;
