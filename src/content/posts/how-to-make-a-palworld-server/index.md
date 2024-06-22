---
wpId: 8927
title: 'How to Make a Dedicated Palworld Server [Host Your Own Private Server]'
description: 'Are you excited to explore the world of Palworld with ...'
type: post
createdAt: 2024-06-13T00:59:08
modifiedAt: 2024-06-13T01:00:51
author: pedrotski
categories:
  - hosting-guides
  - palworld
featuredMedia:
  id: 9026
  src: "./how-to-make-a-palworld-server-heading.jpg"
  alt: "how to make a palworld server heading"
---


Are you excited to explore the world of Palworld with your friends? To make that adventure possible, you’ll need to set up your very own Palworld server. Don't worry if you're new to this; in this comprehensive guide, I'll take you step-by-step through the entire process. By the end, you’ll have your own Palworld server up and running, ready for countless hours of fun, even if you've never set up a game server before.

This guide assumes you're using Windows as your operating system.

## How To Set up a Palworld Dedicated Server

To set up a Palworld server, we will use a free tool called [Easy SteamCMD](https://github.com/ghostcap-gaming/easy-steamcmd). This is the free program that we will use that downloads everything required for your new Palworld server, and keeps it updated every time the server starts.

1.  Download [Easy SteamCMD](https://github.com/ghostcap-gaming/easy-steamcmd).
2.  Extract the files for Easy SteamCMD to your C:\\ drive in a new folder called `palworld`.
3.  Replace the contents of `easysteamcmd-config.txt` with [this Palworld version](https://github.com/ghostcap-gaming/easy-steamcmd/tree/main/game-configs/palworld).
4.  Edit the `STARTUP_COMMAND` with the settings you want to change such as the Server name, password etc.
5.  Run `easysteamcmd.bat` and let it install. Make sure you install any Unreal Engine popups it asks for.
6.  Your Palworld server should now be running and you can connect from `YourPublicIP:8211`. Any time you want to run your game server again, simply run easysteamcmd.bat.

## Transfer from a Palworld Co-op Save

Now that your Palworld server is live, you will need to copy in your existing save file.

1.  Go to `Appdata\Local\PAL\Saved\SaveGames` on your local computer and backup the file (You may need to enable hidden folders under the `View` tab).
2.  In your Palworld server directory, navigate to `PAL/Save/Savegame/0`.
3.  You will see a folder with a random number like `723687123871537817253`. You need to copy your existing world data into that folder.
4.  The folder with random numbers on your server must stay as it is. Only delete the contents inside and then copy your existing world files in.

## Finding Your IP Address

To connect to your Palworld server, you’ll need to know your IP address. Here’s how you can find it on Windows:

1.  Press `Win + R` to open the Run dialog.
2.  Type `cmd` and press Enter to open the Command Prompt.
3.  In the Command Prompt, type `ipconfig` and press Enter.
4.  Look for the line that says `IPv4 Address`. This is your local IP address. It usually looks something like `192.168.1.xxx`.

#### For an Internet (WAN) Connection:

1.  Open your web browser.
2.  Go to a website like [WhatIsMyIP](https://www.whatismyip.com) or simply search "What is my IP" on Google.
3.  Your public IP address will be displayed at the top of the page.

#### Important Note:

*   **Local IP Address:** Use this if you and your friends are on the same network.
*   **Public IP Address:** Use this if your friends are connecting from different locations over the internet.

#### Configuring Port Forwarding:

If your friends are connecting over the internet, you’ll also need to set up port forwarding on your router:

1.  Log in to your router's admin page. This is usually done by typing your router’s IP address into your web browser (commonly `192.168.1.1` or `192.168.0.1`).
2.  Find the port forwarding section in your router's settings.
3.  Add a new port forwarding rule:
    *   **Service Name:** Palworld
    *   **Port Range:** 8211 Internal / 8211 External
    *   **Local IP:** Enter your computer’s local IP address (from the `ipconfig` command).
    *   **Protocol:** Select `UDP`.
4.  Save the settings and restart your router if necessary.

Now, with your IP address and port forwarded, your friends can join your Palworld server using the IP address in the format: `YourPublicIP:8211`.

We have a full guide on [port forwarding for Palworld you can read here](https://www.ghostcap.com/how-to-port-forward-for-palworld/).

## Edit Your Server Settings

There are 2 ways to edit your config in Palworld. The `WorldOptions.sav` file is preferred over `PalWorldSettings.ini` because it allows comprehensive configuration of all server settings, including those not accessible through `PalWorldSettings.ini`, like `BaseCampWorkerMaxNum`. This single file consolidates all settings, simplifying server management by eliminating the need to maintain multiple configuration files. However, note that using `WorldOptions.sav` will overwrite any settings in `PalWorldSettings.ini`.

### Editing PalWorldSettings.ini

1.  Stop your Palworld Server.
2.  Navigate to **Management** > **File Manager** on the left-hand side.
3.  Go to `/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4.  Make the necessary changes to the `PalWorldSettings.ini` file.
5.  Start the server.

### Editing WorldOptions.sav

1.  Generate a `WorldOptions.sav` file with your desired settings on [this website](https://palworldoptions.com/).
2.  Stop your Palworld Server.
3.  Navigate to **Management** > **File Manager** on the left-hand side.
4.  Go to `Pal/Saved/SaveGames/0/YOURWORLDFILE` and upload the `WorldOptions.sav` file into the folder containing your `LevelMeta.sav` and `Level.sav`.
5.  Start the server.

## Conclusion

There you have it, your dedicated Palworld server should be up and running. If you got stuck at any stage, then come and join our [Discord](https://www.ghostcap.com/discord) and ask our community for help.