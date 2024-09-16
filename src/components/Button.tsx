import { View, Text,Button } from 'react-native'
import React from 'react'

const ButtonComp = () => {
  return (
    <View>
      <Text>Butt</Text>
      <Button title='Learn' color='red'/>
      <Button title='tap me' onPress={()=>alert("Pressed")}></Button>

    </View>
  )
}

export default ButtonComp
