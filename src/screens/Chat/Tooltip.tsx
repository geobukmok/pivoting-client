import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: flex-start;
`;

const TooltipLabel = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

const TooltipContainer = styled.View`
  margin-top: 10px;
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
  margin-top: 10px;
  width: 100%;
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
const Tooltip = () => {
  return (
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
};

export default Tooltip;
