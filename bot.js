const Discord = require("discord.js");//@Flasteni
const falsteni = new Discord.Client();//@Flasteni
var prefix = "!"
falsteni.on('message', message => {//@Flasteni
  if (!message.content.startsWith(prefix)) return;//@Flasteni
  var args = message.content.split(' ').slice(1);//@Flasteni
  var argresult = args.join(' ');//@Flasteni
  if (message.author.id !== "497449510495059978") return;//@Flasteni

//@Flasteni
  if (message.content.startsWith('!spam')) { //@Flasteni
          let count = 0;//@Flasteni
          let ecount = 0;//@Flasteni
          for(let x = 0; x < 90000; x++) {//@Flasteni
            message.channel.send(`${argresult}`)//@Flasteni
              .then(m => {//@Flasteni
                count++;//@Flasteni
              })//@Flasteni
              //@Flasteni//@Flasteni
            }//@Flasteni
          }//@Flasteni
    });//@Flasteni
	
	falsteni.on("ready", () => {
let channel =     falsteni.channels.get("515208908415959059")
setInterval(function() {
channel.send(`YYYYYYYY`);
}, 15)
})
falsteni.on('message', message => {
    let prefix = 'v2';
   if(message.content.startsWith('v2say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});
falsteni.on('message', message => {
     if (message.content === "!av-set") {
falsteni.user.setAvatar(`https://cdn.discordapp.com/attachments/480884525505839104/515234980612538368/006.jpg`)
 
}
});
	
falsteni.login('NTE1MjI0MDcxMjAyNDA2NDEw.Dth_hQ.n_wiBxwFnmIcR7s30O72pg1dDiU');