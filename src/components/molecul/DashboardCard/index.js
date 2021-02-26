import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ItemValue from '../ItemValue';

const DashboardCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <ItemValue label="Total Penjualan" value="0 %" />
          <Text style={styles.price}>IDR 0</Text>
        </View>
        <View style={styles.card}>
          <ItemValue label="Penjualan Kotor" value="0 %" />
          <Text style={styles.price}>IDR 0</Text>
        </View>
        <View style={styles.card}>
          <ItemValue label="Laba Kotor" value="0 %" />
          <Text style={styles.price}>IDR 0</Text>
        </View>
        <View style={styles.card}>
          <ItemValue label="Penerimaan" value="0 %" />
          <Text style={styles.price}>IDR 0</Text>
        </View>
        <View style={styles.card}>
          <ItemValue label="Transaksi" value="0 %" />
          <Text style={styles.price}>IDR 0</Text>
        </View>
      </View>
      <View style={styles.cardProduct}>
        <ItemValue label="Product" value="0 %" />
        <Text style={styles.price}>0</Text>
      </View>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  card: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '18%',
    backgroundColor: '#F6FCFD',
    justifyContent: 'center',
  },
  cardProduct: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#F6FCFD',
    justifyContent: 'center',
  },
  price: {
    fontSize: 20,
    marginTop: 8,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
  },
});
