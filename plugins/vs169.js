let handler = async (m, { command, text }) => m.reply(`
*╔═══*💥 *16 VS 16*  *EXTERNO*💥
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧* ⏰  *8:45 PM*  🇲🇽
*╟❧* ⏰  *9:45 PM*  🇪🇨
*╟*
*╟❧*  *MAPA ABIERTO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*🎁
*╟❧*🎁
*╟❧*🎄
*╟❧*🎄
*╔══*  *ESCUADRA*
*╟❧*🎁
*╟❧*🎁
*╟❧*🎄
*╟❧*🎄
*╔══* *ESCUADRA*
*╟❧*🎁
*╟❧*🎁
*╟❧*🎄
*╟❧*🎄
*╔══* *ESCUADRA*
*╟❧*🎁
*╟❧*🎁
*╟❧*🎄
*╟❧*🎄
*╚══* *SUPLENTES*
*╟❧*🧑‍🎄
*╟❧*🧑‍🎄
*╚══* *DONADOR DE SALA*
*╟❧*❄️
*╚═*❄️
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs16.9$/i
export default handler
