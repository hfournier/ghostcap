---
wpId: 9085
title: 'How To Setup A Dedicated Counter-Strike 2 Server [Easy CS2 Guide]'
description: 'Do you have an old PC kicking around doing nothing? ...'
type: post
createdAt: 2024-06-22T03:48:04
modifiedAt: 2024-06-22T03:48:06
author: pedrotski
categories:
  - counter-strike
  - gaming
featuredMedia:
  id: 9091
  src: "./cs2-dedicated-server-guide-easy.jpg"
  alt: "cs2 dedicated server guide easy"
---


Do you have an old PC kicking around doing nothing? Now is the perfect time to turn that old PC into a private CS2 server for you and your friends to practice on. In this guide, I'll show you exactly how you can set up your CS2 dedicated server the easiest way possible, PLUS I'll show you how you can add custom mods and plugins to make it a unique server setup.

This guide assumes you're using Windows as your operating system.

## How To Set up a Counter Strike 2 Dedicated Server

To set up your new CS2 server, you will need to use a free tool called [Easy SteamCMD](https://github.com/ghostcap-gaming/easy-steamcmd). This is the free program that we will use that downloads everything required for your new Counter Strike server, and keeps it updated every time the server starts.

1.  Download [Easy SteamCMD](https://github.com/ghostcap-gaming/easy-steamcmd).
2.  Extract the files for Easy SteamCMD to your C:\\ drive in a new folder called `cs2server`.
3.  Replace the contents of `easysteamcmd-config.txt` with [this CS2 version](https://github.com/ghostcap-gaming/easy-steamcmd/blob/main/game-configs/counter-strike-2/).
4.  Edit the `STARTUP_COMMAND` with the settings you want to change such as the Server name, password etc.
5.  Run `easysteamcmd.bat` and let it install. Make sure you install any popups it asks for.
6.  Your CS2 server should now be running with the IP and port `YourPublicIP:27015`. Any time you want to run your game server again, simply run easysteamcmd.bat.

## Adding your GSLT (Steam Game Server Login Token)

Now that your server is running, you will need to add a GSLT, so people can connect to your server.

1.  Go [here](https://steamcommunity.com/dev/managegameservers) and login with your Steam account.
2.  Under `App ID` enter `730` for CS2, then name the memo anything you want.
3.  Open your `easysteamcmd-config.txt` and replace YOURGSLT with your GSLT
4.  Restart your server.

Your startup command should now look something like this:

`STARTUP_COMMAND=game\bin\win64\cs2.exe -dedicated +ip 0.0.0.0 -port 27015 +map de_mirage -maxplayers 31 +sv_setsteamaccount 8BFB0F2A16079CDC5C5173421989727B +hostname "Hosted With Easy SteamCMD"`

## Finding Your IP Address

To connect to your CS2 server, you’ll need to know your IP address. Here’s how you can find it on Windows:

1.  Press `Win + R` to open the Run dialog.
2.  Type `cmd` and press Enter to open the Command Prompt.
3.  In the Command Prompt, type `ipconfig` and press Enter.
4.  Look for the line that says `IPv4 Address`. This is your local IP address. It usually looks something like `192.168.1.xxx`.

#### For an Internet (WAN) Connection:

1.  Open your web browser.
2.  Go to a website like [WhatIsMyIP](https://www.whatismyip.com/) or simply search "What is my IP" on Google.
3.  Your public IP address will be displayed at the top of the page.

#### Important Note:

*   **Local IP Address:** Use this if you and your friends are on the same network.
*   **Public IP Address:** Use this if your friends are connecting from different locations over the internet.

#### Configuring Port Forwarding:

If your friends are connecting over the internet, you’ll also need to set up port forwarding on your router:

1.  Log in to your router's admin page. This is usually done by typing your router’s IP address into your web browser (commonly `192.168.1.1` or `192.168.0.1`).
2.  Find the port forwarding section in your router's settings.
3.  Add a new port forwarding rule:
    *   **Service Name:** CS2
    *   **Port Range:** 27015 Internal / 27015 External
    *   **Local IP:** Enter your computer’s local IP address (from the `ipconfig` command).
    *   **Protocol:** Select `UDP`.
4.  Save the settings and restart your router if necessary.

Now, with your IP address and port forwarded, your friends can join your Counter Strike 2 server using the IP address in the format: `YourPublicIP:27015`.

Here is a video you can send to your friends on how they can connect to your CS2 server.

[https://www.youtube.com/watch?v=c4m\_XmZyUv8](https://www.youtube.com/watch?v=c4m_XmZyUv8 "Play video \"How To Connect To A Server IP Address In CS2 [Join Private Servers]\"")

Video can't be loaded because JavaScript is disabled: [How To Connect To A Server IP Address In CS2 \[Join Private Servers\] (https://www.youtube.com/watch?v=c4m\_XmZyUv8)](https://www.youtube.com/watch?v=c4m_XmZyUv8 "How To Connect To A Server IP Address In CS2 [Join Private Servers]")

## Edit Your Server Settings

Here is how you can edit some of the most common server settings for CS2.

### How to change the game mode (Casual, Competitive etc)

To change the game mode, you need to edit the STARTUP\_COMMAND by adding `+game_mode 0 +game_type 0` to the end.

Here is a list of the game mode and type IDs so you can simply copy and paste it to your startup command. 

Game Mode Name

Game Mode ID

Game Type ID

Casual

0

0

Co-op Strike

1

4

Competitive

1

0

Custom

0

3

Deathmatch

2

1

Demolition

1

1

Guardian

0

4

Training Day

4

0

Training

0

2

Weapons Expert

3

0

Wingman

2

0

Here is an example of your startup command when the server is set to the Competitive game mode:

`STARTUP_COMMAND=game\bin\win64\cs2.exe -dedicated +ip 0.0.0.0 -port 27015 +map de_mirage -maxplayers 31 +sv_setsteamaccount 8BFB0F2A16079CDC5C5173421989727B +hostname "Hosted With Easy SteamCMD"` `+game_mode 1 +game_type 0`

### How to change your game mode settings

The next thing you might want to do is to change your game settings such as the time limit, starting weapons etc. Most guides will tell you to use server.cfg, but this is incorrect, as server.cfg is hardly used in CS2.

You can find these settings under `/game/csgo/cfg/` folder and then select the game mode config file that matches your settings above (gamemode\_casual.cfg for example). **DO NOT** edit this file, read below first.

You will then need to copy and paste this file but add \_server to the end of it, **otherwise your settings will be overwritten once the server updates**. So your file should now be called `gamemode_casual_server.cfg`

This is where you make any gameplay related settings. You can find a [full list of CS2 commands here](https://www.ghostcap.com/cs2-commands/).

## How To Install Plugins

To install plugins on Counter Strike 2 you will need to install Metamod and Counter Strike Sharp. We have a full guide that [you can read here](https://www.ghostcap.com/how-to-install-cs2-plugins/).

[https://www.youtube.com/watch?v=FlsKzStHJuY](https://www.youtube.com/watch?v=FlsKzStHJuY "Play video \"How To Install Plugins on CS2 [Metamod & CounterStrikeSharp Guide]\"")

Video can't be loaded because JavaScript is disabled: [How To Install Plugins on CS2 \[Metamod & CounterStrikeSharp Guide\] (https://www.youtube.com/watch?v=FlsKzStHJuY)](https://www.youtube.com/watch?v=FlsKzStHJuY "How To Install Plugins on CS2 [Metamod & CounterStrikeSharp Guide]")

## Conclusion

That's it! Your Counter-Strike 2 dedicated server should be up and running how you want it. If you get stuck at any time, come get some help from our [friendly Discord community](https://www.ghostcap.com/discord).