import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Food, Splash, Dashboard, SignIn} from '../pages';
import {CustomDrawerContent} from '../components';
import {IconList} from '../assets';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: '#F8F8F7',
        activeBackgroundColor: '#1D74C7',
        labelStyle: {
          fontSize: 13,
        },
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      drawerStyle={{
        paddingVertical: 16,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => <IconList />,
        }}
      />
      <Drawer.Screen
        name="Food"
        component={Food}
        options={{
          drawerIcon: () => <IconList />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Router;
