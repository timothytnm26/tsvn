import { useTranslation } from "react-i18next";
import { About, Script, Taylor, Wrapper } from "./styled";
import TabComponent from "../../components/TabComponent/Tabs";
import { tabs } from "../Forms/Form";
import speakNowTV from "./../../assets/SNTV.png";
import { heroOptions } from "../../components/Particles/particlesOptions";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import Footer from "../../components/Footer";
import Player from "./Player";
import { Chapter3 } from "../Home/HomeBanner";

export const Wonderstruck = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="wonderstruck" id="chapter3">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
      <About>
        <Taylor className="right">
          <Player />
        </Taylor>
        <Script className="left">
          {" "}
          <Chapter3>
            <div className="speakNow">
              <img src={speakNowTV} />
            </div>
            <div className="listen">Listening Party</div>
            <div className="wonderstruck">Wonderstruck</div>
          </Chapter3>
          <p>{t("about_wonderstruck.script.p1")}</p>
          <p>{t("about_wonderstruck.script.p2")}</p>
          <p>{t("about_wonderstruck.script.p3")}</p>
        </Script>
      </About>
      <div
        id="tickets"
        style={{
          zIndex: 999,
          paddingBottom: "50px",
          marginBottom: "var(--footer-height)",
          pointerEvents: "none",
        }}
      >
        <TabComponent tabs={tabs} />
      </div>
      <Footer />
    </Wrapper>
  );
};
