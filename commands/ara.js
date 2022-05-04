exports.execute = async (client, message, args) => {
    let users = [
        "Tec",
        "Elmas",
        "Altın",
        "Gümüş"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "ara" });
    if (beg.onCooldown) return message.reply(`${beg.time.minutes} dakika ve ${beg.time.seconds} saniye sonra tekrar gelin.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Yakalandınız! Parayı alamadın ufaklık.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** biraz kârlıydı, **${beg.amount}** pwoncy buldunuz. Artık **${beg.after}** pwoncy var.`);
};

exports.help = {
    name: "ara",
    aliases: [],
    usage: "ara"
}
