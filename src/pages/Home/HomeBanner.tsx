import styled from "styled-components";
import wonderstruck from "./../../assets/imgs/wonderstruckcover.png";
const Wrapper = styled.div`
  padding-top: var(--header-height);
  background-color: var(--speak-now-1);
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    width: 100%;
    height: auto;
  }
`;
export const HomeBanner = () => {
  return (
    <Wrapper>
      <img className="banner" src={wonderstruck} alt="banner" />
    </Wrapper>
  );
};
