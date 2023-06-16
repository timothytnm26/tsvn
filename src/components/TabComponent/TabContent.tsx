import React from "react";
import { motion, Variants } from "framer-motion";
import cardImage from "./../../assets/imgs/wonderstruckcover.png";
import { IMAGES } from "../../constants";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

const cards = [
  {
    key: "hn",
    title: "Hà Nội",
    image: [
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
    ],
    formUrl: "/form_hn",
  },
  {
    key: "dn",
    title: "Đà Nẵng",
    image: [
      { alt: "view of mountain", src: IMAGES.taylorSpeakNow, desc: "" },
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
    ],
    formUrl: "form_dn",
  },
  {
    key: "sg",
    title: "Sài Gòn",
    image: [
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
      { alt: "view of mountain", src: IMAGES.wonderstruck, desc: "" },
    ],
    formUrl: "/form_sg",
  },
];
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
        {cards
          .filter((item) => item.key + "-content" === id)
          .map((item) => (
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
        <NavLink
          to={cards.filter((item) => item.key + "-content" === id)[0].formUrl}
          className="ticket-btn"
        >
          {t("about_wonderstruck.buy_ticket")}
        </NavLink>
      </div>
    </motion.div>
  );
};

export default TabContent;
