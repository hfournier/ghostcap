---
wpId: 8502
title: 'How To Fix RCON Not Connecting in CS2 [Pterodactyl, WISP, Docker]'
description: 'Since Counter Strike 2 has released, I''ve been contacted by ...'
type: post
createdAt: 2023-11-10T13:42:48
modifiedAt: 2023-11-23T01:22:22
author: pedrotski
categories:
  - counter-strike
featuredMedia:
  id: 8525
  src: "./How-To-Fix-RCON-Not-Connecting-in-CS2.jpg"
  alt: "How To Fix RCON Not Connecting in CS2"
---


Since Counter Strike 2 has released, I've been contacted by a number of game server owners who had been having trouble connecting to RCON with Counter Strike 2. I honestly couldn't really figure it out until I noticed I also had the same issue and required it for our servers at [Game Host Bros](https://www.gamehostbros.com/).

_**ps. RCON is only accessible from external apps, NOT from the game client itself. It's broken in CS2.**_  
_**pps. You shouldn't use RCON as it's insecure, and you should use your panels API if possible**_

No matter what I tried, it would always say **Could not connect to the server. Check host/IP and port!**

What I discovered from my testing is **this is actually to do with docker, especially if you're starting the server with the +ip flag**. It turns out that there are 2 issues at play when you can't connect via RCON in CS2.

Let me show you an example on how to enable RCON.

**Here is the original startup command:** `./game/cs2.sh -dedicated +ip 51.243.53.6 -port 27015 -maxplayers 7 +map de_mirage +game_type 0 +game_mode 0`

**And here is the modified startup command:** `./game/cs2.sh -dedicated +ip 0.0.0.0 -usercon -port 27015 -maxplayers 7 +map de_mirage +game_type 0 +game_mode 0`

Let me explain what the above changes do.

**`+ip 0.0.0.0`** - What we are doing is allowing CS2 to listen on any ipv4 address. This is important because internally on most peoples setups, they will be using the internal docker IP.

**`-usercon`** - This startup command in is used to enable the use of RCON (Remote Console) commands.

I've also included all the RCON commands for CS2 so you can quickly get everything configured. You can view the full [Counter Strike 2 commands list here](https://www.ghostcap.com/cs2-commands/).

Name

Description

rcon

Issue an rcon command.

rcon\_address

Address of remote server if sending unconnected rcon commands (format x.x.x.x:p)

rcon\_connected\_clients\_allow

Allow clients to use rcon commands on server.

rcon\_password

remote console password.

vconsole\_rcon\_server\_details

when non-empty allows for easy vconsole connection to the dedicated server.

There you go, you should be all setup and connected now. If this helped you, come and join our Discord and let me know. I would love to hear form you.