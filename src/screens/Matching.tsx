import React from "react";
import { Button, View, Text } from "react-native";

const Matching = ({ navigation }) => {
  return (
    <View>
      <Text>Matching</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Matching;
