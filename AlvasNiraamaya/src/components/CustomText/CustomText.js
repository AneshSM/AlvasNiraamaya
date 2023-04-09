/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';

const CustomText = props => {
  const getFontSize = () => {
    const {width, height} = Dimensions.get('window');
    const factor = props.factor !== undefined ? props.factor : 25; // Adjust this as needed
    return Math.min(width, height) / factor;
  };
  const fontSize = getFontSize();

  return <Text style={{...props.style, fontSize}}>{props.children}</Text>;
};

export default CustomText;
