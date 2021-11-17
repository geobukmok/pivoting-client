import React from "react";
import { Button, View, Text } from "react-native";

const History = ({ navigation }) => {
  return (
    <View>
      <Text>History</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default History;
