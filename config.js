const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~3Q0QCSpD#TUgs-fbxNHChRwLV68M6r19UYMcm008WskCtTC0dEkE",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/b496e3bdf0f9c068aeb3a.jpg",
    ALIVE_MSG: proceas.env.ALIVE_MSG || "*Hello I'm Alive Now ♥✊*",
};
