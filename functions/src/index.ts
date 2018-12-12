import * as admin from 'firebase-admin';
import getRegisteredEntries from './api/getRegisteredEntries';
import addNewEntry from "./api/addNewEntry";

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

export {
    getRegisteredEntries,
    addNewEntry
}
