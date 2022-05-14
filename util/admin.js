var admin = require("firebase-admin");

var serviceAccount = require("../storage/portfolio-11bf7-firebase-adminsdk-az8j6-ea487142dd.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // connect to firebase database connection
module.exports = {admin, db}; // export database connetion and admin instance