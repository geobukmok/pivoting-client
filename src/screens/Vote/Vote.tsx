import { BottomSection, Container, MiddleSection, TopSection } from "./style";

import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../App";
import VoteUserCardList from "./VoteUserCardList";
import VotingFooter from "./VotingFooter";
import VotingHeader from "./VotingHeader";

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
