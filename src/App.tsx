import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Matching from "./screens/Matching";
import Chat from "./screens/Chat";
import Feedback from "./screens/Feedback";
import History from "./screens/History";
import ChatResult from "./screens/ChatResult";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
`;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaViewContainer>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Matching" component={Matching} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="ChatResult" component={ChatResult} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaViewContainer>
  );
}
