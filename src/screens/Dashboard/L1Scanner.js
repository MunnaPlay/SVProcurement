import { View, Text, TextInput, Dimensions,TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('screen');

const L1Scanner = () => {
  const [isScanL1, setIsScanL1] = useState(false);
  const [scanDataL1, setScanDataL1] = useState([]);

  const onSuccess=async(e)=>{
    setIsScanL1(false)
    const filter = scanDataL1.filter((data) => data.data==e.data);
    if(filter.length==0)
    {
      if(e.data.charAt(0)!=1 || e.data.charAt(0)!='1')
      {
        alert('Error, Not L1 Scanner')
      }
      else
      {
        setScanDataL1([...scanDataL1,e]);
        alert('QR Code Scan')
      }
    }
    else
    {
      alert('Error, Duplicate')
    }
  }

  const ShowData=()=>{
    console.log(scanDataL1[0].data)
  }

  return (
    <View style={{flex:1}}>
      {
        isScanL1==true ?
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
        (<View style={{padding:20,alignItems:'center',margin:20,backgroundColor:'white'}}>
        <TouchableOpacity onPress={() => setIsScanL1(true)} style={{backgroundColor:'#F4A120',width:width/1.3,borderRadius:5,paddingLeft:10}}>
          <Text style={{textAlign:'center',padding:5,fontSize:16,fontWeight:'600',color:'#FFF'}}>
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>
      )
      }
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',padding:5,backgroundColor:'#F4A120'}}>
        <Text style={{flex:1,textAlign:'center'}}>ID</Text>
        <Text style={{flex:1,textAlign:'center'}}>QR No</Text>
        <Text style={{flex:1,textAlign:'center'}}>Delete</Text>
      </View>
      <FlatList 
        data={scanDataL1}
        renderItem={(items) => (<View style={{flexDirection:'row',padding:5}}>
            <Text style={{flex:1,textAlign:'center'}}>{items.index + 1}</Text>
            <Text style={{flex:1,textAlign:'center'}}>{items.item.data}</Text>
            <AntDesign style={{flex:1,textAlign:'center'}} name='delete' size={18} />
          </View>)}
      />
      </View>
      <TouchableOpacity onPress={() => ShowData()} style={{backgroundColor:'#F4A120',width:width/1.3,borderRadius:5,paddingLeft:10,margin:15,alignSelf:'center'}}>
        <Text style={{textAlign:'center',padding:12,fontSize:16,fontWeight:'600',color:'#FFF'}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default L1Scanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width:width/1.3,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});