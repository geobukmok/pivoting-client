import React from "react";
import { Button, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Matching"
        onPress={() => navigation.navigate("Matching")}
      />
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
      <Button
        title="ChatResult"
        onPress={() => navigation.navigate("ChatResult")}
      />
      <Button
        title="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
      <Button title="History" onPress={() => navigation.navigate("History")} />
    </View>
  );
};

export default Home;
