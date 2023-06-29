import React, { useEffect } from 'react';
import { Wrapper } from '../Home/Home';
import useGoogleSheets from 'use-google-sheets';
import axios from 'axios';
// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID || '';
const SHEET_ID = import.meta.env.VITE_APP_SHEET_ID;
const CLIENT_EMAIL = import.meta.env.VITE_APP_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_APP_PRAVITE_KEY || '';
const API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY || '';
const SHEET_BEST = import.meta.env.VITE_APP_SHEET_BEST_URL || '';
const SHEET_BEST_API_KEY = import.meta.env.VITE_APP_SHEET_BEST_API_KEY || '';
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

  
  // Add two lines to the sheet
fetch("https://docs.google.com/spreadsheets/d/12pyXFBDY7KMURvIk4iznj_icRyb-bMmMtrebcYuCHss/edit#gid=1577225350", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": SHEET_BEST_API_KEY,
  },
  body: JSON.stringify([
    {
      Id: "10",
      Name: "Jack Doe",
      Age: "97",
      "Created at": Date.now(),
    },
    {
      Id: "11",
      Name: "John Doe",
      Age: "44",
      "Created at": Date.now(),
    },
  ]),
})
  .then((r) => r.json())
  .then((data) => { data ? JSON.parse(data) : {}
    // The response comes here
    console.log(data);
  })
  .catch((error) => {
    // Errors are reported there
    console.log(error);
  });



  return <div>hi</div>;
};
export default WonderstruckCheckIn;
