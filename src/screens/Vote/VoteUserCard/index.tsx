import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import ProfileImage from "../../../components/ProfileImage";
import { smileProfileImage } from "../../../utils/images";

interface ContainerProps {
  selected: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  width: 45%;
  margin: 2.5%;
  height: 45%;
  border-radius: 20px;
  border-width: 5px;
  background-color: #f6f6f6;
  border-color: ${({ selected }) => (selected ? "#5073cd" : "#f6f6f6")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserNameText = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;

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
