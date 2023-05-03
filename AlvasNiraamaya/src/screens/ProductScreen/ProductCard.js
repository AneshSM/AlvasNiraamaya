import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import {COLORS} from '../../constants';

const ProductCard = ({imageURL, name, price}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageURL}} />
      <CustomText factor={20} style={styles.title}>
        {name}
      </CustomText>
      <CustomText factor={20} style={styles.price}>
        &#x20b9; {price}
      </CustomText>
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
  price: {
    marginBottom: 10,
    textAlign: 'right',
    color: COLORS.clr10,
    fontWeight: 700,
  },
});

export default ProductCard;
