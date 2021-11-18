import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import styled from "styled-components/native";
import UserCard from "./UserCard";
import Tooltip from "./Tooltip";

const ChatContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TopSection = styled.View`
  flex-direction: row;
  flex: 1;
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

const Chat: React.FC<NativeStackScreenProps<RootStackParamList, "Chat">> = ({
  navigation,
}) => {
  const [remainSec, setRemainSec] = useState<number>(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.goBack()} title="방 나가기" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const duration = 1000 * 60 * 5;
    const endTime = new Date().getTime() + duration;
    let id;
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

  const minute = Math.floor(remainSec / 60);
  const seconds = remainSec % 60;
  return (
    <ChatContainer>
      <TopSection>
        {/* TODO: 조건적으로 타이머, 투표 타이머 */}
        <TopSectionLabelZone>
          <GeneralLabel>자유롭게 이야기를 나누어 보세요.</GeneralLabel>
        </TopSectionLabelZone>
        <TopSectionTimerZone>
          <Timer>
            <TimeLabel>남은대화시간</TimeLabel>
            <TimeText>
              {minute}:{seconds / 10 > 0 ? seconds : "0" + seconds}
            </TimeText>
          </Timer>
        </TopSectionTimerZone>
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
        <Tooltip />
      </BottomSection>
    </ChatContainer>
  );
};

export default Chat;
