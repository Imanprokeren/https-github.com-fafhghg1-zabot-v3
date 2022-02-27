let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks, teks2] = text.split('|')

let listeffect = `
GlitchText 
8Bit 
Pubg 
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await conn.getBuffer(global.API('dapu', `/api/photooxy/${effect}`, {text1: teks, text2: teks2}, 'apikey'))
 let caption = `*photooxy*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['photooxy2 <effect|teks|teks2>']
handler.tags = ['maker']
handler.command = /^(photooxy2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
