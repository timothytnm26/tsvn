import { useTranslation } from "react-i18next";
import { Wrapper } from "../Wonderstruck/styled";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Wrapper id="about">
      <p>{t("about.script.p1")}</p>
      <p>{t("about.script.p2")}</p>
      <p>{t("about.script.p3")}</p>
    </Wrapper>
  );
};
