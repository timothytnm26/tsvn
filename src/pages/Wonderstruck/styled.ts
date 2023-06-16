import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: var(--header-height) !important;
  background-color: var(--speak-now-1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const About = styled.div`
  height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Script = styled.div`
  max-width: 800px;
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
