import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Label = ({title}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
