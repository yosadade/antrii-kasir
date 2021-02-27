import React from 'react';
import {StyleSheet, View, Text, TextInput as RNTextInput} from 'react-native';

const TextInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'Poppins-Light',
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 20,
    width: 450,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8D92A3',
  },
});
