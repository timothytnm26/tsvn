import styled from "styled-components";
import wonderstruck from "./../../assets/imgs/wonderstruckcover.png";
import { IMAGES } from "../../constants";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";
import { TicketButton } from "../../components/TabComponent/styled";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
export const TIMEOUT = 1687093200000;
import speakNowTV from "./../../assets/SNTV.png";
const Wrapper = styled.div`
  z-index: 9999 !important;
  position: relative;
  pointer-events: none;
  /* padding-top: var(--header-height); */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: 20%;
  width: 100vw;
  perspective: 1px;
  perspective-origin: center center;
  overflow-x: hidden;
  color: white;
  @media (max-width: 1240px) {
    margin-right: 0 !important;
    align-items: center !important;
  }
`;

const Hi = styled.div`
  span {
    font-size: 4rem !important;
    font-family: "Courier New", Courier, monospace;
  }
`;
const CountDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999999 !important;
`;
const CountdownRender = styled.div`
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  font-family: GothamMedium !important;
  font-size: 30rem;
  a,
  link {
    text-decoration: none;
  }
`;
const Times = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;
const TimeNumber = styled.div`
  font-family: GothamMedium !important;
  font-size: 5rem;
  @media (max-width: 850px) {
    font-size: 4rem;
  }
  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;
const TimeTittle = styled.div`
  font-family: GothamMedium !important;
  font-size: 20px;
`;
export const Chapter3 = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wonderstruck {
    font-size: 100px;
    font-family: Hertine;
    text-shadow:
    /* White glow */ 0 0 7px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  .speakNow {
    max-width: 600px;
  }
  .listen,
  span {
    font-size: 40px;
    font-family: CarlaSansRegular;
  }
  @media (max-width: 1250px) {
    .wonderstruck {
      font-size: 50px !important;
    }
    .speakNow {
      max-width: 500px !important;
    }
    .listen,
    span {
      font-size: 30px;
      font-family: CarlaSansRegular;
    }
  }
  @media (max-width: 850px) {
    justify-content: center;
  }
  @media (max-width: 550px) {
    .wonderstruck {
      font-size: 40px !important;
    }
    .speakNow {
      max-width: 400px !important;
    }
    .listen,
    span {
      font-size: 25px;
      font-family: CarlaSansRegular;
    }
  }
`;
export const HomeBanner = () => {
  const constraintsRef = useRef(null);
  const { t } = useTranslation();
  return (
    <Wrapper>
      {/* <Hi>
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag dragConstraints={constraintsRef}>
          <Typewriter
            options={{
              strings: ["hi you guys", "we were enchanted to meet you..."],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </Hi>{" "} */}

      <Chapter3>
        <div className="speakNow">
          <img src={speakNowTV} />
        </div>
        <div className="listen">Listening Party</div>
        <CountDownWrapper>
          <Countdown
            date={TIMEOUT}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                return (
                  <CountdownRender className="ticket-btn">
                    <Link to={"/wonderstruck#tickets"}>
                      <TicketButton
                        style={{
                          zIndex: "99999 !important",
                        }}
                      >
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
                        {t("countdown")}
                      </TicketButton>
                    </Link>
                  </CountdownRender>
                );
              } else {
                return (
                  <CountdownRender>
                    <Times>
                      <TimeNumber>{hours}</TimeNumber>
                      <TimeTittle>
                        {hours > 1 ? t("time.hours") : t("time.hour")}
                      </TimeTittle>
                    </Times>
                    <Times>
                      <TimeNumber>{minutes}</TimeNumber>
                      <TimeTittle>
                        {minutes > 1 ? t("time.minutes") : t("time.minute")}
                      </TimeTittle>
                    </Times>
                    <Times>
                      <TimeNumber>{seconds}</TimeNumber>
                      <TimeTittle>
                        {seconds > 1 ? t("time.seconds") : t("time.second")}
                      </TimeTittle>
                    </Times>
                  </CountdownRender>
                );
              }
            }}
          />{" "}
        </CountDownWrapper>
        <div className="wonderstruck">Wonderstruck</div>
      </Chapter3>
    </Wrapper>
  );
};
