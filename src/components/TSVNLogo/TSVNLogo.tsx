import React from "react";
import { TSVN } from "./TSVN";
import { styled } from "styled-components";
const LogoWrapper = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.3em;
    gap: 0.5rem;
  }
  svg {
    width: 100%;
    height: 100%;
    max-width: 70px;
    max-height: auto;
    @media screen and (max-width: 640px) {
      max-width: 50px;
    }
  }
`;
const LogoName = styled.span`
  font-size: 1.5rem;
  font-family: "HelveticaBold" !important;
  color: white;
  text-shadow: 5px 5px 5px rgba(var(--speak-now-1), 1), 0 0 0 var(--speak-now-1);
  line-height: 1.1;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const TSVNLogo: React.FC = () => {
  return (
    <LogoWrapper className="logo">
      <TSVN />
      <LogoName>Taylor Swift Vietnam</LogoName>
    </LogoWrapper>
  );
};
