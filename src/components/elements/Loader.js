import { View, Text, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('screen');
const Loader = ({isVisible}) => {
  return (
    isVisible==true ?
    (<View
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          height: height,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={'large'} />
    </View>) : (<></>)
  )
}

export default Loader