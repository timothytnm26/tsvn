import styled from "styled-components";
import { Home } from "./Home";
export default Home;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: calc(100vh - var(--header-height)); */
  background-color: var(--speak-now-1);
  h1 {
    color: white;
  }
`;
export const ParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
