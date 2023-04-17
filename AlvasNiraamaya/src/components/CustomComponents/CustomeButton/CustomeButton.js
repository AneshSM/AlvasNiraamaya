import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import CustomText from '../../CustomText/CustomText';

const CustomeButton = ({
  onPress,
  text,
  type = 'Primary',
  bgColor,
  fgColor,
  brdr,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor, borderWidth: 1} : {},
      ]}
      name={text}>
      <CustomText
        factor={22}
        style={{
          ...styles.text,
          ...styles[`text_${type}`],
          ...(fgColor ? {color: fgColor} : {}),
        }}>
        {text}
      </CustomText>
    </Pressable>
  );
};

export default CustomeButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },

  container_Primary: {
    backgroundColor: COLORS.clr10,
  },
  container_Secondary: {
    backgroundColor: COLORS.clr60,
    borderWidth: 1,
  },
  container_Tertiary: {},
  text: {
    color: COLORS.clr60,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_Tertiary: {
    color: 'grey',
  },
  text_Secondary: {
    color: 'grey',
  },
  container_main: {
    padding: 30,
    backgroundColor: COLORS.bgclr,
    borderWidth: 1,
  },
  text_main: {
    color: COLORS.clr10,
  },
});
