import {
  Container,
  Message,
  MessageSection,
  TimeLabel,
  TimeText,
  TimerContainer,
  TimerSection,
} from "./style";

import React from "react";

interface TimerHeaderProps {
  remainSeconds: number;
}

const TimerHeader: React.FC<TimerHeaderProps> = ({ remainSeconds }) => {
  const minute = Math.floor(remainSeconds / 60);
  const seconds = remainSeconds % 60;
  return (
    <Container>
      <MessageSection>
        <Message>자유롭게 이야기를{"\n"}나누어 보세요.</Message>
      </MessageSection>
      <TimerSection>
        <TimerContainer>
          <TimeLabel>남은대화시간</TimeLabel>
          <TimeText>
            {minute}:{seconds / 10 >= 1 ? seconds : "0" + seconds}
          </TimeText>
        </TimerContainer>
      </TimerSection>
    </Container>
  );
};

export default TimerHeader;
