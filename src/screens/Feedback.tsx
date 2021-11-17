import React from "react";
import { Button, View, Text } from "react-native";

const Feedback = ({ navigation }) => {
  return (
    <View>
      <Text>Feedback</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Feedback;
