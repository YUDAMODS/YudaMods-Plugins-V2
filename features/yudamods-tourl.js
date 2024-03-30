const { catbox } = require('../function/uploader')


let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*Bot media found!!*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await catbox(media)
  m.reply(`*[ SHINOMIYA UPLOADER ]*
*• Url:*
 ${link}
${media.length} Byte(s)`)
}
handler.help = ['tourl'].map(a => a + ' *[Reply/send Media]*')
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i

module.exports = handler