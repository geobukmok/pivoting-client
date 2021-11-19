import { Container, SkipButton, SkipText, SubmitButton } from "./style";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

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
