import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const Stateexmp = () => {
  const [hi, setHi] = useState(true);
  return (
    <View>
      <Text>{hi?"on":"off"}</Text>
      <Button title="hi" onPress={()=>setHi(!hi)} />
    </View>
  );
};

export default Stateexmp;
