import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CustomeButton} from '../../components/CustomComponents';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const DepartmentCard = ({imageURL, title, description, info, doctor}) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(ROUTES.INFORMATION, {
      params: {title, info, doctor, imageURL},
    });
  };
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageURL}} />
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
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    objectFit: 'contain',
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
