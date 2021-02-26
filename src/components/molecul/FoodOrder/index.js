/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import {IL1} from '../../../assets';
import ItemValue from '../ItemValue';
import {Gap, Label, Button} from '../../atom';
import Counter from '../Counter';

const FoodOrder = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState(35000);
  const [count, setCount] = useState(1);

  const onItemCount = () => {
    setModalVisible(!isModalVisible);
  };

  const onMin = () => {
    setCount(count >= 2 ? count - 1 : count - 0);
  };

  const onPlus = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Label title="Item Ordered" />
        <Gap height={5} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.itemOrder} onPress={onItemCount}>
            <View style={{flexDirection: 'row'}}>
              <Image source={IL1} style={styles.image} />
              <View style={styles.titleWrapper}>
                <Text style={styles.name}>Cherry Healthy</Text>
                <Text style={styles.price}>IDR {price}</Text>
              </View>
            </View>
            <View>
              <Counter count={count} onPressMin={onMin} onPressPlus={onPlus} />
              <Text style={styles.priceTotal}>IDR {price * count}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Gap backgroundColor="#F4F4F4" height={24} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Label title="Detail Transaction" />
        <Gap height={10} />
        <ItemValue label="Cherry Healthy" value="IDR 140.000" />
        <ItemValue label="Driver" value="IDR 20.000" />
        <ItemValue label="Tax 10%" value="IDR 14.000" />
        <ItemValue
          label="Total Price"
          value="IDR 174.000"
          valueColor="#1ABC9C"
        />
      </View>
      <Gap backgroundColor="#F4F4F4" height={24} />
      <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
        <Label title="Deliver to:" />
        <Gap height={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ItemValue label="Name" value="Hanidah Zakiya" />
          <ItemValue label="Table Number" value="32" />
        </ScrollView>
      </View>
      <Button title="Checkout Now" backgroundColor="#1D74C7" color="#F8F8F7" />
    </View>
  );
};

export default FoodOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  itemOrder: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  titleWrapper: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  name: {
    fontSize: 16,
    color: '#020202',
    fontFamily: 'Popppins-Regular',
  },
  price: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Popppins-Regular',
  },
  priceTotal: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Popppins-Regular',
    textAlign: 'right',
  },
});
