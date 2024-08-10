const Sib = require("sib-api-v3-sdk")
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
module.exports = () => {
const client = Sib.ApiClient.instance

const apiKey = client.authentications["api-key"]

const tranEmailApi = new Sib.TransactionalEmailsApi()

return tranEmailApi

};