import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import styled from "styled-components/native";
import TooltipFooter from "./TooltipFooter";
import TimerHeader from "./TimerHeader";
import ChatUserCardList from "./ChatUserCardList";

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

const CHAT_DURATION_SECONDS = 60 * 5;
const CHAT_DURATION_MILLISECONDS = CHAT_DURATION_SECONDS * 1000;

const Chat: React.FC<NativeStackScreenProps<RootStackParamList, "Chat">> = ({
  navigation,
}) => {
  const [remainSec, setRemainSec] = useState<number>(CHAT_DURATION_SECONDS);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.goBack()} title="방 나가기" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const endTime = new Date().getTime() + CHAT_DURATION_MILLISECONDS;
    let id: NodeJS.Timer;
    id = setInterval(() => {
      const ms = endTime - new Date().getTime();
      const remain = Math.round(ms / 1000);
      setRemainSec(remain);
      if (remain <= 0) clearInterval(id);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Container>
      <TopSection>
        <TimerHeader remainSeconds={remainSec} />
      </TopSection>
      <MiddleSection>
        <ChatUserCardList />
      </MiddleSection>
      <BottomSection>
        <TooltipFooter />
      </BottomSection>
    </Container>
  );
};

export default Chat;
