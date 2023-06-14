import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../../constants";
import { NavContainer } from ".";
import TSVNLogo from "../TSVNLogo";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { useEffect, useState } from "react";
import useViewport from "../../hooks/useViewPort";

export const Navigation = () => {
  const [checked, setChecked] = useState(false);
  const { i18n, t } = useTranslation();
  const viewPort = useViewport();
  const isMobile = viewPort.width < 640;
  useEffect(() => {
    const lang_code = checked ? "en" : "vi";
    i18n.changeLanguage(lang_code);
  }, [checked]);
  return (
    <NavContainer>
      <div className="left">
        <NavLink to="/">
          <TSVNLogo />
        </NavLink>
      </div>
      <div className="right">
        <a href="/#about">{t("nav.about")}</a>
        <NavLink className="wonderstruck" to="/wonderstruck">
          {t("nav.wonderstruck")}
        </NavLink>
        <HeartSwitch
          size={isMobile ? "sm" : "md"}
          inactiveTrackFillColor="var(--speak-now-4)"
          inactiveTrackStrokeColor="var(--speak-now-3)"
          activeTrackFillColor="var(--speak-now-1)"
          activeTrackStrokeColor="var(--speak-now-3)"
          inactiveThumbColor="white"
          activeThumbColor="white"
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        />
      </div>
    </NavContainer>
  );
};
