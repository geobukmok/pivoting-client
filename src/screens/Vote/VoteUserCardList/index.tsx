import React, { useState } from "react";
import styled from "styled-components/native";
import VoteUserCard from "../VoteUserCard";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
// TODO: User list from Props
const users = [
  { id: 1, name: "수당연의" },
  { id: 2, name: "비프스테이크" },
  { id: 3, name: "산솜다리" },
  { id: 4, name: "바다물벼룩" },
];

const VoteUserCardList = () => {
  const [selectedUserName, setSelectedUserName] = useState<string>("");

  return (
    <Container>
      {users.map(({ id, name }) => {
        return (
          <VoteUserCard
            key={id}
            selected={selectedUserName === name}
            name={name}
            onSelect={(name) => {
              setSelectedUserName(name);
            }}
          />
        );
      })}
    </Container>
  );
};

export default VoteUserCardList;
