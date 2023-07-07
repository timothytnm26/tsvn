import { useEffect, useState } from "react";
import { Wrapper } from "../Home/Home";
import { useTranslation } from "react-i18next";
import useGoogleSheets from "use-google-sheets";
import { Clock } from "../../components/Clock/clock";
import ParticlesComponent from "../../components/Particles/ParticlesComponent";
import { heroOptions } from "../../components/Particles/particlesOptions";
import { Container, ParaWrapper } from "../Home";
import styled from "styled-components";
import ParallaxText from "../../components/ParallaxText";
import QRScanner from "../../components/QRDetect/QRDetect";
import { TSVN } from "../../components/TSVNLogo";
// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID || "";
const API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY || "";
type userData = {
  code: string;
  name: string;
  email: string;
  phone: string;
  isChecked: string;
  note: string;
  no: string;
};
const Form = styled.form`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #fff;
    background-color: transparent !important;
    color: #fff;
    font-family: "GothamMedium";
    &::placeholder {
      color: #fff;
      opacity: 0.8;
    }
  }
  .button {
    margin-top: 1rem;
    font-family: "GothamMedium";
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #ff74ec;
    color: #fff;
    border: 2px solid #fff;
    width: fit-content;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover,
    &:focus &:hover {
      color: #ffffff;
      background-color: var(--speak-now-5);
      border: 2px solid var(--speak-now-5);
      text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
      box-shadow: 0 0 5px var(--speak-now-6), 0 0 20px var(--speak-now-5),
        0 0 50px var(--speak-now-4), 0 0 100px #008cff;
    }
  }
`;
const Infos = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  position: relative !important;
  width: fit-content;
`;
const Info = styled.p`
  color: #fff;
  font-family: "GothamMedium";
  text-align: left;
  width: 100%;
`;
const Mark = styled.div`
  width: 200px !important;
  height: 200px !important;
  transform: scale(0.7) rotate(-20deg) translateX(19rem) translateY(6rem);
  opacity: 0.5;
  color: #fff;
`;
const Code = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--speak-now-1);
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  background-color: #c9c9ff;
  background-color: #c9c9ff;
  background-image: linear-gradient(135deg, #ffffff 25%, transparent 25%),
    linear-gradient(225deg, #ffffff 25%, transparent 25%),
    linear-gradient(45deg, #ffffff 25%, transparent 25%),
    linear-gradient(315deg, #ffffff 25%, #c9c9ff 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 8px 8px;
  background-repeat: repeat;
`;
const sheetId = "finalCheckin";
const API_POST_TO_SPREADSHEET_URL =
  "https://script.google.com/macros/s/AKfycbzp3foBHcKpkmewstkhfFxrwyNiozBEFi9bVMGs3CPlHuiVo9b2DVbecI-3JkT8n-2p/exec";
const WonderstruckCheckIn = () => {
  const { t } = useTranslation();
  const [userCheckInInfo, setUserCheckInInfo] = useState<userData>();
  const [checkInData, setCheckInData] = useState<userData[]>([]);
  const [countCheckIn, setCountCheckIn] = useState<number>(0);
  const [qrCode, setQrCode] = useState<string>("");
  const [paused, setPaused] = useState<boolean>(false);
  const { data, loading, error } = useGoogleSheets({
    apiKey: API_KEY || "",
    sheetId: SPREADSHEET_ID || "",
    sheetsOptions: [{ id: sheetId }],
  });

  useEffect(() => {
    if (data[0]) {
      const rawData = data[0].data as userData[];
      setCheckInData(rawData);
      const localCode = localStorage.getItem("wonderstruck");
      if (localCode) {
        const user = rawData.filter((item) => item.code === localCode)[0];
        setUserCheckInInfo(user);
        setCountCheckIn(Number(user.isChecked));
      }
    }
    if (loading) {
    }
    if (error) {
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  const handleQRCode = (code: string) => {
    setQrCode(code);
  };
  const reset = () => {
    setUserCheckInInfo(undefined);
    setQrCode("");
  };
  const Submit = (e: any) => {
    console.log("submit");
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle as HTMLFormElement);
    const inputCode = formData.getAll("Code")[0];
    if (!inputCode) {
      alert("Please enter your code");
      return;
    }
    const check = checkInData.filter(
      (item: any) => item.code === inputCode
    )[0] as userData;
    setUserCheckInInfo(check);
    check && setCountCheckIn(Number(check.isChecked) + 1);
    if (check) {
      localStorage.setItem("wonderstruck", check.code);
      fetch(API_POST_TO_SPREADSHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid Code");
      setQrCode("");
    }
  };
  return (
    <Container
      style={{
        overflowY: "hidden",
      }}
    >
      <Wrapper style={{ position: "relative" }}>
        <button
          style={{
            zIndex: 1000,
            width: "100%",
            border: "none",
            background: "none",
          }}
          onClick={() => {
            window.confirm(`${t("check-in.reset")}`) && reset();
          }}
        >
          {" "}
          <span
            className="chap3"
            style={{
              top: "7vh",
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute",
              fontSize: "2rem",
              color: "#fff",
              textShadow: "0 0 7px #fff, 0 0 10px #ffaeae, 0 0 15px #8e16ff",
              fontFamily: "Hertine",
            }}
          >
            Check In
          </span>
        </button>
        <Clock />
        <ParticlesComponent
          id="hero-particles"
          className="w-full h-screen z-0 min-h-[800px]"
          particlesOptions={heroOptions}
        />
        {userCheckInInfo ? (
          <Infos>
            <Code
              style={{
                backgroundColor: "red",
                color: `${countCheckIn === 1 ? "green" : "red"}`,
              }}
            >
              {userCheckInInfo.code}
            </Code>
            <Info
              style={{
                fontSize: "1.5rem",
                width: "100%",
              }}
            >
              {userCheckInInfo.name}
            </Info>

            <Mark
              style={{
                filter: "green(0.5)",
              }}
            >
              <TSVN />
              <Info
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {userCheckInInfo.code}
              </Info>
            </Mark>
          </Infos>
        ) : (
          <div
            style={{
              position: "relative",
              zIndex: 1000,
            }}
          >
            <Form className="form" onSubmit={(e) => Submit(e)}>
              <div
                style={{
                  maxWidth: "85vw",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <input
                  placeholder={`${t("check-in.code-input")}`}
                  name="Code"
                  type="text"
                  className="input"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value={`${t("check-in.check-in")}`}
                className="button"
              />
            </Form>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            >
              {" "}
              <QRScanner onDetected={handleQRCode} />
            </div>
          </div>
        )}
        <></>{" "}
        <div
          style={{
            position: "absolute",
            bottom: "10vh",
          }}
        >
          <ParaWrapper>
            {" "}
            <ParallaxText baseVelocity={1}>
              <span
                className="chap3"
                style={{
                  fontSize: "3rem",
                  textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 15px #fff",
                }}
              >
                Wonderstruck
              </span>
            </ParallaxText>
          </ParaWrapper>
        </div>
      </Wrapper>
    </Container>
  );
};
export default WonderstruckCheckIn;
