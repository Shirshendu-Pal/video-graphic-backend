// var mandrill = require('node-mandrill')('md-cibYod7U9Avr747IAMd5Cw');
// const ApiError = require("../utils/ApiError");
// const httpStatus = require("http-status");


// const sendEmail = async (recieverDetails , subject , message) =>{
//     // {email: 'git@jimsc.com', name: 'Jim Rubenstein'}
//     mandrill('/messages/send', {

//         message: {
//             to: [recieverDetails],
//             from_email: 'shirshendupal9@gmail.com',
//             subject: subject,
//             text: message
//         }
//     }, function(error, response)
//     {
//         //uh oh, there was an error
//         if (error) throw new ApiError(httpStatus.BAD_REQUEST , error.message)
    
//         //everything's good, lets see what mandrill said
//         else {
//             console.log(response)
//             return response;
//         }
//     });
// }


const Sib = require("sib-api-v3-sdk")
const emailConfig = require("./email-config")();

const sendEmail = async (recipient,subject, message) => {


    const sender = {
        email:"shirshendupal9@gmail.com",
        name:"Shirshendu"
    }
    
    const recievers = []
    recievers.push({
      email: recipient
    })
    
    const mailData = {
      sender,
      to:recievers,
      subject:subject,
      textContent: message
    }
    
      emailConfig.sendTransacEmail(mailData)
    

}

module.exports ={
    sendEmail
}