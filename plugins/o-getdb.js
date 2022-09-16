let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File database.json')
    let database = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: database, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['host']
handler.command = /^(g(et)?db)$/i

handler.owner = true

module.exports = handler
