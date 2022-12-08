import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MainScreen, L1Scanning, L2Scanning, Dispatch, Transfer, Receive, Sales, Procurement} from '../screens/Dashboard';
import {DrawerHeader} from '../components/elements';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />} initialRouteName="MainScreen">
      <Drawer.Screen name="MainScreen" options={{title:'Dashboard'}} component={MainScreen} />
      <Drawer.Screen name="L1Scanning" options={{title:'Level-1 Scanning'}} component={L1Scanning} />
      <Drawer.Screen name="L2Scanning" options={{title:'Level-2 Scanning'}} component={L2Scanning} />
      <Drawer.Screen name="Dispatch" options={{title:'Dispatch'}} component={Dispatch} />
      <Drawer.Screen name="Transfer" options={{title:'Transfer'}} component={Transfer} />
      <Drawer.Screen name="Receive" options={{title:'Receive'}} component={Receive} />
      <Drawer.Screen name="Sales" options={{title:'Sales'}} component={Sales} />
      <Drawer.Screen name="Procurement" options={{title:'Procurement'}} component={Procurement} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation