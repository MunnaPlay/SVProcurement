import { View, Text,TextInput, Dimensions, TouchableOpacity  } from 'react-native'
import React,{useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const {height, width} = Dimensions.get('screen');
const Transfer = ({navigation}) => {
  const [isScanL1, setIsScanL1] = useState(false);
  const [scanDataL1, setScanDataL1] = useState(null);

  const onSuccess=async(e)=>{
    setIsScanL1(false)
    if(e.data.charAt(0)!=9 || e.data.charAt(0)!='9')
    {
      alert('Error, Not L9 Scanner')
    }
    else
    {
      setScanDataL1(e);
      alert('QR Code Scan')
    }
    
  }

  return (
    <View style={{flex:1}}>
      <View style={{padding:20,alignItems:'center',margin:20,backgroundColor:'white'}}>
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5}}
          placeholder={'Truck Number'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Driver Mobile'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Builty/PO Number'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Origin Location'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Destination Location'}
        />
        {
          isScanL1==false && scanDataL1==null ?
          (
            <TouchableOpacity onPress={() => setIsScanL1(true)} style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10,padding:15}}>
              <Text>Scan Truck QR Code</Text>
            </TouchableOpacity>
          ) : 
          isScanL1==true && scanDataL1==null ?
          (
            <View style={{padding:10}}>
              <Text style={{textAlign:'center'}}>Capturing...</Text>
              <QRCodeScanner
                containerStyle={{alignContent:'center'}}
                cameraStyle={{height:1,width:1}}
                onRead={(e) => onSuccess(e)}
                flashMode={RNCamera.Constants.FlashMode.torch}
              />
            </View>
          ) : 
          (
            <TouchableOpacity style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10,padding:15}}>
              <Text>{scanDataL1.data}</Text>
            </TouchableOpacity>
          )
        }
        <TouchableOpacity onPress={() => navigation.navigate('L3L2Scanner')} style={{backgroundColor:'#F4A120',width:width/1.3,borderRadius:5,paddingLeft:10,marginTop:15}}>
          <Text style={{textAlign:'center',padding:12,fontSize:16,fontWeight:'600',color:'#FFF'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Transfer