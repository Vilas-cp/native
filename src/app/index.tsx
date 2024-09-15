import { View, Text, Button } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import ButtonComp from '../components/Button'
import Preeablecomp from '../components/Preeablecomp'
import Imagestest from '../components/Imagestest'
import Dynamic from '../components/Dynamic'
import Inlinestyle from '../components/Inlinestyle'
import Externalstylesheet from '../components/Externalstylesheet'


const Index = () => {
  return (
    <View>
      <Text>Hello world</Text>
        <Dynamic/>
        <Inlinestyle/>
        <Externalstylesheet/>
    </View>
  )
}

export default Index