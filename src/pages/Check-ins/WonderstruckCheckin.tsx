import { useEffect, useState } from 'react';
import { Wrapper } from '../Home/Home';
import useGoogleSheets from 'use-google-sheets';
import { Clock } from '../../components/Clock/clock';
import ParticlesComponent from '../../components/Particles/ParticlesComponent';
import { heroOptions } from '../../components/Particles/particlesOptions';
import { Container } from '../Home';
import Footer from '../../components/Footer';
import styled from 'styled-components';
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
const Form = styled.form``

const API_POST_TO_SPREADSHEET_URL =
  'https://script.google.com/macros/s/AKfycbzp3foBHcKpkmewstkhfFxrwyNiozBEFi9bVMGs3CPlHuiVo9b2DVbecI-3JkT8n-2p/exec';
const WonderstruckCheckIn = () => {
  const [userCheckInInfo, setUserCheckInInfo] = useState<userData>();
  const [checkInData, setCheckInData] = useState<userData[]>([]);
  const [countCheckIn, setCountCheckIn] = useState<number>(0);
  const { data, loading, error } = useGoogleSheets({
    apiKey: API_KEY || '',
    sheetId: SPREADSHEET_ID || '',
    sheetsOptions: [{ id: 'finalCheckin' }],
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

  const Submit = (e: any) => {
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formData = new FormData(formEle as HTMLFormElement);
    const inputCode = formData.getAll('Code')[0];
    const check = checkInData.filter(
      (item: any) => item.code === inputCode,
    )[0] as userData;
    setUserCheckInInfo(check);
    setCountCheckIn(Number(check.isChecked) + 1);
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
    }
  };
  return (
    <Container ><Wrapper>
      <Clock />
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
      {userCheckInInfo ? (
        <>
          <p>{userCheckInInfo.name}</p>
          <p>{userCheckInInfo.email}</p>
          <p>{userCheckInInfo.phone}</p>
          <p>{countCheckIn}</p>
        </>
      ) : (
        <Form
          className="form"
          onSubmit={(e) => Submit(e)}
        >
          <input
            placeholder="Your Code"
            name="Code"
            type="text"
            className='code_input'
          />
          <input type="submit" />
        </Form>
      )}
      <></>
    </Wrapper></Container>
  );
};
export default WonderstruckCheckIn;
