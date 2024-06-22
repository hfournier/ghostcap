---
wpId: 8284
title: 'How To Play TF2 In Offline Mode'
description: 'If you have ever tried to play TF2 offline before ...'
type: post
createdAt: 2023-08-26T08:20:45
modifiedAt: 2023-08-26T08:46:54
author: pedrotski
categories:
  - team-fortress-2
featuredMedia:
  id: 8287
  src: "./tf2-offline-mode.jpg"
  alt: "tf2 offline mode"
---


If you have ever tried to play TF2 offline before using the training mode, you may have encountered the "Secure Connection Failed" error after playing the game for a few minutes. Luckily, there is a fix that I'm going to show you that will allow you to play TF2 without internet, while also being able to let your friends join over LAN.

Before you start, make sure you have downloaded and installed the game beforehand. If your Steam client is already running, you might need to restart it to switch to offline mode. Go to the "Steam" menu in the top-left corner, select "Go Offline," and then click "Restart in Offline Mode."

## How to play TF2 in offline mode

Once Steam restarts in offline mode, you can launch Team Fortress 2 from your library. What you are going to do now is to start an offline listen server. A listen server means you can play on the same computer you're hosting the game from. Once you're at the game main menu, follow these steps. 

1.  Open the console by pressing the tilde key (~) on your keyboard (It's next to the number 1 on the top left).
2.  Type `sv_lan 1` in the console and press enter to disable the Steam authentication.
3.  Type the command `map <mapname>`. Replace `<mapname>` with the desired map filename, for example, `map cp_dustbowl`.
4.  Press enter to load the map.

Now it will load into the map you have selected. You can find a list of all the TF2 [map filenames here](https://wiki.teamfortress.com/wiki/List_of_maps).

## How to add bots in offline mode

As you may notice, there are no bots in your offline server. Let's fix that. 

1.  Open the console again by pressing the tilde key (~).
2.  Type `tf_bot_quota 32`

This will fill the server with 32 bots, or whatever you set the number to. 

## How to have friends join your offline server

Now you have your offline server running with bots, maybe you want a friend or family member to join to play offline with you. This is quite simple to do, but there are two parts to it. 

### Find the IP address

First, you need the IP address of the offline server. To find this, simply open the console by pressing the tilde key (~) on your keyboard and type `status`. 

![Game-Host-Bros-GHOSTCAP-TF2](@assets/images/posts/tf2-offline-mode/Game-Host-Bros-GHOSTCAP-TF2.jpg)

It will bring up a screen that looks like this. Look at the **udp/ip** section and take note of that number. That's called an IP address. 

For you, it may look something like 192.168.0.5 or 10.1.1.5

### Connect to the offline server

Now go to the other computer and load up Team Fortress like normal. Open the console by pressing the tilde key (~) and type `connect <ipaddress>`. For example, `connect 192.168.0.5`

It then should connect you to the server. If you can't connect because the server is full, you may need to reduce the amount of bots first.

Remember, using this method, you won't be able to have people from the internet joining your server. If you want people from the outside to join, you would need to get [Team Fortress 2 server hosting](https://www.ghostcap.com/tf2-server-hosting/).

## Conclusion

Now you're a pro at setting up an offline practice server. This is great for basic training for things such as learning maps, game modes or more specialty things such as rocket jumping or strafe jumps. 

Keep in mind that while in offline mode, any Steam client features that require a connection will remain unavailable. This includes player statistics, achievements, and the in-game store. Additionally, make sure your computer meets the minimum system requirements for TF2 to ensure a smooth gaming experience.

By following these steps, you can enjoy Team Fortress 2 without an active internet connection, providing entertainment even during times when online gaming isn't an option.