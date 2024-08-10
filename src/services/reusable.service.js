
const bcrypt = require("bcryptjs");


const getRandomCharacters =(str, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      result += str[randomIndex];
    }
    return result;
  }

   const findMatchingPassword = async (password, hashedPasswords) => {
    for (let hashedPassword of hashedPasswords) {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (isMatch) {
            return true;
        }
    }
    return false;
}

const generatePassword = async (first_name , last_name , phone , paswords) => {
    let password = getRandomCharacters(first_name , 3) + getRandomCharacters(last_name , 2) + getRandomCharacters(phone , 4);
    while (await findMatchingPassword(password , paswords)){
        console.log("here")
        password = getRandomCharacters(first_name , 3) + getRandomCharacters(last_name , 2) + getRandomCharacters(phone , 4);
    }
    console.log(password);

    return password

}

const getUser = async (users , password) =>{
    for(let user of users){
        const isMatched = await bcrypt.compare(password, user.password);
        if(isMatched){
            return user
        }
    }
}

module.exports ={
    generatePassword,
    getUser
}