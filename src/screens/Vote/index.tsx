import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import styled from "styled-components/native";
import VotingHeader from "./VotingHeader";
import VotingFooter from "./VotingFooter";
import VoteUserCardList from "./VoteUserCardList";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TopSection = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
`;

const MiddleSection = styled.View`
  flex: 4;
  padding: 10px;
`;

const BottomSection = styled.View`
  flex: 1;
  padding-right: 20px;
  padding-left: 20px;
`;

const Chat: React.FC<NativeStackScreenProps<RootStackParamList, "Vote">> = ({
  navigation,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.goBack()} title="방 나가기" />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <TopSection>
        <VotingHeader />
      </TopSection>
      <MiddleSection>
        <VoteUserCardList />
      </MiddleSection>
      <BottomSection>
        <VotingFooter selected={true} onSkip={() => {}} onSubmit={() => {}} />
      </BottomSection>
    </Container>
  );
};

export default Chat;
