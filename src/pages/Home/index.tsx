import styled from "styled-components";
import { Home } from "./Home";
export default Home;

export const Container = styled.div`
  background-color: var(--speak-now-1);
  h1 {
    color: white;
  }
`;
export const ParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  span.eras-party {
    transform: scale(1, 1.5);
    line-height: 1.5 !important;
  }
  span.chap3 {
    font-family: Hertine;
    text-transform: none !important;
    line-height: 1.4 !important;
  }
`;
