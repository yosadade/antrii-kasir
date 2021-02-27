import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconAntrii1} from '../../assets';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('SignIn');
  }, 3000);
  return (
    <View style={styles.page}>
      <IconAntrii1 />
      {/* <Text style={styles.title}>Kasir</Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 100,
    color: '#FFFFFF',
  },
});
