import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: var(--header-height) !important;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--speak-now-1) !important;
`;

export const About = styled.div`
  display: flex;
  flex-direction: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 3rem;
  gap: 2rem;
`;
export const Script = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1000px;
  color: white;
  p {
    font-size: 1rem !important;
    color: white;
    font-family: "Quicksand", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    text-align: justify;
    font-weight: 300;
    margin: 10px 0;
  }
`;
export const Taylor = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
  color: white;
`;
export const WonderstruckImg = styled.img`
  width: 100%;
  max-width: 600px;
`;
