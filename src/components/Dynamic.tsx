import { View, Text } from 'react-native'
import React from 'react'

const Dynamic = () => {
    const username="Vilas";
    const multiplyy=(a:number,b:number) =>{return a*b}
    

  return (
    <View>
      <Text>Dynamic {username}</Text>
      <Text>
        {multiplyy(2,3)}
   
      </Text>
    </View>
  )
}

export default Dynamic