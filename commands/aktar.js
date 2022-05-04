exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Lütfen kişiden bahsedin veya kimliğini verin') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Lütfen transfer için geçerli bir miktar girin') 
  if(authordata.amount < amount) return message.channel.send('o kadar paran yok gibi') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`pwoncy**${amount}** parayı başarıyla ** ${member.user.tag}** hesabına aktardınız.`)
}
exports.help = {
  name: "aktar",
  aliases: ['ver', 'paylaş'],
  usage: `aktar <üye> <miktar>`
};
