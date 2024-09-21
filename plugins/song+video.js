const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * 👨‍💻 𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐎𝐎𝐓𝐘 𝐍𝐄𝐋𝐔𝐌𝐈 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 👨‍💻 * ]⦁⫸

🎵 *Song Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎧 *Enjoy the music brought to you by* *Queen Chooty Nelumi Md Bot*! 

> *Created with 💛 by  by Queen Chooty Nelumi TM* 
 
> *© 𝙌𝙐𝙀𝙀𝙉-𝘾𝙃𝙊𝙊𝙏𝙔-𝙉𝙀𝙇𝙐𝙈𝙄 - MD* 
*💻 GitHub:* https://github.com/Navinofc44/Queen-Chooty-Nelumi-Md 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*©Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝐶𝑎𝑛𝑡 𝐹𝑖𝑛𝑑 α ѕσηg')
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * 👨‍💻 𝙌𝙐𝙀𝙀𝙉 𝘾𝙃𝙊𝙊𝙏𝙔 𝙉𝙀𝙇𝙐𝙈𝙄 𝙈𝘿 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 👨‍💻 * ]⦁⫸ 

🎥 *Video Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *Queen Chooty Nelumi Md Bot*! 

> *Created with 💛 by Queen Chooty Nelumi TM* 

> *© 𝘿𝘼𝙍𝙆 𝙕𝙀𝙍𝙊 𝘽𝙊𝙏 - MD* 
*💻 GitHub:* https://github.com/Navinofc44/Queen-Chooty-Nelumi-Md
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*©Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝐶𝑎𝑛𝑡 𝐹𝑖𝑛𝑑 α νι∂єσ')
}
})
