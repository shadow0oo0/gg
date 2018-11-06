const Discord = require('discord.js');
const bot = new Discord.Client();
const bot1 = new Discord.Client();
const bot2 = new Discord.Client();
const bot3 = new Discord.Client();
const bot4 = new Discord.Client();
const bot5 = new Discord.Client();
const bot6 = new Discord.Client();
const bot7 = new Discord.Client();
const bot8 = new Discord.Client();
const bot9 = new Discord.Client();
const bot10 = new Discord.Client();
const bot11 = new Discord.Client();
const bot12 = new Discord.Client();
const bot13 = new Discord.Client();
const bot14 = new Discord.Client();
const bot15 = new Discord.Client();
const bot16 = new Discord.Client();
const bot17 = new Discord.Client();
const bot18 = new Discord.Client();
const bot19 = new Discord.Client();
const bot20 = new Discord.Client();
const bot21 = new Discord.Client();
const bot22 = new Discord.Client();
const bot23 = new Discord.Client();
const bot24 = new Discord.Client();
const bot25 = new Discord.Client();
const bot26 = new Discord.Client();
const bot27 = new Discord.Client();
const bot28 = new Discord.Client();
const bot29 = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
console.log("BOT ONLINE");



fs.readdir("./others/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./others/${f}`);
    console.log(`${f} loaded!`);
  });
});
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type ==="dm") return;
  if (!message.guild) return;
if(message.author.id !=='142289533550067712') return;
  if (message.content === '/join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  })
bot1.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type ==="dm") return;
  if (!message.guild) return;
