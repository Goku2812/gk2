let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/mapag.jpg"
let stikerbyegc = "./src/bv.jpg"
if (command == 'mapag') {
conn.sendFile(m.chat, stikerwelgc, null, { asSticker: true })
}
if (command == 'bv') {
conn.sendFile(m.chat, stikerbyegc, null, { asSticker: true })
}}
handler.command = ['mapag', 'bv']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
