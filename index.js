const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const bot = new Discord.Client();
bot.login(token);
const pics=["./Sans_titre-removebg-preview.png","./Sans_titre1-removebg-preview.png","./Sans_titre3-removebg-preview.png","./gzegzeg.png"]
bot.once("ready", () => {
    console.log("TripelbilBot is online");
    setInterval(()=>{
        console.log("Time Out");

    },1000*60*5)
});
bot.on("message", (message) => {
    try{
        let CommendSenderId = message.author.id;

    var UserMadeCommendChanel = "undefined";
    var ChanelUsers = [];

    //getVoiceChanels

    // console.log(userIsAmoungUsAdmin.guild.channels)
      

    if (message.content==`!mute`) {
            
        let userIsAmoungUsAdmin = message.member.roles.cache.some((r) => r.name === "Amongusadmin");
        if (userIsAmoungUsAdmin) {
            const voiceChannels = message.guild.channels.cache.filter(
                (c) => c.type === "voice"
            );
            for (const [id, voiceChannel] of voiceChannels) {
                voiceChannel.members.forEach((e) => {
                    if (e.user.id == CommendSenderId) {
                        UserMadeCommendChanel = voiceChannel;
                        ChanelUsers = voiceChannel.members;
                    }
                });
                if (UserMadeCommendChanel != "undefined") {
                    break;
                }
            }
           /* let RoleMuteId = message.guild.roles.cache.filter((role) => {
                if (role.name == "Muted" || role.name == "muted") {
                    return role.id;
                }
            });*/

            ChanelUsers.map((e) => {
                //let member = message.guild.members.cache.get(e.user.id);
                e.voice.setMute(true);
                // member.roles.add(RoleMuteId)
            });
            message.channel.send("mute ala zebi", {files: ["./tazzzzz.gif"]});

        }else{
            message.channel.send("lezmek tkoun admin AmongUs asba bech tnjm ta3ml mute   Ya "+message.author.username+" Ya mnayek")

        }

    } else if (message.content==`!unmute`) {
        let userIsAmoungUsAdmin = message.member.roles.cache.some((r) => r.name === "Amongusadmin");
        if (userIsAmoungUsAdmin) {
            const voiceChannels = message.guild.channels.cache.filter(
                (c) => c.type === "voice"
            );
            for (const [id, voiceChannel] of voiceChannels) {
                voiceChannel.members.forEach((e) => {
                    if (e.user.id == CommendSenderId) {
                        UserMadeCommendChanel = voiceChannel;
                        ChanelUsers = voiceChannel.members;
                    }
                });
                if (UserMadeCommendChanel != "undefined") {
                    break;
                }
            }
           /* let RoleMuteId = message.guild.roles.cache.filter((role) => {
                if (role.name == "Muted" || role.name == "muted") {
                    return role.id;
                }
            });*/

            ChanelUsers.map((e) => {
                //let member = message.guild.members.cache.get(e.user.id);
                e.voice.setMute(false);
                // member.roles.remove(RoleMuteId)
            });
            message.channel.send("unmute", {files: ["./tazzzzz.gif"]});
        }else{
            message.channel.send("lezmek tkoun admin AmongUs asba bech tnjm ta3ml unmute Ya "+message.author.username+" Ya mnayek")
        }
};


    }catch(e){
        console.log(e)
    }
    



})

