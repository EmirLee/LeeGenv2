const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const stock = require('./stock');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Komut listesini görüntüleyin.'),

	async execute(interaction) {
		const { commands } = interaction.client;

		const commandListEmbed = new MessageEmbed()
			.setColor(config.color.default)
			.setTitle('Yardım Paneli')
			.setDescription(`👋 Merhaba ve **${interaction.guild.name}**'e hoş geldiniz! 🌟 Size en iyi hizmetleri sunmak için buradayız. 🚀`)
			.setImage(config.banner)
			.setThumbnail(interaction.client.user.displayAvatarURL({ dynamic: true, size: 64 })) // Set the bot's avatar as the thumbnail

.addFields({
				name: `Commands`,
				value: "`/help`   **Yardım komutunu görüntüler.**\n`/create` **Yeni bir servis oluşturun.**\n`/free`   **Bir ödül oluşturun.**\n`/add`    **Stoka bir ödül ekleyin.**\n`/stock`  **Güncel stokları görüntüleyin.**\n`/premium` **Premium ödül oluşturun.**"
			})
			.setFooter(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true, size: 64 }))
			.setTimestamp()
			.addField('Faydalı Linkler', `[**Website**](${config.website}) [**Discord**](https://dsc.gg/2Rt43sFuGS)`);

		await interaction.reply({ embeds: [commandListEmbed] });
	},
};
