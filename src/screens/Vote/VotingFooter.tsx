import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Text } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

type SubmitButtonProps = {
  enable: boolean;
};

const SubmitButton = styled.TouchableOpacity<SubmitButtonProps>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => (props.enable ? "#5073cd" : "#A1A1AD")};
  justify-content: center;
  align-items: center;
`;

const SkipButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 70px;
  align-items: center;
`;

const SkipText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #b8b8cd;
`;

interface Props {
  selected: boolean;
  onSkip(): void;
  onSubmit(): void;
}

const VotingFooter: React.FC<Props> = ({ selected, onSkip, onSubmit }) => {
  return (
    <Container>
      {selected ? (
        <SubmitButton enable={true} onPress={() => {}}>
          <Ionicons name="checkmark-sharp" color="white" size={40} />
        </SubmitButton>
      ) : (
        <SubmitButton enable={false} onPress={() => {}}>
          <Ionicons name="checkmark-sharp" color="white" size={40} />
        </SubmitButton>
      )}
      <SkipButton>
        <SkipText>건너뛰기</SkipText>
      </SkipButton>
    </Container>
  );
};

export default VotingFooter;
