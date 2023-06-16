import styled from "styled-components";
const NavContainer = styled.nav`
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  background-color: rgba(var(--speak-now-1), 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  /* background-image: radial-gradient(transparent 1px, var(--speak-now-1) 1px);
  background-size: 4px 4px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px); */
  font-size: 1em;
  .right {
    .wonderstruck {
      font-family: Hertine;
    }
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: baseline;
    > a {
      text-decoration: none;
      color: white;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 0.5em;
    height: var(--header-height-mobile);
    .left,
    .right {
      gap: 0.5em;
      > a {
        font-size: 0.8em;
      }
    }
  }
`;

import { Navigation } from "./Navigation";
export { NavContainer };
export default Navigation;
