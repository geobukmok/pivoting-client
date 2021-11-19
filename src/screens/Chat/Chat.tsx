import { BottomSection, Container, MiddleSection, TopSection } from "./style";
import React, { useEffect, useState } from "react";

import { Button } from "react-native";
import ChatUserCardList from "./ChatUserCardList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import TimerHeader from "./TimerHeader";
import TooltipFooter from "./TooltipFooter";

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