if(message.author.id !=='142289533550067712') return;
  if (message.content === '/join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  });
  bot2.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type ==="dm") return;
    if (!message.guild) return;
  if(message.author.id !=='142289533550067712') return;
    if (message.content === '/join') {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {})
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
    });
    bot3.on("message", async message => {
      if (message.author.bot) return;
      if (message.channel.type ==="dm") return;
      if (!message.guild) return;
    if(message.author.id !=='142289533550067712') return;
      if (message.content === '/join') {
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => {})
            .catch(console.log);
        } else {
          message.reply('You need to join a voice channel first!');
        }
      }
      });
      bot4.on("message", async message => {
        if (message.author.bot) return;
        if (message.channel.type ==="dm") return;
        if (!message.guild) return;
      if(message.author.id !=='142289533550067712') return;
        if (message.content === '/join') {
          if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => {})
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel first!');
          }
        }
        });
        bot5.on("message", async message => {
          if (message.author.bot) return;
          if (message.channel.type ==="dm") return;
          if (!message.guild) return;
        if(message.author.id !=='142289533550067712') return;
          if (message.content === '/join') {
            if (message.member.voiceChannel) {
              message.member.voiceChannel.join()
                .then(connection => {})
                .catch(console.log);
            } else {
              message.reply('You need to join a voice channel first!');
            }
          }
          });
          bot6.on("message", async message => {
            if (message.author.bot) return;
            if (message.channel.type ==="dm") return;
            if (!message.guild) return;
          if(message.author.id !=='142289533550067712') return;
            if (message.content === '/join') {
              if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                  .then(connection => {})
                  .catch(console.log);
              } else {
                message.reply('You need to join a voice channel first!');
              }
            }
            });
            bot7.on("message", async message => {
              if (message.author.bot) return;
              if (message.channel.type ==="dm") return;
              if (!message.guild) return;
            if(message.author.id !=='142289533550067712') return;
              if (message.content === '/join') {
                if (message.member.voiceChannel) {
                  message.member.voiceChannel.join()
                    .then(connection => {})
                    .catch(console.log);
                } else {
                  message.reply('You need to join a voice channel first!');
                }
              }
              });
              bot8.on("message", async message => {
                if (message.author.bot) return;
                if (message.channel.type ==="dm") return;
                if (!message.guild) return;
              if(message.author.id !=='142289533550067712') return;
                if (message.content === '/join') {
                  if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                      .then(connection => {})
                      .catch(console.log);
                  } else {
                    message.reply('You need to join a voice channel first!');
                  }
                }
                });
                bot9.on("message", async message => {
                  if (message.author.bot) return;
                  if (message.channel.type ==="dm") return;
                  if (!message.guild) return;
                if(message.author.id !=='142289533550067712') return;
                  if (message.content === '/join') {
                    if (message.member.voiceChannel) {
                      message.member.voiceChannel.join()
                        .then(connection => {})
                        .catch(console.log);
                    } else {
                      message.reply('You need to join a voice channel first!');
                    }
                  }
                  });
                  bot10.on("message", async message => {
                    if (message.author.bot) return;
                    if (message.channel.type ==="dm") return;
                    if (!message.guild) return;
                  if(message.author.id !=='142289533550067712') return;
                    if (message.content === '/join') {
                      if (message.member.voiceChannel) {
                        message.member.voiceChannel.join()
                          .then(connection => {})
                          .catch(console.log);
                      } else {
                        message.reply('You need to join a voice channel first!');
                      }
                    }
                    });
                    bot11.on("message", async message => {
                      if (message.author.bot) return;
                      if (message.channel.type ==="dm") return;
                      if (!message.guild) return;
                    if(message.author.id !=='142289533550067712') return;
                      if (message.content === '/join') {
                        if (message.member.voiceChannel) {
                          message.member.voiceChannel.join()
                            .then(connection => {})
                            .catch(console.log);
                        } else {
                          message.reply('You need to join a voice channel first!');
                        }
                      }
                      });
                      bot12.on("message", async message => {
                        if (message.author.bot) return;
                        if (message.channel.type ==="dm") return;
                        if (!message.guild) return;
                      if(message.author.id !=='142289533550067712') return;
                        if (message.content === '/join') {
                          if (message.member.voiceChannel) {
                            message.member.voiceChannel.join()
                              .then(connection => {})
                              .catch(console.log);
                          } else {
                            message.reply('You need to join a voice channel first!');
                          }
                        }
                        });
                        bot13.on("message", async message => {
                          if (message.author.bot) return;
                          if (message.channel.type ==="dm") return;
                          if (!message.guild) return;
                        if(message.author.id !=='142289533550067712') return;
                          if (message.content === '/join') {
                            if (message.member.voiceChannel) {
                              message.member.voiceChannel.join()
                                .then(connection => {})
                                .catch(console.log);
                            } else {
                              message.reply('You need to join a voice channel first!');
                            }
                          }
                          });
                          bot14.on("message", async message => {
                            if (message.author.bot) return;
                            if (message.channel.type ==="dm") return;
                            if (!message.guild) return;
                          if(message.author.id !=='142289533550067712') return;
                            if (message.content === '/join') {
                              if (message.member.voiceChannel) {
                                message.member.voiceChannel.join()
                                  .then(connection => {})
                                  .catch(console.log);
                              } else {
                                message.reply('You need to join a voice channel first!');
                              }
                            }
                            });

                            //////////////////////////////////////////////




                            bot15.on("message", async message => {
                              if (message.author.bot) return;
                              if (message.channel.type ==="dm") return;
                              if (!message.guild) return;
                            if(message.author.id !=='142289533550067712') return;
                              if (message.content === '/join') {
                                if (message.member.voiceChannel) {
                                  message.member.voiceChannel.join()
                                    .then(connection => {})
                                    .catch(console.log);
                                } else {
                                  message.reply('You need to join a voice channel first!');
                                }
                              }
                              })
                            bot16.on("message", async message => {
                              if (message.author.bot) return;
                              if (message.channel.type ==="dm") return;
                              if (!message.guild) return;
                            if(message.author.id !=='142289533550067712') return;
                              if (message.content === '/join') {
                                if (message.member.voiceChannel) {
                                  message.member.voiceChannel.join()
                                    .then(connection => {})
                                    .catch(console.log);
                                } else {
                                  message.reply('You need to join a voice channel first!');
                                }
                              }
                              });
                              bot17.on("message", async message => {
                                if (message.author.bot) return;
                                if (message.channel.type ==="dm") return;
                                if (!message.guild) return;
                              if(message.author.id !=='142289533550067712') return;
                                if (message.content === '/join') {
                                  if (message.member.voiceChannel) {
                                    message.member.voiceChannel.join()
                                      .then(connection => {})
                                      .catch(console.log);
                                  } else {
                                    message.reply('You need to join a voice channel first!');
                                  }
                                }
                                });
                                bot18.on("message", async message => {
                                  if (message.author.bot) return;
                                  if (message.channel.type ==="dm") return;
                                  if (!message.guild) return;
                                if(message.author.id !=='142289533550067712') return;
                                  if (message.content === '/join') {
                                    if (message.member.voiceChannel) {
                                      message.member.voiceChannel.join()
                                        .then(connection => {})
                                        .catch(console.log);
                                    } else {
                                      message.reply('You need to join a voice channel first!');
                                    }
                                  }
                                  });
                                  bot19.on("message", async message => {
                                    if (message.author.bot) return;
                                    if (message.channel.type ==="dm") return;
                                    if (!message.guild) return;
                                  if(message.author.id !=='142289533550067712') return;
                                    if (message.content === '/join') {
                                      if (message.member.voiceChannel) {
                                        message.member.voiceChannel.join()
                                          .then(connection => {})
                                          .catch(console.log);
                                      } else {
                                        message.reply('You need to join a voice channel first!');
                                      }
                                    }
                                    });
                                    bot20.on("message", async message => {
                                      if (message.author.bot) return;
                                      if (message.channel.type ==="dm") return;
                                      if (!message.guild) return;
                                    if(message.author.id !=='142289533550067712') return;
                                      if (message.content === '/join') {
                                        if (message.member.voiceChannel) {
                                          message.member.voiceChannel.join()
                                            .then(connection => {})
                                            .catch(console.log);
                                        } else {
                                          message.reply('You need to join a voice channel first!');
                                        }
                                      }
                                      });
                                      bot21.on("message", async message => {
                                        if (message.author.bot) return;
                                        if (message.channel.type ==="dm") return;
                                        if (!message.guild) return;
                                      if(message.author.id !=='142289533550067712') return;
                                        if (message.content === '/join') {
                                          if (message.member.voiceChannel) {
                                            message.member.voiceChannel.join()
                                              .then(connection => {})
                                              .catch(console.log);
                                          } else {
                                            message.reply('You need to join a voice channel first!');
                                          }
                                        }
                                        });
                                        bot22.on("message", async message => {
                                          if (message.author.bot) return;
                                          if (message.channel.type ==="dm") return;
                                          if (!message.guild) return;
                                        if(message.author.id !=='142289533550067712') return;
                                          if (message.content === '/join') {
                                            if (message.member.voiceChannel) {
                                              message.member.voiceChannel.join()
                                                .then(connection => {})
                                                .catch(console.log);
                                            } else {
                                              message.reply('You need to join a voice channel first!');
                                            }
                                          }
                                          });
                                          bot23.on("message", async message => {
                                            if (message.author.bot) return;
                                            if (message.channel.type ==="dm") return;
                                            if (!message.guild) return;
                                          if(message.author.id !=='142289533550067712') return;
                                            if (message.content === '/join') {
                                              if (message.member.voiceChannel) {
                                                message.member.voiceChannel.join()
                                                  .then(connection => {})
                                                  .catch(console.log);
                                              } else {
                                                message.reply('You need to join a voice channel first!');
                                              }
                                            }
                                            });
                                            bot24.on("message", async message => {
                                              if (message.author.bot) return;
                                              if (message.channel.type ==="dm") return;
                                              if (!message.guild) return;
                                            if(message.author.id !=='142289533550067712') return;
                                              if (message.content === '/join') {
                                                if (message.member.voiceChannel) {
                                                  message.member.voiceChannel.join()
                                                    .then(connection => {})
                                                    .catch(console.log);
                                                } else {
                                                  message.reply('You need to join a voice channel first!');
                                                }
                                              }
                                              });
                                              bot25.on("message", async message => {
                                                if (message.author.bot) return;
                                                if (message.channel.type ==="dm") return;
                                                if (!message.guild) return;
                                              if(message.author.id !=='142289533550067712') return;
                                                if (message.content === '/join') {
                                                  if (message.member.voiceChannel) {
                                                    message.member.voiceChannel.join()
                                                      .then(connection => {})
                                                      .catch(console.log);
                                                  } else {
                                                    message.reply('You need to join a voice channel first!');
                                                  }
                                                }
                                                });
                                                bot26.on("message", async message => {
                                                  if (message.author.bot) return;
                                                  if (message.channel.type ==="dm") return;
                                                  if (!message.guild) return;
                                                if(message.author.id !=='142289533550067712') return;
                                                  if (message.content === '/join') {
                                                    if (message.member.voiceChannel) {
                                                      message.member.voiceChannel.join()
                                                        .then(connection => {})
                                                        .catch(console.log);
                                                    } else {
                                                      message.reply('You need to join a voice channel first!');
                                                    }
                                                  }
                                                  });
                                                  bot27.on("message", async message => {
                                                    if (message.author.bot) return;
                                                    if (message.channel.type ==="dm") return;
                                                    if (!message.guild) return;
                                                  if(message.author.id !=='142289533550067712') return;
                                                    if (message.content === '/join') {
                                                      if (message.member.voiceChannel) {
                                                        message.member.voiceChannel.join()
                                                          .then(connection => {})
                                                          .catch(console.log);
                                                      } else {
                                                        message.reply('You need to join a voice channel first!');
                                                      }
                                                    }
                                                    });
                                                    bot28.on("message", async message => {
                                                      if (message.author.bot) return;
                                                      if (message.channel.type ==="dm") return;
                                                      if (!message.guild) return;
                                                    if(message.author.id !=='142289533550067712') return;
                                                      if (message.content === '/join') {
                                                        if (message.member.voiceChannel) {
                                                          message.member.voiceChannel.join()
                                                            .then(connection => {})
                                                            .catch(console.log);
                                                        } else {
                                                          message.reply('You need to join a voice channel first!');
                                                        }
                                                      }
                                                      });
                                                      bot29.on("message", async message => {
                                                        if (message.author.bot) return;
                                                        if (message.channel.type ==="dm") return;
                                                        if (!message.guild) return;
                                                      if(message.author.id !=='142289533550067712') return;
                                                        if (message.content === '/join') {
                                                          if (message.member.voiceChannel) {
                                                            message.member.voiceChannel.join()
                                                              .then(connection => {})
                                                              .catch(console.log);
                                                          } else {
                                                            message.reply('You need to join a voice channel first!');
                                                          }
                                                        }
                                                        });
                                                                                                                                                                                                                                                                                                                                                                                                                          
