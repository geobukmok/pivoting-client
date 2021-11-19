import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.color.White};
`;

export const TopSection = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MiddleSection = styled.View`
  flex: 4;
  padding: 10px;
`;

export const BottomSection = styled.View`
  flex: 1;
  padding-right: 20px;
  padding-left: 20px;
`;
