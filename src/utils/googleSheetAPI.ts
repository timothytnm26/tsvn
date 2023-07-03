import { google } from 'googleapis';

const credentials = require('./credentials.json');
const { client_id, client_secret, redirect_uris } = credentials.installed;

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0],
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export function authorize() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return authUrl;
}

export async function getAccessToken(code: string) {
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  return tokens;
}

export function updateSpreadsheet(
  accessToken: string,
  spreadsheetId: string,
  range: string,
  values: any[],
) {
  const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
  return sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: { values },
    auth: oAuth2Client,
  });
}
