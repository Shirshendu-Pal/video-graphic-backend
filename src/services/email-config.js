const Sib = require("sib-api-v3-sdk")
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
module.exports = () => {
const client = Sib.ApiClient.instance

const apiKey = client.authentications["api-key"]

apiKey.apiKey =  "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"

const tranEmailApi = new Sib.TransactionalEmailsApi()

return tranEmailApi

};