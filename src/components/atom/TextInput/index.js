import React from 'react';
import {StyleSheet, View, TextInput as RNTextInput} from 'react-native';

const TextInput = () => {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.input} placeholder="Search ..." />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'red',
    fontFamily: 'Poppins-Light',
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 20,
    width: 270,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 4,
  },
});
