import * as async from 'async';
import * as functions from 'firebase-functions';
import { google } from 'googleapis';

import authorize from '../sheets/authorize';
import credentials from './credentials';

const getSheetData = (authenticatedSheet, spreadsheetId) => {
    return new Promise((resolve, reject) => {
        authenticatedSheet.spreadsheets.values.get({
            spreadsheetId,
            range: 'Entries!A2:L1000',
        }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                const rows = res.data.values;
                if (rows.length) {
                    resolve(rows)
                }else{
                    reject([0])
                }
            }
        })
    })
}

export default functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    const spreadsheetId = "1s0gibNz1DELZQaSTVhM9mhEqpxfx_cDsc0nDSa7MqaE"    
    authorize(credentials, auth => {
        const authenticatedSheet = google.sheets({ version: 'v4', auth });
        getSheetData(authenticatedSheet, spreadsheetId).then(data => {
           response.send({length: Object.keys(data).length})
        }).catch(error => {
            response.send(error)
        })
    })
})