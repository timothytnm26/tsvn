import styled from "styled-components";

export const TicketButton = styled.button`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: monospace;
  background-color: transparent;
  padding: 0.5rem;
  font-weight: 800;
  border-radius: 0.5rem;
  font-family: GothamMedium;
  width: 150px;
  border: 2px solid var(--speak-now-5);
  animation: blink 1s infinite;
  cursor: pointer;
  &:hover {
    display: block !important;
    background-color: var(--speak-now-5);
    box-shadow: 0px 0px 10px 2px var(--speak-now-6);
    .buf0 {
      top: -50%;
      right: -20%;
      width: 50px;
      height: 50px;
      transform: scaleX(-1);
      display: block !important;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }
    .buf1 {
      bottom: -40%;
      right: 0;
      width: 40px;
      height: 40px;
      display: block !important;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }
    .buf2 {
      top: 0;
      left: -30%;
      width: 50px;
      height: 50px;
      display: block !important;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }
  }
  .blink_buf {
    animation: blink 1s infinite;
    position: absolute;
    display: none;
    /* box-shadow: 2px 2px 10px 2px var(--speak-now-5); */
  }
  .buf0 .buf1 .buf2 {
    position: absolute;
    z-index: -5;
    height: auto;
    top: 50%;
    left: 50%;
    width: 10px;
    transform: translate(-50%, -50%);
  }

  @keyframes blink {
    0% {
      scale: 0.8;
    }
    50% {
      scale: 1.3;
    }
    100% {
      scale: 1;
    }
  }
`;
