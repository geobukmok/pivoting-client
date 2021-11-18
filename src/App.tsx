import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Matching from "./screens/Matching";
import Chat from "./screens/Chat";
import Feedback from "./screens/Feedback";
import History from "./screens/History";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Vote from "./screens/Vote";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
`;

export type RootStackParamList = {
  Home: undefined;
  Matching: undefined;
  Chat: undefined;
  Vote: undefined;
  Feedback: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerShown: true,
              headerBackVisible: false,
              headerBackTitleVisible: false,
              title: "", // TODO: Chat Header Hide하는 방법찾기
            }}
          />
          <Stack.Screen
            name="Vote"
            component={Vote}
            options={{
              headerShown: true,
              headerBackVisible: false,
              headerBackTitleVisible: false,
              title: "", // TODO: Chat Header Hide하는 방법찾기
            }}
          />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaViewContainer>
  );
}
