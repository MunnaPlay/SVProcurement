import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Harry} from '../images';

const DrawerHeader = (props) => {
  console.log(props)
  return (
    <View style={{flex:1,backgroundColor:'#E2C2C6'}}>
      <View style={{padding:20,flexDirection:'row',alignItems:'center',paddingBottom:10}}>
        <Image source={Harry} style={{height:75,width:75,borderRadius:50}} />
        <View style={{padding:10}}>
          <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>
            Customer ID 
          </Text>
          <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>
            32577645 
          </Text>
        </View>
      </View>
      <View style={{marginLeft:25}}>
        <Text style={{fontSize:16,fontWeight:'600',color:'black'}}>
          Harjinder Singh
        </Text>
        <Text style={{fontSize:16,fontWeight:'600',color:'black'}}>
          harjinder1991@gmail.com
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'white',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      <View style={{paddingLeft:20}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainScreen')} style={{padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('ProductScanning')} style={{marginTop:10,padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Product Scanning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('ShrinkScanning')} style={{marginTop:10,padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Shrink Scanning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Dispatch')} style={{marginTop:10,padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Dispatch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Receive')} style={{marginTop:10,padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Sales')} style={{marginTop:10,padding:8}}>
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Sales
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerHeader