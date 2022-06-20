require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

class Sms {
  
  sendText(order) {
    const client = require('twilio')(accountSid, authToken);
    let date = new Date()
    client.messages.create({
      to: process.env.MY_PHONE_NUMBER,
      from: '+18573714789',
      body: `Hello your food will be with you soon. ${order}. Estimated time of arrival: ${new Date(date.getTime() + 30*60000)}}`
    })
    .then((message) => console.log(message.sid))

  }

}

module.exports = Sms;