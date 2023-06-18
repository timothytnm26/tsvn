import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";
import { Variants, motion } from "framer-motion";
import { Wrapper } from "./Home";
import { SLIDE } from "../../constants";
import { Slide } from "../../components/Slide/Slide";
const AboutScript = styled.div`
  color: white;
  padding: 3rem;
  margin-bottom: var(--footer-height);
  margin-left: 25%;
  position: relative;
  p {
    font-size: 1.5rem !important;
    color: white;
    font-family: "Quicksand", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    text-align: justify;
    font-weight: 300;
    margin: 10px 0;
  }
  @media (max-width: 1000px) {
    margin-left: 0%;
    padding: 2rem;
    p {
      font-size: 1.3rem !important;
    }
  }
  @media (max-width: 678px) {
    p {
      font-size: 1.2rem !important;
    }
  }
  @media (max-width: 500px) {
    p {
      font-size: 1rem !important;
    }
  }
  .quote {
    position: relative;
    &:before {
      content: '"';
      font-size: 5rem;
      position: absolute;
      font-family: Helvetica, sans-serif;
      left: -3rem;
      top: -4rem;
    }
  }
`;
const cardVariants: Variants = {
  offscreen: {
    y: -100,
  },
  onscreen: {
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5,
    },
  },
};
export const About = () => {
  const { t } = useTranslation();
  return (
    <Wrapper id="about">
      <AboutScript>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
        >
          <motion.div variants={cardVariants} className="quote">
            <p>{t("about.script.p1")}</p>
            <p>{t("about.script.p2")}</p>
            <p>{t("about.script.p3")}</p>
          </motion.div>
        </motion.div>
      </AboutScript>
      {/* <div className="example-container">
        <Slide images={SLIDE} />
      </div> */}
    </Wrapper>
  );
};
