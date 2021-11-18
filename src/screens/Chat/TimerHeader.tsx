import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
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

interface GeneralChatHeaderProps {
  remainSeconds: number;
}

const GeneralChatHeader: React.FC<GeneralChatHeaderProps> = ({
  remainSeconds,
}) => {
  const minute = Math.floor(remainSeconds / 60);
  const seconds = remainSeconds % 60;
  return (
    <Container>
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
    </Container>
  );
};

export default GeneralChatHeader;
