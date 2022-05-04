module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Yorgunsun. Tekrar çalışmak için ${work.time.minutes} dakika ve ${work.time.seconds} saniye sonra tekrar gelin.`);
    else return message.reply(`**${work.workedAs}** olarak çalıştınız ve **${work.amount}** pwoncy kazandınız. Artık **${work.after}** pwoncy var.`);
};

module.exports.help = {
    name: "çalış",
    aliases: [],
    usage: "çalış"
}
