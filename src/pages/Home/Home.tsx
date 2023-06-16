import { useTranslation } from "react-i18next";
import { Container, ParaWrapper } from ".";
import ParallaxText from "../../components/ParallaxText";
import { Wonderstruck } from "../Wonderstruck/Wonderstruck";
import { About } from "./About";
import { HomeBanner } from "./HomeBanner";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import { heroOptions } from "../../components/Particles/particlesOptions";
import { Wrapper } from "../Wonderstruck/styled";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        {" "}
        {/* <ParticlesComponent
          id="hero-particles"
          className="w-full h-screen z-0 min-h-[800px]"
          particlesOptions={heroOptions}
        /> */}
      </Wrapper>
      {/* <HomeBanner /> */}
      <ParaWrapper>
        <ParallaxText baseVelocity={3}>
          <span className="eras-party">THE ERAS PARTY</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span className="chap3">Wonderstruck</span>
        </ParallaxText>
      </ParaWrapper>
      <About />
    </Container>
  );
};
