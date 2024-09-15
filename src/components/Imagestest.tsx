import { View, Text, Image } from 'react-native'
import React from 'react'

const Imagestest = () => {
  return (
    <View>
      <Text>Imagestest</Text>
      <Image source={require("../assets/webdevelopment.jpeg")} style={{width:300,height:400}}/>
      <Image source={{uri:"https://reactjs.org/logo-og.png"}} style={{height:200,width:200}}/>
    </View>
  )
}

export default Imagestest