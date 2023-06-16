import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import "./style.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { TabContentProps } from "./TabContent";

interface TabProps {
  title: string;
  id: string;
  icon: ReactJSXElement;
  color: string;
  content: React.FC<TabContentProps>;
}

const tabVariant = {
  active: {
    width: "55%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  inactive: {
    width: "15%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: "none" },
  },
};

const TabComponent: React.FC<{ tabs: TabProps[]; defaultIndex?: number }> = ({
  tabs,
  defaultIndex = 0,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  // Default to a tab based on the URL hash value
  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );
    setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [tabs, defaultIndex]);

  const onTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="container">
      <div className="tabs-component">
        <ul className="tab-links" role="tablist">
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.id}
              className={cn("tab", { active: activeTabIndex === index })}
              role="presentation"
              variants={tabVariant}
              animate="active"
              // {activeTabIndex === index ? "active" : "inactive"}
            >
              <a href={`#${tab.id}`} onClick={() => onTabClick(index)}>
                <motion.span variants={tabTextVariant}>{tab.title}</motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
        {tabs.map((tab, index) => {
          const TabContent = tab.content as any;
          return (
            <TabContent
              key={tab.id}
              id={`${tab.id}-content`}
              active={activeTabIndex === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabComponent;