bot.login('NDAzMzkzNTUyNjE0MjkzNTA2.DjpRIg.OK3iyaM2pZHAMrFO4-h19OOh9NE');
bot1.login('NDAzMzk5ODUyMDYwMzExNTc0.DjpRfw.QY0RiIKt0HDbyfsIDN_9V-UETbM');
bot2.login('NDUwNzI1MjMxNDIyODY1NDEx.DjpRwQ.lQGWafdmEU-8DoVy26I4WJMhHSQ');
bot3.login('NDUwNzIzMTM3ODEwNzI2OTEy.DjpR-Q.WfCIW9wqs3b_TsLV17LPbsgb9bo');
bot4.login('NDUwODU3Nzc4NjAxMjYzMTE0.DjpSHw.FHMUAHeHT8o9v4YEyHtvAgZk6f4');
bot5.login('NDY3NzY4NjU4ODgyNTkyNzg4.DjpS8A.W52aKMabP1NvCl666y85b1okFIw');
bot6.login('NDAzMzk5NjM5NjA2MzYyMTEz.DjpTKw.FQ40JFJxx6SWdbZF06Wdvil15ZY');
bot7.login('NDQ1MjY0NjY4OTI4Mzc2ODMy.DjpTcw.IKEEbiPrdtKbt6TsALKqqTH4ED4');
bot8.login('NDMzMjkxOTIyNzY1OTA1OTIx.DjpTog.NnmlkP0-N6Z7AXjbh2Vem3c1od0');
bot9.login('NDAzMzk5ODQwOTE2MzA3OTY5.DjpUAA.9QY7Hp2rYJkfMGtYLRv5_MBdHhQ');
bot10.login('NDY3NzczODA2MDMxOTI5MzQ0.DjpUKQ.VfPuhbexva6R_SGAiz9nKe3lNAk');
bot11.login('NDUxNTM1NDAwODMwMjM4NzMx.DjpUWQ.YpIXE6hzT0D-drJsCSSAEr4DcIo');
bot12.login('NDY1OTI0MDE1NDE2OTM0NDAw.DjpUlA.qwlELwTq8PV3njrBairK-LH795Y');
bot13.login('NDY3NzY5Mzk3MTk3NjY4MzYy.DjpVKg.2ihDMJMthiwSMkUbaq59gjEBdaE');
bot14.login('NDYxNjMyNjgwNTIyNjc4Mjgy.DjpWCQ.HPk3A7XVS45dD_CJoxjWJddkhb0');
bot15.login('NDg5MDcyNTI3NDQ5MjYwMDMy.DnltVg.FmIzoyzW212XlmeaaBAC6oKo-8Q');
bot16.login('NDg5MDY4NzQ2OTk2OTczNTc5.Dnltag.Oo4bo-0Vg2OvIaq_1cwAc_HUdrE');
bot17.login('NDg5MDY3MzQ1MzE1MzY0ODY2.Dnltfw.MYpaLZ2Z9yPhB78B9xXzACHTtus');
bot18.login('NDg5MDY2Njg0MDU3OTExMjk2.Dnltkg.D_pOLuXKmixRdeyRVWy_kkFrwjM');
bot19.login('NDg5MDY1ODc4NDc5MDQ0NjQw.DnltqA.dCYtzNxp6EtEoFHrgLnsLQE4WqM');
bot20.login('NNDg5MDU0MTQ3MjA4MDE5OTc5.DnltuQ.AV5ydPM2wGZya_YKtB6AVcjPKYM');
bot21.login('NDg5MDUwNjA3NDI0ODk3MDM1.DnltzA.EebkYuhRUrIpH51Jh4U7ndJzSd8');
bot22.login('NDg5MDQ5Njc5NjI4MDc1MDIw.DnluKA.tjy7e52rrL2zOK4aViyy_theGZs');
bot23.login('NDg5MDQ4OTEyMjMwMDg4NzA0.DnluOw.lOAXa5GIgBdVl5kp3G8Iygvjm7Q');
bot24.login('NDg5MDIwMDUwNjc4NzQzMDQy.DnluWg.HaPnuigHbhRK0_wwBKZ3QYNPBM0');
bot25.login('NDg5MDgxNTI1NjQ4NzUyNjUx.DnloMw.vkvzxRopyrIWxU5erQS06Znc7qg');
bot26.login('NDg5MDgwODg3NTk0NDUwOTQ2.DnlsvQ.MolhNwGDfvRw4jXEckIyPLFJilM');
bot27.login('NDg5MDgwMzU2NjY3MTI5ODc3.Dnls5Q.jRRM5UL-FjryyibyyOOCwttgouc');
bot28.login('NDg5MDc5MzE0ODU2MjgwMDY3.DnltLQ.Y2rLCsnPa2LgaywU7NWg_qPw8OY');
bot29.login('NDg5MDc3OTE4MjU4MTY3ODYz.DnltRA.RXer5-1q3eFVWspE_MI6FVY4JRU');