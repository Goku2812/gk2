let handler = async (m, { command, text }) => m.reply(`
*╔═══*💥 *4 VS 4* *EXTERNO*💥
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧*  ⏰  *3:45 PM*  🇲🇽
*╟❧*  ⏰  *4:45 PM*  🇪🇨
*╟* 
*╟❧*  *COMPETITIVO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*🎅
*╟❧*🎅
*╟❧*🎅
*╟❧*🎅
*╚══* *SUPLENTES*
*╟❧*⛄
*╟❧*⛄
*╚══* *DONADOR DE SALA*
*╟❧*❄️
*╚═*❄️
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs4.c.4$/i
export default handler
