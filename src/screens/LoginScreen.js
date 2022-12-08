import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Logo} from '../components/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '../components/elements';

const {height, width} = Dimensions.get('screen');
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);

  const checkLogin = async() => {
    setLoader(true)
    if (userName == undefined || password == undefined) {
      alert('All Fields are mandatory');
    } else if (userName == '' || password == '') {
      alert('All Fields are mandatory');
    } else {
      if (userName == 'admin' && password == 'admin') {
        await AsyncStorage.setItem('isUser','true');
        navigation.navigate('DrawerNavigation',{screen:'MainScreen'});
      }
      else
      {
        alert('Wrong User Detail, Please try again');
      }
    }
    setLoader(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <Image
          source={Logo}
          style={{height: 100, width: 220, alignSelf: 'center'}}
        />
      </View>
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: 'white',
          width: width / 1.3,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
          Login Here
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'gray',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width / 1.5,
            backgroundColor: 'white',
            marginTop: 20,
            alignSelf: 'center',
            borderBottomColor:'gray',
            borderBottomWidth:1
          }}>
          <EvilIcons name="user" size={28} style={{marginLeft: 5}} />
          <TextInput
            onChangeText={text => setUserName(text)}
            placeholder="User Name"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width / 1.5,
            backgroundColor: 'white',
            marginTop: 10,
            alignSelf: 'center',
            borderBottomColor:'gray',
            borderBottomWidth:1
          }}>
          <EvilIcons name="lock" size={28} style={{marginLeft: 5}} />
          <TextInput
            onChangeText={text => setPassword(text)}
            secureTextEntry
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          onPress={() => checkLogin()}
          style={{
            width: width / 1.5,
            backgroundColor: '#F4A120',
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 30,
            padding: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              color: 'white',
            }}>
            Login Here
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 14,
          fontWeight: '500',
        }}>
        Unable to Access your Account ? Click Here to Forgot password{' '}
      </Text>
      <Loader isVisible={loader} />
    </View>
  );
};

export default LoginScreen;
