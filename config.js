const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ljczHLzB#A-1nZv-jgAUG9zJsrEpUHssGHPERFAjlNG-nxjLm9YA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/FW2r9Xh/IMG-20240921-WA0114.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝐇𝐄𝐋𝐋𝐎 👋 ${pushname} 𝗤𝗨𝗘𝗘𝗡-𝗖𝗛𝗢𝗢𝗧𝗬-𝗡𝗘𝗟𝗨𝗠𝗜-𝗠𝗗 Whatsapp Bot 💗👨‍💻",
SUDO_NB: process.env.SUDO_NB || "94757286833",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

