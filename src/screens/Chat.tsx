import React from "react";
import { Button, View, Text } from "react-native";

const Chat = ({ navigation }) => {
  return (
    <View>
      <Text>Chat</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Chat;
