import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Preeablecomp = () => {
  return (
    <View>
   <Pressable onPress={()=>console.log('pressed')}>
    <Text style={{color:"red"}}>Press me 1</Text>
   </Pressable>

   <Pressable onPressIn={()=>console.log('clicked on press')}>
    <Text style={{color:"red"}}>Press me</Text>
   </Pressable>

   <Pressable onPressOut={()=>console.log('pressed while leaving')}>
    <Text style={{color:"red"}}>Press me</Text>
   </Pressable>

   <Pressable onLongPress={()=>console.log('pressed after 2 secs')}>
    <Text style={{color:"red"}}>Press me</Text>
   </Pressable>

    </View>
  )
}

export default Preeablecomp