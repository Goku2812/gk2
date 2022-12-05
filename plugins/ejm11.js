let handler = async (m, { command, text }) => m.reply(`
*HOLA TE VAS CAMBIAR EL NOMBRE Y QUIERES* *INICIALES AQUI EJEMPLOS CORRECTOS*
Recuerda  que Debes  informar de tu cambio de nombre aqui al grupo o hacer mención a los lidereres muy fácil solo escribe *admins* y  recuerda no  quitarle el espacio a las iniciales.


✅ᴴᴬ│ㅤGOKUBOT      ✔️
✅ᴴᴬ│ㅤGOKUㅤBOT   ✔️
🚫ᴴᴬ│GOKUBOT

 Si gustan *CATSUP* les puede ayudar a hacer  su nombre con confianza se lo pueden pedir

EXELENTE DÍA A TODOS ❤️
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['ejm<texto>?']
handler.tags = ['kerang']
handler.command = /^ejm|EJM$/i
export default handler
