import React from "react";
import styled from "styled-components/native";
import ProfileImage from "../../components/ProfileImage";

const TestSmileImg = require("../../img/smile_1.png");

interface ContainerProps {
  on: boolean;
}

const Container = styled.View<ContainerProps>`
  width: 45%;
  margin: 2.5%;
  height: 45%;
  border-radius: 20px;
  border-width: 5px;
  background-color: #f6f6f6;
  border-color: ${({ on }) => (on ? "#5073cd" : "#f6f6f6")};
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
  voiceOn?: boolean;
}

const UserCard: React.FC<Props> = ({ voiceOn = false }) => {
  return (
    <Container on={voiceOn}>
      <ProfileImage size="md" image={TestSmileImg} />
      <UserNameText>안녕하세요.</UserNameText>
    </Container>
  );
};

export default UserCard;
