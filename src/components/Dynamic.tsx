import { View, Text } from 'react-native'
import React from 'react'

interface propy{
  queen:string
  king:string
  kon:number
}

const Dynamic = ({king,queen,kon}:propy) => {
    const username="Vilas";
    const multiplyy=(a:number,b:number) =>{return a*b}
    

  return (
    <View>
      <Text>Dynamic {username}</Text>
      <Text>
        {multiplyy(2,3)}
   
      </Text>
      <Text>
        {king}*{kon}
      </Text>
    </View>
  )
}

export default Dynamic