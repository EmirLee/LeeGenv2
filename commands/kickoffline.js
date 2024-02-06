// "kickoffline" komutu
client.on('message', message => {
// Komutun "kickoffline" olup olmadığını ve komutun sunucu kanalında mı yoksa özel mesajda mı kullanıldığını kontrol edin
if (message.content.startsWith('kickoffline') && message.channel.type === 'text') {
// Sunucudaki üyeleri alın
const guildMembers = message.guild.members.cache;

// Çevrimdışı olan kullanıcıları filtreleyin
const offlineMembers = guildMembers.filter(member => member.presence.status === 'offline');

// Çevrimdışı olan kullanıcıları atın
offlineMembers.each(member => {
member.kick()
.then(kickedMember => console.log(`Atılan üye: ${kickedMember.user.tag}`))
.catch(console.error);
});
}
});
