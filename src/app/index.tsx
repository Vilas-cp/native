import { View, Text, Button } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import ButtonComp from '../components/Button'
import Preeablecomp from '../components/Preeablecomp'
import Imagestest from '../components/Imagestest'


const Index = () => {
  return (
    <View>
      <Text>Hello world</Text>
  
      <Greet/>
      <Preeablecomp/>
      <Imagestest/>
    </View>
  )
}

export default Index