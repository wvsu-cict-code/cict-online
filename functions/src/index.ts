import * as admin from 'firebase-admin';
import getRegisteredEntries from './api/getRegisteredEntries';
import addNewEntry from "./api/addNewEntry";
import countAllRegistered from "./api/countAllRegistered";

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

export {
    countAllRegistered,
    getRegisteredEntries,
    addNewEntry
}
