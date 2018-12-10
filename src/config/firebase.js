import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCU3CpIKLbXj39rJWDFBNhy_vPclIDD4Dw",
    authDomain: "cict-online.firebaseapp.com",
    databaseURL: "https://cict-online.firebaseio.com",
    projectId: "cict-online",
    storageBucket: "cict-online.appspot.com",
    messagingSenderId: "320090420810"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()


db.settings({
    timestampsInSnapshots: true,
})

export {
    db,
    auth,
}