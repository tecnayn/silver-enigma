exports.execute = async (client, message, args) => {
  let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if(!target) return message.reply("Who are you trying to rob?")
  let messages = [
    `${target} soymaya çalışırken tökezledin ve yakalandın!`,
    `Sinsileşiyorsun ha? ${target} polisleri aradı!`,
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return message.reply(`Yakın zamanda birini soymaya çalıştınız, ${rob.time.seconds} saniye sonra tekrar deneyin.`);
    if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    else { 
      let x = client.eco.fetchMoney(target.id).amount - amount 
      
      client.eco.setMoney(target.id,parseInt(x))
      message.reply(`**${rob.amount}** pwoncy için ${target} soydunuz. Artık **${rob.after}** pwoncy var.`);
    }
};

exports.help = {
    name: "soy",
    aliases: ["çal"],
    usage: "soy <kullanici>"
}
