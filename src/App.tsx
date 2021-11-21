import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "./screens/Chat";
import Feedback from "./screens/Feedback";
import History from "./screens/History";
import Home from "./screens/Home";
import Matching from "./screens/Matching";
import MyPage from "./screens/MyPage";

export type RootStackParamList = {
  Home: undefined;
  Matching: undefined;
  Chat: undefined;
  Feedback: undefined;
  History: undefined;
  MyPage: undefined;
};

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
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="MyPage" component={MyPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaViewContainer>
  );
}
