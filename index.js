const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")))

// const publicVapidKey = "BOd2EQ8LTe3KAgMX9lWwTlHTRzv1Iantw50Mw6pUnsNr3pcxl8iglUs-YlQEQLo4UbJk9oyXs_BxgyAe0TCqKME";
// const privateVapidKey = "4AoSsRHFaHv0Fupd2NRtrungJF2jkqgccTu-WEc781w";

const publicVapidKey = "BCjyovdmE2Req7Z8MpwzzmJgWdCit5TPejJnBloIhfm8X0GAUXLcU5fnv8FILH3QaO2P5jhauuy3GtTkU7tKut8"
const privateVapidKey = "Xo9I_Ve-tlXxS2Be6M1sy_XZ9tOH4xRq3KA9jaebbpU"

webpush.setVapidDetails("mailto:nvthinh@yahoo.com", publicVapidKey, privateVapidKey);

//////////// thinh
// if (Notification.permission === 'granted') {
//     console.log('Permission to send notifications has been granted');
//   } else if (Notification.permission === 'denied') {
//     console.log('Permission to send notifications has been denied');
//   } else {
//     console.log('Permission to send notifications has not been granted yet');
// }

/////////////////

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });
    //good
    webpush.sendNotification(subscription, payload).catch(console.log);

    //thinh
    // webpush.sendNotification(subscription, payload)
    //     // .then(() => {})
    //     .then(result => {
    //         console.log("came here")
    //         console.log('Result: ', result)
    //         res.sendStatus(201)
    //     })
    //     .catch((err) => {
    //         console.log(`Error when tryng to deliver message for ${subscription.endpoint}`, err)
    //     })

})

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})