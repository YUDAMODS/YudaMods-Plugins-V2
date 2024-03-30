let syaii = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw "*• Example:* " + usedPrefix + command + " halo";
  m.reply(wait);
  let a = await Func.fetchJson(
    "https://itzpire.site/ai/you?q=" +
      text,
  );
  m.reply("*[ YOU - AI ]*\n" + a.result.message);
};

syaii.help = syaii.command = ["aiy", "youbot", "aiyou","youai"];
module.exports = syaii;