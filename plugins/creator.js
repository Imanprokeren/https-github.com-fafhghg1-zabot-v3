const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ImanOffc;;;\nFN:ImanOffc\nitem1.TEL;waid=6289522724388:+62 895-2272-4388\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:ImanOffc\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
