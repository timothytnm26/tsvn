import React from "react";
import { motion, Variants } from "framer-motion";
import cardImage from "./../../assets/imgs/wonderstruckcover.png";
import { IMAGES, TABS } from "../../constants";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TicketButton } from "./styled";
export interface TabContentProps {
  id: string;
  active: boolean;
}

const tabContentVariant: Variants = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: "none",
  },
};

const cardVariant: Variants = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const TabContent: React.FC<TabContentProps> = ({ id, active }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      role="tabpanel"
      id={id}
      className="tab-content"
      variants={tabContentVariant}
      animate={active ? "active" : "inactive"}
      initial="inactive"
    >
      <div className="tab_wrapper">
        {TABS.filter((item) => item.key + "-content" === id).map((item) => (
          <div key={item.key} className="cards">
            {item.image.map((img, i) => {
              return (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  className="content-card"
                >
                  <img key={i} src={img.src} alt={img.alt} />
                </motion.div>
              );
            })}
          </div>
        ))}
        {TABS.filter((item) => item.key + "-content" === id).map((item) => {
          return (
            <a target="_blank" href={item.formUrl} className="ticket-btn">
              <TicketButton>
                <img
                  src={IMAGES.buffterfly0}
                  alt="blink"
                  className="blink_buf buf0"
                />
                <img
                  src={IMAGES.buffterfly1}
                  alt="blink"
                  className="blink_buf buf1"
                />
                <img
                  src={IMAGES.buffterfly2}
                  alt="blink"
                  className="blink_buf buf2"
                />
                {t("about_wonderstruck.buy_ticket")}
              </TicketButton>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TabContent;
