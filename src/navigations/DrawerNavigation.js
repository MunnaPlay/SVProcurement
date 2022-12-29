import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerHeader} from '../components/elements';
import TabRoutes from './TabRouts';
import {L1Scanner, L2L2Scanner, L2L1Scanner, L3L2Scanner} from '../screens/Dashboard';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen name="TabRoutes" options={{headerShown:false}} component={TabRoutes} />
      <Drawer.Screen name='L1Scanner' options={{headerShown:true,title:'Scan QR'}} component={L1Scanner} />
      <Drawer.Screen name='L2L2Scanner' options={{headerShown:true,title:'Scan QR(L2)'}} component={L2L2Scanner} />
      <Drawer.Screen name='L2L1Scanner' options={{headerShown:true,title:'Scan QR(L1)'}} component={L2L1Scanner} />
      <Drawer.Screen name='L3L2Scanner' options={{headerShown:true,title:'Scan QR(L2)'}} component={L3L2Scanner} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation