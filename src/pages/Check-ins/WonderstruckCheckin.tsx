import React, { useEffect } from 'react';
import { Wrapper } from '../Home/Home';
import useGoogleSheets from 'use-google-sheets';
import axios from 'axios';
// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID || '';
const API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY || '';

const API_POST_TO_SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzp3foBHcKpkmewstkhfFxrwyNiozBEFi9bVMGs3CPlHuiVo9b2DVbecI-3JkT8n-2p/exec"
const WonderstruckCheckIn = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: API_KEY || '',
    sheetId: SPREADSHEET_ID || '',
    sheetsOptions: [{ id: 'check-in' }],
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }
  const checkInData = data && data[0].data;
  console.log(checkInData);
 
const  Submit = (e: any) => {
  e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle as HTMLFormElement);
    fetch(
      API_POST_TO_SPREADSHEET_URL,
      {
        method: "POST",
        mode: "no-cors",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return <Wrapper> <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Code" name="Code" type="text" />
          <input name="Code" type="submit" />
        </form></Wrapper>;
};
export default WonderstruckCheckIn;
