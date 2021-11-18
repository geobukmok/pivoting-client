import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const MessageSection = styled.View`
  flex: 2;
  justify-content: center;
`;

const Message = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
const SubMessage = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #a1a1ad;
`;

const TimerSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const VotingHeader = () => {
  return (
    <Container>
      <MessageSection>
        <Message>지금 분위키 메이커는{"\n"}누구인가요?</Message>
        <SubMessage>* 한명만 선택해주세요.</SubMessage>
      </MessageSection>
      <TimerSection />
    </Container>
  );
};

export default VotingHeader;
