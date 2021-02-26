import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconList} from '../../assets';
import {Button, Gap} from '../../components';
import DashboardCard from '../../components/molecul/DashboardCard';

const Dashboard = ({navigation}) => {
  const [btnSelect, setBtnSelect] = useState(false);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.tabSection}>
          <Button
            type="icon"
            backgroundColor="#1D74C7"
            onPress={() => navigation.toggleDrawer()}
          />
          <Gap width={20} />
          <Button title="Penjualan" backgroundColor="#1D74C7" color="#F8F8F7" />
        </View>
      </View>
      <View style={styles.containerSell}>
        <View style={styles.sell}>
          <Text style={styles.titleSell}>Penjualan</Text>
          <IconList />
          <Text style={styles.dateSell}>
            26 Februari 2021 (% dibandingkan kemarin)
          </Text>
        </View>
        <View style={styles.btn}>
          <Button
            title="HARI"
            backgroundColor="#1D74C7"
            color="#F8F8F7"
            borderRadius={0}
            borderWidth={0.5}
          />
          <Button title="MINGGU" borderRadius={0} borderWidth={0.5} />
          <Button title="BULAN" borderRadius={0} borderWidth={0.5} />
        </View>
      </View>
      <DashboardCard />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  containerSell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSell: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  dateSell: {
    fontSize: 18,
    marginLeft: 6,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  btn: {
    flexDirection: 'row',
  },
});
