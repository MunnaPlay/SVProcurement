import { View, Text, FlatList, AppRegistry } from 'react-native'
import React from 'react'
import {DashboardCard} from '../../components/elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

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
      <QRCodeScanner
        // onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

// export default MainScreen 
AppRegistry.registerComponent('default', () => MainScreen);