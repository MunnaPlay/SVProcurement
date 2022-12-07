import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, MainScreen} from '../screens';
import DrawerNavigation from './DrawerNavigation';
import Auth from './Auth';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name='Auth' options={{headerShown:false}} component={Auth} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name='DrawerNavigation' options={{headerShown:false}} component={DrawerNavigation} />
    </Stack.Navigator>
  )
}

export default RootNavigation