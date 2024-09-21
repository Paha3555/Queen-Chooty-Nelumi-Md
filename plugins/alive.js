const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*𝐇𝐄𝐋𝐋𝐎 👋 ${pushname} 𝗤𝗨𝗘𝗘𝗡-𝗖𝗛𝗢𝗢𝗧𝗬-𝗡𝗘𝗟𝗨𝗠𝗜-𝗠𝗗 Whatsapp Bot 💗👨‍💻",
`
return await conn.sendMessage(from,{image: {url: `https://imgtr.ee/image/IMG-20240917-WA0492.hdhlvD`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
