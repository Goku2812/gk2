let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππ½ ππππ°ππΈπΎ π³π΄ πΈπ½πππ°πΆππ°πΌ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} luisitocomunica*`
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=85faf717d0545d14074659ad`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply('*[β] ππππ°ππΈπΎ πΈπ½ππ°π»πΈπ³πΎ πΎ ππΈπ½ π·πΈπππΎππΈπ°π*')  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type']
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('*[β] ππππ°ππΈπΎ πΈπ½ππ°π»πΈπ³πΎ πΎ ππΈπ½ π·πΈπππΎππΈπ°π*')})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('*[β] ππππ°ππΈπΎ πΈπ½ππ°π»πΈπ³πΎ πΎ ππΈπ½ π·πΈπππΎππΈπ°π*')})
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]
export default handler
