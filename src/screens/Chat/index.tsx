import React from "react";
import { Button, View, Dimensions, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import styled from "styled-components/native";
import UserCard from "./UserCard";

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
  /* TODO: Change Color Constant */
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
  padding: 20px;
  justify-content: flex-start;
`;

const TooltipLabel = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

const TooltipContainer = styled.View`
  margin-top: 10px;
  height: 80%;
  width: 95%;
  align-self: flex-end;
  border-radius: 20px;
  background-color: #f6f6f6;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const TooltipTitle = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: 500;
`;

const TooltipContent = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
const TooltipContentText = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

const TooltipBubble = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
`;

const Chat: React.FC<NativeStackScreenProps<RootStackParamList, "Chat">> = ({
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
    <ChatContainer>
      <TopSection>
        {/* TODO: 조건적으로 타이머, 투표 타이머 */}
        <TopSectionLabelZone>
          <GeneralLabel>자유롭게 이야기를 나누어 보세요.</GeneralLabel>
        </TopSectionLabelZone>
        <TopSectionTimerZone>
          <Timer>
            <TimeLabel>남은대화시간</TimeLabel>
            <TimeText>10:00</TimeText>
          </Timer>
        </TopSectionTimerZone>
      </TopSection>
      <MiddleSection>
        <UserCardList>
          <UserCard voiceOn={true} />
          <UserCard voiceOn={true} />
          <UserCard />
          <UserCard />
        </UserCardList>
      </MiddleSection>
      <BottomSection>
        <TooltipLabel>대화가 잘 이어지지 않나요?</TooltipLabel>
        <TooltipContainer>
          <TooltipTitle>지금 핫한 주제로 이야기해보세요.🔥</TooltipTitle>
          <TooltipContent>
            <TooltipContentText>오징어 게임</TooltipContentText>
            <TooltipContentText>스우파</TooltipContentText>
            <TooltipContentText>스파이더맨</TooltipContentText>
            <TooltipContentText></TooltipContentText>
          </TooltipContent>
        </TooltipContainer>
      </BottomSection>
    </ChatContainer>
  );
};

export default Chat;
