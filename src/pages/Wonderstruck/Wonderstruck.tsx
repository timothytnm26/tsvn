import { useTranslation } from "react-i18next";
import { About, Script, Taylor, WonderstruckImg, Wrapper } from "./styled";
import TabComponent from "../../components/TabComponent/Tabs";
import { tabs } from "../Forms/Form";
import { heroOptions } from "../../components/Particles/particlesOptions";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import { IMAGES } from "../../constants";

export const Wonderstruck = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {/* <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      /> */}
      <About>
        <Taylor className="right">
          <WonderstruckImg
            src={IMAGES.wonderstruck}
            alt="Ca sĩ hội chợ Thúy Loan"
          />
        </Taylor>
        <Script className="left">
          {" "}
          <p>{t("about_wonderstruck.script.p1")}</p>
          <p>{t("about_wonderstruck.script.p2")}</p>
          <p>{t("about_wonderstruck.script.p3")}</p>
        </Script>
      </About>
      <TabComponent tabs={tabs} />
    </Wrapper>
  );
};
