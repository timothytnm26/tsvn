import styled from "styled-components";
const NavContainer = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: var(--speak-now-1);
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
