import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, FoodCard, Gap, TextInput, FoodOrder} from '../../components';
import {IL1} from '../../assets';

const Food = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.foodContainer}>
        <View style={styles.header}>
          <View style={styles.tabSection}>
            <Button
              type="icon"
              backgroundColor="#1D74C7"
              onPress={() => navigation.toggleDrawer()}
            />
            <Gap width={20} />
            <Button title="Paket" backgroundColor="#1D74C7" color="#F8F8F7" />
            <Gap width={10} />
            <Button title="Food" backgroundColor="#1D74C7" color="#F8F8F7" />
            <Gap width={10} />
            <Button title="Drink" backgroundColor="#1D74C7" color="#F8F8F7" />
          </View>
        </View>
        <Gap height={20} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.foodCContentCOntainer}>
          <View style={styles.content}>
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
          </View>
          <View style={styles.content}>
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
          </View>
          <View style={styles.content}>
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
            <FoodCard name="Cherry Healthy" price="35.000" image={IL1} />
          </View>
        </ScrollView>
      </View>
      <FoodOrder />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 0,
    borderRadius: 30,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
  },
  foodContainer: {
    flex: 2.5,
  },
  header: {
    backgroundColor: '#1D74C7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  tabSection: {
    flexDirection: 'row',
  },
  foodCContentCOntainer: {
    paddingHorizontal: 20,
  },
  content: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
