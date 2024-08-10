const Sib = require("sib-api-v3-sdk");
const config = require('../configuration/config');

// console.log(config.mail.apiKey)
module.exports = () => {
const client = Sib.ApiClient.instance

const apiKey = client.authentications["api-key"]

apiKey.apiKey =  config.mail.apiKey

const tranEmailApi = new Sib.TransactionalEmailsApi()

return tranEmailApi

};