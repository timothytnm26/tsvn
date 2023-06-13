import { useTranslation } from "react-i18next";
import { Container, ParaWrapper } from ".";
import ParallaxText from "../../components/ParallaxText";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <h1>{t("home.title")}</h1>
      <ParaWrapper>
        <ParallaxText baseVelocity={-3}>TAYLOR SWIFT VIETNAM </ParallaxText>
        <ParallaxText baseVelocity={3}>THE ERAS PARTY CHAPTER 3</ParallaxText>
      </ParaWrapper>
    </Container>
  );
};
