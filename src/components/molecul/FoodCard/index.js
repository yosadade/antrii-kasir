import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const FoodCard = ({image, name, price}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image source={image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>IDR {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 270,
    height: 280,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: 270,
    height: 180,
    backgroundColor: '#F4F4F4',
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 20,
    paddingRight: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  name: {
    fontSize: 18,
    // marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FFC700',
  },
});
