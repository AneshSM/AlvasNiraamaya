import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {COLORS} from '../../../constants';

const CustomeInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  numberOfLines = 1,
  multiline = false,
}) => {
  if (multiline) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : '#e8e8e8'},
              ]}>
              <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.input, {color: 'black'}]}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
              />
            </View>
            {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>
                {error.message || 'Error'}
              </Text>
            )}
          </>
        )}
      />
    );
  }
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[styles.input, {color: 'black'}]}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomeInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
