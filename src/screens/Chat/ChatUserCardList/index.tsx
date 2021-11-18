import React from "react";
import styled from "styled-components/native";
import ChatUserCard from "../ChatUserCard";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const UserCardList = () => {
  return (
    <Container>
      <ChatUserCard />
      <ChatUserCard voiceOn={true} />
      <ChatUserCard />
      <ChatUserCard />
    </Container>
  );
};

export default UserCardList;
