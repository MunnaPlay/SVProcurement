import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('screen');
const DashboardCard = ({data}) => {
  return (
    <View style={{flex:1,backgroundColor:'white',margin:5,padding:10,borderRadius:5,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,paddingTop:20,paddingBottom:20}}>
      <Text style={{textAlign:'center',fontSize:16,fontWeight:'500'}}>{data.title}</Text>
      <Text style={{textAlign:'center',fontSize:15,fontWeight:'400',marginTop:10}}>{data.number}</Text>
    </View>
  )
}

export default DashboardCard