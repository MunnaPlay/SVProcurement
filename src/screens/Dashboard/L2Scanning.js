import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('screen');

const ShrinkScanning = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={{padding:20,alignItems:'center',margin:20,backgroundColor:'white'}}>
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'No of Item'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('L2L2Scanner')} style={{backgroundColor:'#F4A120',width:width/1.3,borderRadius:5,paddingLeft:10,marginTop:15}}>
          <Text style={{textAlign:'center',padding:12,fontSize:16,fontWeight:'600',color:'#FFF'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShrinkScanning