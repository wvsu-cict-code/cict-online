import * as functions from 'firebase-functions';
import { google } from 'googleapis';

import authorize from '../sheets/authorize';
import credentials from './credentials';

const writeSheetData = (authenticatedSheet, spreadsheetId, resource) => {
    return new Promise((resolve, reject) => {
        authenticatedSheet.spreadsheets.values.append({
            spreadsheetId,
            range: 'Entries',
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource,
        }, (error, res) => {
            if (error) {
                reject(error)
            } else {                
                resolve(res)
            }
        })
    })
}

export default functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    const newEntry = request.query.data;
    const spreadsheetId = "1s0gibNz1DELZQaSTVhM9mhEqpxfx_cDsc0nDSa7MqaE"    
    const resource = {values: [newEntry]}
      
    authorize(credentials, auth => {
        const authenticatedSheet = google.sheets({ version: 'v4', auth });
        writeSheetData(authenticatedSheet, spreadsheetId, resource).then(entries => {
           response.send(entries)
        }).catch(error => {
            response.send(error)
        })
    })
})