import { View, Text ,StyleSheet, TextComponent} from 'react-native'
import React from 'react'

const Inlinestyle = () => {
  return (
    <View>
    <View style={{backgroundColor:'black',width:100,height:250,marginTop:20}}/>
   <Text style={styles.textStyle}>Hello</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    textStyle:{
        color:'green',
        fontSize:30,
        backgroundColor:'red',
        padding:20,marginTop:32
    }
})

export default Inlinestyle