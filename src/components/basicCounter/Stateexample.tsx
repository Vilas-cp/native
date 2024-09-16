import { View, Text, Pressable, Button } from 'react-native'
import React, { useState } from 'react'


const Stateexample = () => {
    const [count,setCount]=useState(0);
  return (
    <View>
      <Text>Stateexample {count}</Text>
      <Button title='touch' onPress={()=>setCount(count+1)}/>
      
    </View>
  )
}

export default Stateexample