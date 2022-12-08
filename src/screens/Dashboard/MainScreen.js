import { View, Text, FlatList, AppRegistry } from 'react-native'
import React from 'react'
import {DashboardCard} from '../../components/elements';

const data=[
  {
    id:1,
    title:'Total Dispatch',
    number:765
  },
  {
    id:2,
    title:'Total Sale',
    number:136
  },
  {
    id:3,
    title:'Total Receive',
    number:640
  },
  {
    id:4,
    title:'Total Scanned',
    number:495
  }
]
const MainScreen = () => {
  return (
    <View style={{padding:10}}>
      <FlatList 
        data={data}
        renderItem={(items) => <DashboardCard data={items.item} />}
        numColumns={2}
      />
    </View>
  )
}

export default MainScreen