import { google } from 'googleapis';

import token from './token';

const TOKEN = JSON.stringify(token)
export default function (credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  oAuth2Client.setCredentials(JSON.parse(TOKEN));
  callback(oAuth2Client);
}