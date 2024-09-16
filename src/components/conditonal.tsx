import { View, Text } from "react-native";
import React from "react";

const Valid = () => 
 { return <Text>Valid</Text>;}

const Invalid = () => 
  <Text>Not valid</Text>;


const Password=({isvalid}:any)=>{
    if(isvalid){
        return <Valid/>;
    }
    return <Invalid/>;
}



const Conditonal = () => {
  return (
    <View>
      <Text>conditonal</Text>
      <Password isvalid={false}/>


    </View>
  );
};

export default Conditonal;
