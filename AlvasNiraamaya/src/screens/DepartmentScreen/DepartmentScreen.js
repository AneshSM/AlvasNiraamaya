/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CustomText, DepartmentCard} from '../../components';
import {COLORS} from '../../constants';

const DATA = [
  {
    id: '1',
    // profilePicture: require('./images/profile1.jpg'),
    name: 'Item 1',
    desc: 'desc',
  },
  {
    id: '2',
    // profilePicture: require('./images/profile2.jpg'),
    name: 'Item 2',
    desc: 'desc',
  },
  {
    id: '3',
    // profilePicture: require('./images/profile3.jpg'),
    name: 'Item 3',
    desc: 'desc',
  },
  // Add more items as needed
];

const Card = ({image, name, desc}) => {
  return (
    <DepartmentCard
      // imageSource={require('./images/example.jpg')}
      title={name}
      description={desc}
    />
  );
};

const DepartmentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Department</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {DATA.map(item => (
          <Card
            key={item.id}
            image={item.profilePicture}
            name={item.name}
            desc={item.desc}
          />
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
  item: {
    height: 200,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  profilePictureContainer: {
    height: 140,
    width: 140,
    borderRadius: 100,
    overflow: 'hidden',
    margin: 20,
    borderWidth: 1,
  },
  profilePicture: {
    height: '100%',
    width: '100%',
  },
  detailcontainer: {
    flex: 1,
    marginHorizontal: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.clr30,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepartmentScreen;
