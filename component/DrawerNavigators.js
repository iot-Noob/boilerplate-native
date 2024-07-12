import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationData } from './index';
import { NavigationContainer } from '@react-navigation/native';

const DrawerNavigators = ({ children, route, navigation, nav_cont = false }) => {
  const Drawer = createDrawerNavigator();
  
  const drawerContent = (
    <Drawer.Navigator>
      {navigationData.map((v, i) => (
        <Drawer.Screen key={i} name={v.name} component={v.component} />
      ))}
    </Drawer.Navigator>
  );

  return nav_cont ? (
    <NavigationContainer>
      {drawerContent}
    </NavigationContainer>
  ) : (
    drawerContent
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigators;
