import { useTranslation } from "react-i18next";
import { Container, ParaWrapper } from ".";
import ParallaxText from "../../components/ParallaxText";
import { About } from "./About";
import { HomeBanner, TIMEOUT } from "./HomeBanner";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import { heroOptions } from "../../components/Particles/particlesOptions";
import Footer from "../../components/Footer";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: var(--header-height) !important;
  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;
export const Home = () => {
  const { t } = useTranslation();
  return (
    <Container id="home">
      <Wrapper>
        {" "}
        <ParticlesComponent
          id="hero-particles"
          className="w-full h-screen z-0 min-h-[800px]"
          particlesOptions={heroOptions}
        />
        <HomeBanner />
      </Wrapper>
      <ParaWrapper>
        <ParallaxText baseVelocity={3}>
          <span className="eras-party">THE ERAS PARTY</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span className="chap3">Wonderstruck</span>
        </ParallaxText>
      </ParaWrapper>
      <About />
      <Footer />
    </Container>
  );
};
