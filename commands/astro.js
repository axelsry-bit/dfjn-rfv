const Discord = require('discord.js')

module.exports = {
    name: `astro`,
    description: `Envoi une invitation.`,
    execute(client, message, args) {
        message.reply('Voici mon serveur, venez me rejoindre pour toute suggestion, rapport de bug, ou toute question. \n https://discord.gg/hsPYCVy7fW')
    }
}
