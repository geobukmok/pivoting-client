import { Container, UserNameText } from "./style";

import { Image } from "react-native";
import ProfileImage from "../../../components/ProfileImage";
import React from "react";
import { smileProfileImage } from "../../../utils/images";

interface Props {
  selected?: boolean;
  name?: string;
  onSelect(name: string): void;
}

const VoteUserCard: React.FC<Props> = ({
  selected = false,
  name = "이름 없음",
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(name);
  };
  return (
    <Container selected={selected} onPress={handleClick}>
      <ProfileImage size="md" image={smileProfileImage} />
      <UserNameText>{name}</UserNameText>
    </Container>
  );
};

export default VoteUserCard;
