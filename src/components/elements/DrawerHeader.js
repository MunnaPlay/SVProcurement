import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Harry} from '../images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerHeader = (props) => {
  console.log(props)
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
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
          borderColor: 'gray',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainScreen')} style={{padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <AntDesign name='dashboard' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('L1Scanning')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <AntDesign name='scan1' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Level-1 Scanning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('L2Scanning')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <AntDesign name='scan1' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Level-2 Scanning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Dispatch')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <MaterialCommunityIcons name='truck-fast-outline' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Dispatch Level-3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Transfer')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <MaterialCommunityIcons name='truck-cargo-container' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Transfer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Receive')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <MaterialCommunityIcons name='hand-coin-outline' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Sales')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <MaterialCommunityIcons name='point-of-sale' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Sale
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Procurement')} style={{marginTop:10,padding:8,borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'row'}}>
          <MaterialCommunityIcons name='handshake-outline' size={18} style={{marginLeft:10,marginRight:10,color:'black'}} />
          <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>
            Procurement
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerHeader