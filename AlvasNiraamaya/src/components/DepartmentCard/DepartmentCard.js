import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CustomeButton} from '../CustomComponents';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const DepartmentCard = ({imageSource, title, description, info, doctor}) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(ROUTES.INFORMATION, {
      params: {title, info, doctor, imageSource},
    });
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <CustomeButton
        onPress={navigate}
        factor={28}
        text={'see more...'}
        type="info"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DepartmentCard;
