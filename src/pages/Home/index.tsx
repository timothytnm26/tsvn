import styled from "styled-components";
import { IMAGES } from "../../constants";

export const Container = styled.div`
  position: relative;
  background-color: var(--speak-now-1);
  h1 {
    color: white;
  }
  background-blend-mode: lighten;
  background-image: url(${IMAGES.taylormobile});
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 0;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 640px) {
    background-image: url(${IMAGES.taylorSpeakNow});
    background-position: left bottom;
  }
  perspective: 1px;
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
