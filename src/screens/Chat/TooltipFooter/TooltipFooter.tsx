import {
  Container,
  TooltipContainer,
  TooltipContent,
  TooltipContentText,
  TooltipLabel,
  TooltipTitle,
} from "./style";

import React from "react";

const Tooltip = () => (
  <Container>
    <TooltipLabel>대화가 잘 이어지지 않나요?</TooltipLabel>
    <TooltipContainer>
      <TooltipTitle>지금 핫한 주제로 이야기해보세요.🔥</TooltipTitle>
      <TooltipContent>
        <TooltipContentText>오징어 게임</TooltipContentText>
        <TooltipContentText>스우파</TooltipContentText>
        <TooltipContentText>스파이더맨</TooltipContentText>
      </TooltipContent>
    </TooltipContainer>
  </Container>
);

export default Tooltip;
