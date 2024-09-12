import { View, Text, Button } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import ButtonComp from '../components/Button'


const Index = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <ButtonComp/>
      <Greet/>
    </View>
  )
}

export default Index