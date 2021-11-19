import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: flex-start;
`;

export const TooltipLabel = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

export const TooltipContainer = styled.View`
  margin-top: 10px;
  width: 95%;
  align-self: flex-end;
  border-radius: 20px;
  background-color: #f6f6f6;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

export const TooltipTitle = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: 500;
`;

export const TooltipContent = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const TooltipContentText = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

export const TooltipBubble = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
`;
