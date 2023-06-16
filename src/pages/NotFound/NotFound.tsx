import React from "react";
import { styled } from "styled-components";

const WrapperNotFound = styled.div`
  height: calc(100vh - var(--footer-height));
  padding-top: var(--header-height);
  background-color: var(--speak-now-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-family: CarlaSansRegular;
`;
const NotFound = () => {
  return (
    <WrapperNotFound>
      <h1>404</h1>
      <h2>TURN BACK NOWW</h2>
    </WrapperNotFound>
  );
};

export default NotFound;
