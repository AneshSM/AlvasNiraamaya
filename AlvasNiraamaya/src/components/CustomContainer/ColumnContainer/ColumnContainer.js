import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants';

const {width, height} = Dimensions.get('window');
const CONTAINER_WIDTH = width;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    backgroundColor: COLORS.bgclr,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const ColumnContainer = props => {
  return (
    <View style={[styles.container, {height: height}, props.style]}>
      {props.children}
    </View>
  );
};

export default ColumnContainer;
