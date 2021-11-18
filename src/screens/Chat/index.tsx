import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import styled from "styled-components/native";
import UserCard from "./UserCard";
import Tooltip from "./Tooltip";
import TimerHeader from "./TimerHeader";

const ChatContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TopSection = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
`;

const TopSectionLabelZone = styled.View`
  flex: 2;
  justify-content: center;
`;

const GeneralLabel = styled.Text`
  font-weight: 600;
  width: 65%;
  font-size: 20px;
`;

const TopSectionTimerZone = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Timer = styled.View`
  padding: 10px 20px;
  border-radius: 50px;
  align-items: center;
  background-color: #f6f6f6;
`;

const TimeLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #9e9db5;
`;

const TimeText = styled.Text`
  margin-top: 5px;
  font-weight: 800;
  font-size: 18px;
  color: #5073cd;
`;

const MiddleSection = styled.View`
  flex: 4;
  padding: 10px;
`;

const UserCardList = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
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
    <ChatContainer>
      <TopSection>
        {/* TODO: change Question Header */}
        <TimerHeader remainSeconds={remainSec} />
      </TopSection>
      <MiddleSection>
        <UserCardList>
          <UserCard />
          <UserCard voiceOn={true} />
          <UserCard />
          <UserCard />
        </UserCardList>
      </MiddleSection>
      <BottomSection>
        {/* TODO: change Voting Submit button */}
        <Tooltip />
      </BottomSection>
    </ChatContainer>
  );
};

export default Chat;
