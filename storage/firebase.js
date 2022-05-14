var firebase = require('firebase')
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.FC_API_KEY,
    authDomain: process.env.FC_AUTH_DOMAIN,
    projectId: process.env.FC_PROJECT_ID,
    storageBucket: process.env.FC_STORAGE_BUCKET,
    messagingSenderId: process.env.FC_MESSAGING_SENDER_ID,
    appId: process.env.FC_APP_ID,
    measurementId: process.env.FC_MEASUREMENT_ID,
};


firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = {firebase}; //export the app