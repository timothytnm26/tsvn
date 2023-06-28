import React, { useEffect } from "react";
import { Wrapper } from "../Home/Home";
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID || "";
const SHEET_ID = import.meta.env.VITE_APP_SHEET_ID;
const CLIENT_EMAIL = import.meta.env.VITE_APP_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_APP_PRAVITE_KEY || "";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, {
  apiKey: PRIVATE_KEY,
});
doc.loadInfo()
console.log(doc);
const t = doc.sheetsByTitle
console.log(t);
const getSheetValue = async () => {
  
}

 const WonderstruckCheckIn = () => {
    useEffect(() => {
    const t = ""
    console.log(t);
})
  return <Wrapper>check-in</Wrapper>;
};
export default WonderstruckCheckIn;