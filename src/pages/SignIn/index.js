import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAntrii2, IconAntrii1} from '../../assets';
import {Gap, TextInput, Button} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <View>
        <IconAntrii1 />
        <Gap height={32} />
        <Text style={styles.subTitle}>Enter your email and password for </Text>
        <Text style={styles.subTitle}>sign in. Thanks </Text>
      </View>
      {/* <Text style={styles.title}>Sign In</Text> */}

      <View style={styles.inputContainer}>
        <TextInput placeholder="Username" />
        <Gap height={48} />
        <TextInput placeholder="Password" />
        <Gap height={22} />
        <TouchableOpacity>
          <Text>Lupa password? Klik disini</Text>
        </TouchableOpacity>
      </View>

      <Button title=":=Login" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 62,
    backgroundColor: '#FFFFFF',
    // paddingTop: 52,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    // marginTop: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
  inputContainer: {},
});
