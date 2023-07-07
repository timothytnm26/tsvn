import { useEffect, useState } from 'react';
import { Wrapper } from '../Home/Home';
import { useTranslation } from 'react-i18next';
import useGoogleSheets from 'use-google-sheets';
import { Clock } from '../../components/Clock/clock';
import ParticlesComponent from '../../components/Particles/ParticlesComponent';
import { heroOptions } from '../../components/Particles/particlesOptions';
import { Container, ParaWrapper } from '../Home';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import ParallaxText from '../../components/ParallaxText';
import QRScanner from '../../components/QRDetect/QRDetect';
import { use } from 'i18next';
import { HiOutlineQrcode } from 'react-icons/hi';
// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID || '';
const API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY || '';
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
    font-family: 'GothamMedium';
    &::placeholder{
      color: #fff;
      opacity: .8;
    }
  }
  .button {
    margin-top: 1rem;
    font-family: 'GothamMedium';
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: transparent;
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
      box-shadow: 0 0 5px var(--speak-now-5), 0 0 20px var(--speak-now-5),
        0 0 50px var(--speak-now-5), 0 0 100px #008cff;
    }
  }
`;
const Infos = styled.div``;
const Info = styled.p`
  color: #fff;
  font-family: 'GothamMedium';
  text-align: left;
  width: 100%;
`;
const sheetId = 'finalCheckin';
const API_POST_TO_SPREADSHEET_URL =
  'https://script.google.com/macros/s/AKfycbzp3foBHcKpkmewstkhfFxrwyNiozBEFi9bVMGs3CPlHuiVo9b2DVbecI-3JkT8n-2p/exec';
const WonderstruckCheckIn = () => {
  const { t } = useTranslation();
  const [userCheckInInfo, setUserCheckInInfo] = useState<userData>();
  const [checkInData, setCheckInData] = useState<userData[]>([]);
  const [countCheckIn, setCountCheckIn] = useState<number>(0);
  const [qrCode, setQrCode] = useState<string>('');
  const [paused, setPaused] = useState<boolean>(false);
  const { data, loading, error } = useGoogleSheets({
    apiKey: API_KEY || '',
    sheetId: SPREADSHEET_ID || '',
    sheetsOptions: [{ id: sheetId }],
  });

  useEffect(() => {
    if (data[0]) {
      const rawData = data[0].data as userData[];
      setCheckInData(rawData);
      const localCode = localStorage.getItem('wonderstruck');
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
  const Submit = (e: any) => {
    console.log('submit');
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formData = new FormData(formEle as HTMLFormElement);
    const inputCode = formData.getAll('Code')[0];
    if (!inputCode) {
      alert('Please enter your code');
      return;
    }
    const check = checkInData.filter(
      (item: any) => item.code === inputCode,
    )[0] as userData;
    setUserCheckInInfo(check);
    check && setCountCheckIn(Number(check.isChecked) + 1);
    if (check) {
      localStorage.setItem('wonderstruck', check.code);
      fetch(API_POST_TO_SPREADSHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
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
      alert('Invalid Code');
      setQrCode('');
    }
  };
  return (
    <Container style={{ overflowY: 'hidden' }}>
      <Wrapper>
        <Clock />
        <ParticlesComponent
          id="hero-particles"
          className="w-full h-screen z-0 min-h-[800px]"
          particlesOptions={heroOptions}
        />
        {userCheckInInfo ? (
          <Infos>
            <Info>{userCheckInInfo.name}</Info>
            <Info>{userCheckInInfo.email}</Info>
            <Info>{userCheckInInfo.phone}</Info>
            <Info>{countCheckIn}</Info>
            <Info>{userCheckInInfo.code}</Info>
            <Info>{qrCode}</Info>
          </Infos>
        ) : (
          <>
            <Form
              className="form"
              onSubmit={(e) => Submit(e)}
            >
              <div
                style={{
                  maxWidth: '85vw',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                {' '}
                <input
                  placeholder={`${t('check-in.code-input')}`}
                  name="Code"
                  type="text"
                  className="input"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value={`${t('check-in.check-in')}`}
                className="button"
              />
            </Form>
            <br />
            <br />
            <QRScanner onDetected={handleQRCode} />
          </>
        )}
        <></>{' '}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
          }}
        >
          <ParaWrapper>
            {' '}
            <ParallaxText baseVelocity={-3}>
              <span className="chap3">Wonderstruck</span>
            </ParallaxText>
            <ParallaxText baseVelocity={3}>
              <span className="eras-party">THE ERAS PARTY</span>
            </ParallaxText>
          </ParaWrapper>
        </div>
      </Wrapper>
    </Container>
  );
};
export default WonderstruckCheckIn;
