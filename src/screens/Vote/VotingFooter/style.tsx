import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

type SubmitButtonProps = {
  enable: boolean;
};

export const SubmitButton = styled.TouchableOpacity<SubmitButtonProps>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => (props.enable ? "#5073cd" : "#A1A1AD")};
  justify-content: center;
  align-items: center;
`;

export const SkipButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 70px;
  align-items: center;
`;

export const SkipText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #b8b8cd;
`;
