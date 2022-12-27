import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerHeader} from '../components/elements';
import TabRoutes from './TabRouts';
import {L1Scanner} from '../screens/Dashboard';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerHeader {...props} />}>
      <Drawer.Screen name="TabRoutes" options={{headerShown:false}} component={TabRoutes} />
      <Drawer.Screen name='L1Scanner' options={{headerShown:true,title:'Scan QR'}} component={L1Scanner} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation