import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILMin, ILPlus} from '../../../assets';

const Counter = ({count, onPressMin, onPressPlus}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPressMin}>
        <ILMin />
      </TouchableOpacity>
      <Text style={styles.count}>{count} items</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPressPlus}>
        <ILPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#020202',
    borderWidth: 1,
  },
  count: {
    fontSize: 14,
    marginHorizontal: 10,
    color: '#8D92A3',
    fontFamily: 'Popppins-Regular',
  },
});
