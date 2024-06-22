---
wpId: 9000
title: 'Transfer Soulmask World Save  [Upload Your Save To A Server]'
description: 'Have you just bought a Soulmask server and need to ...'
type: post
createdAt: 2024-06-05T17:52:55
modifiedAt: 2024-06-05T17:52:57
author: pedrotski
categories:
  - gaming
  - soulmask
featuredMedia:
  id: 9006
  src: "./soulmask-world-transfer-migration.jpg"
  alt: "soulmask world transfer migration"
---


Have you just bought a [Soulmask server](https://www.gamehostbros.com/soulmask-server-hosting/) and need to upload your existing local save to the server? Or maybe you already have a server and need to transfer your world and player data between the two.

In this guide, we will show you how to migrate your Soulmask server without losing any data. Please be aware that all player data is contained in the world.db file, and there is currently no way to modify this. This also means that you cannot merge 2 saved worlds.

## Soulmask Save Locations

Here is where you will find both the Soulmask world save file and config.

**Dedicated Server:**

*   `/WS/Saved/GameplaySettings/GameXishu.json`
*   `/WS/Saved/Worlds/Dedicated/Level01_Main/world.db`

**Local Windows PC:**

*   `%LOCALAPPDATA%\WS\{YOUR-STEAM-ID}\2646460\AutoGames\{YOUR-GAME-INVITE-ID}\GameXishu.json`
*   `%LOCALAPPDATA%\WS\{YOUR-STEAM-ID}\2646460\AutoGames\{YOUR-GAME-INVITE-ID}\world.db`

## Transfer From Another Soulmask Dedicated Server

Here is how you can transfer your Soulmask save to another server.

1.  Stop your server.
2.  On your existing server, download these 2 files /WS/Saved/GameplaySettings/GameXishu.json and /WS/Saved/Worlds/Dedicated/Level01\_Main/world.db
3.  Log into your new server using the file manager or FTP and navigate to the same locations as above and delete the existing `GameXishu.json` and `world.db` files. (Assuming you don’t want to save them, otherwise back them up)
4.  Copy your files from your previous server.
5.  Start your Soulmask server.

## Transfer From A Local PC (Coop Save)

If you need to transfer from a local save file to play multiplayer with your friends, this is how you do it.

1.  Press `WIN + R` on your keyboard and type `%LOCALAPPDATA%\WS\`.
2.  You will now see some folders, navigate to the one that has your Steam ID. (Example: 76561198106341655)
3.  Navigate to `2646460\AutoGames\` and then select the folder with the same invite code as the world you want to transfer.
4.  Copy the `world.db` and the latest `GameXishu.json` file. If your file is called `GameXishu_2.json`, then rename it to `GameXishu.json`.
5.  Login and stop your Soulmask server.
6.  Navigate to `/WS/Saved/GameplaySettings/` and replace the existing `GameXishu.json` file.
7.  Navigate to `/WS/Saved/Worlds/Dedicated/Level01_Main/` and replace the existing `world.db` file.
8.  Start your Soulmask server.

## Conclusion

Soulmask is one of the easier games to transfer worlds. It's worth noting that most server hosts actually offer free migrations, so you may want to open a support ticket with them first to make sure its done correctly.

If you get stuck at all then make sure to come and join the GhostCap Discord and some of our community members will help you out.