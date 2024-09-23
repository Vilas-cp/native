import {
  View,
  Text,
  TextInput,
  TextInputComponent,
  Button,
  StyleSheet
} from "react-native";
import React, { useState } from "react";

const Whetherapp = () => {
    const [city,setCity]=useState('');
    const [weather,setWeather]=useState('');
  const wheather = {
    london: "20 C,clear",
    paris: "22 C,Sunny",
    newYork: "30 C,Cloudy",
  };
  const getWeather=()=>{
    let vae=city.toLowerCase();
   //  setWeather(wheather[vae]||'no data')
  }
  
  
  
  return (
    <View>
      <Text  style={aditya.adi}>Whetherapp</Text>
      <TextInput placeholder="Enter city" value={city} onChangeText={setCity}/>
        
      <Button title="get whether" onPress={getWeather}/>
      {weather?<Text>{weather}</Text>:null}
    </View>
  );
};
const aditya=StyleSheet.create({
    adi:{
        color:'red'
    }
})

export default Whetherapp;
