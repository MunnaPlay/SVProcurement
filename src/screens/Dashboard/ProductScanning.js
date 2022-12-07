import { View, Text, TextInput, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('screen');
const ProductScanning = () => {
  return (
    <View style={{flex:1}}>
      <View style={{padding:20,alignItems:'center',margin:20,backgroundColor:'white'}}>
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5}}
          placeholder={'Product ID'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Product Type'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Product Name'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Lot ID'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Batch No.'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Weight'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'P_QR Code'}
        />
        <TouchableOpacity style={{backgroundColor:'#E2C2C6',width:width/1.3,borderRadius:5,paddingLeft:10,marginTop:15}}>
          <Text style={{textAlign:'center',padding:12,fontSize:16,fontWeight:'600'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductScanning