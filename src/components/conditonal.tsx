import { View, Text, FlatList } from "react-native";
import React from "react";

const Valid = () => {
  return <Text>Valid</Text>;
};

const Invalid = () => <Text>Not valid</Text>;

const Password = ({ isvalid }: any) => {
  if (isvalid) {
    return <Valid />;
  }
  return <Invalid />;
};

const grocery: string | ArrayLike<any> | null | undefined= ["hello","help","bye"];

const Conditonal = () => {
  return (
    <View>
      <Text>conditonal</Text>
      <Password isvalid={false} />
{grocery.length>0? <FlatList
        data={grocery}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />:<Text>No item found</Text>}
      {grocery.length>0&&(<Text>{grocery.length} items in your cart</Text>)}
     
    </View>
  );
};

export default Conditonal;
