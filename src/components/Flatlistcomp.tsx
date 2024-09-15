import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Flatlistcomp = () => {

const fruits=["apple","banana","roange","cherry"]

  return (
    <View>
      <Text>Flatlist</Text>
      <FlatList data={fruits} keyExtractor={(item)=>item} renderItem={({item})=>{return <Text>{item}</Text>}}/>
    </View>
  )
}

export default Flatlistcomp