import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {IconMenu} from '../../../assets';

const Button = ({
  onPress,
  type,
  title,
  backgroundColor,
  color,
  borderRadius = 8,
  borderWidth = 0,
}) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container(backgroundColor, borderRadius, borderWidth)}
        onPress={onPress}>
        <IconMenu />
      </TouchableOpacity>
    );
  }
  if (type === 'sell') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container(backgroundColor, borderRadius, borderWidth)}
        onPress={onPress}>
        <Text style={styles.title(color)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(backgroundColor, borderRadius, borderWidth)}
      onPress={onPress}>
      <Text style={styles.title(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, borderRadius, borderWidth) => ({
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 60,
    // height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderColor: '#8D92A3',
    overflow: 'hidden',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.5,
    // elevation: 4,
  }),
  title: (color) => ({
    color: color,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  }),
});
