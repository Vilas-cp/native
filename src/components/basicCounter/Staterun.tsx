import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Staterun = () => {
    const [colour,SetColour]=useState("null");
    
    const color=['red','black','green','gray'];
   console.log(colour)

  return (
    <View style={{backgroundColor:`${colour}`}}>
      <Text>examp</Text>
    {color.map(key=><Text style={{backgroundColor:`${key}`, margin:20,height:50}} onPress={()=>SetColour(key)}>{key}</Text>)}

    </View>
  )
}

export default Staterun