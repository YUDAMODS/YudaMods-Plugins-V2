let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example:* ${usedPrefix + command} halo`
m.reply(wait)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/botika?q=${text}&user=${m.sender}&model=sindy`)).json()
m.reply("*[ SINDY - AI ]* " + '\n' + gpt.result)
 } catch(e) {
 throw "`*Gpt Not Responded*`"
}
}
handler.help = ["sindy"].map(a => a + " *[question]*")
handler.tags = ["ai"]
handler.command = ["sindy"]

module.exports = handler