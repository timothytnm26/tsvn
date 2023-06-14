import React from "react";
import { motion, Variants } from "framer-motion";
import cardImage from "./../../assets/imgs/wonderstruckcover.png";

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

const cards = ["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"];

const TabContent: React.FC<TabContentProps> = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="cards">
      {cards.map((item, index) => (
        <motion.div key={index} variants={cardVariant} className="content-card">
          <img src={cardImage} alt="view of mountain" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TabContent;
