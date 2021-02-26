import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {IconAntrii2} from '../../../assets';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.ilustration}>
        <IconAntrii2 />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  ilustration: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 26,
  },
  drawerItem: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    // borderColor: colors.border.primary,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerItem2: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    // borderColor: colors.border.primary,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 13,
    paddingLeft: '30rem',
    // fontFamily: fonts.primary[300],
  },
});
