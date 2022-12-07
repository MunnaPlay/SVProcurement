import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import {LOGO} from '../components/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('screen');
const Auth = ({navigation}) => {
  useEffect(() =>{
    AsyncStorage.getItem('isUser').then((response) =>{
      if(response=='true')
      {
        navigation.navigate('DrawerNavigation',{screen:'MainScreen'});
      }
    })
  },[])
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={LOGO} style={{height:width/1.5,width:width/1.5}} />
      <Text style={{fontSize:26,color:'black',fontWeight:'500',textAlign:'center'}}>
        Supply Valid
      </Text>
      <Text style={{fontSize:26,color:'black',fontWeight:'500',textAlign:'center'}}>
        Procurement
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor:'#9046CF',marginTop:100,width:width/2.5,padding:10,borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
        <Text style={{textAlign:'center',color:'#FFF3F0',fontWeight:'500',fontSize:18}}>Starts Here</Text>
        <AntDesign name='arrowright' style={{fontSize:20,marginTop:3,marginLeft:5,color:'white'}} />
      </TouchableOpacity>
    </View>
  )
}

export default Auth