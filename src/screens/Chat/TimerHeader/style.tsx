import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const MessageSection = styled.View`
  flex: 2;
  justify-content: center;
`;

export const Message = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

export const TimerSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TimerContainer = styled.View`
  padding: 10px 20px;
  border-radius: 50px;
  align-items: center;
  background-color: #f6f6f6;
`;

export const TimeLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #9e9db5;
`;

export const TimeText = styled.Text`
  margin-top: 5px;
  font-weight: 800;
  font-size: 18px;
  color: #5073cd;
`;
