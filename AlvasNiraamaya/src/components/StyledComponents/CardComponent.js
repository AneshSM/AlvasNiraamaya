/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const CardComponent = props => {
  return <View style={cardStyle.container}>{props.children}</View>;
};

export default CardComponent;

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.clr60,
    borderRadius: 10,
    width: '90%',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: 30,
    borderWidth: 3,
    borderColor: COLORS.clr10,
    boxShadow: '0 2px 9px rgba(0, 0, 0, 0.85)',
  },
});
