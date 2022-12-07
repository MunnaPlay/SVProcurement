import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MainScreen, ProductScanning, ShrinkScanning, Dispatch, Receive, Sales} from '../screens/Dashboard';
import {DrawerHeader} from '../components/elements';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />} initialRouteName="MainScreen">
      <Drawer.Screen name="MainScreen" options={{title:'Dashboard'}} component={MainScreen} />
      <Drawer.Screen name="ProductScanning" options={{title:'Product Scanning'}} component={ProductScanning} />
      <Drawer.Screen name="ShrinkScanning" options={{title:'Shrink Scanning'}} component={ShrinkScanning} />
      <Drawer.Screen name="Dispatch" options={{title:'Dispatch'}} component={Dispatch} />
      <Drawer.Screen name="Receive" options={{title:'Receive'}} component={Receive} />
      <Drawer.Screen name="Sales" options={{title:'Sales'}} component={Sales} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation