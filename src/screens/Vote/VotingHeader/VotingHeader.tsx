import {
  Container,
  Message,
  MessageSection,
  SubMessage,
  TimerSection,
} from "./style";

import React from "react";

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
