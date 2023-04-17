import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import CustomText from '../../CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomeButton = ({
  onPress,
  text,
  type = 'Primary',
  bgColor,
  fgColor,
  brdr,
  icon,
  factor,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: type === 'main' ? 'space-between' : 'center',
      flexDirection: 'row',
      paddingLeft: 30,
      paddingRight: 30,
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
        factor={factor ? factor : 22}
        style={{
          ...styles.text,
          ...styles[`text_${type}`],
          ...(fgColor ? {color: fgColor} : {}),
        }}>
        {text}
      </CustomText>
      {icon && <Icon name={icon.name} size={icon.size} color={icon.color} />}
    </Pressable>
  );
};

export default CustomeButton;
