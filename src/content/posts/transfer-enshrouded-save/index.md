---
wpId: 9074
title: 'How to Transfer Your Enshrouded World Save [Local Co-op or Dedicated Server]'
description: 'Have you recently purchased an Enshrouded server and need to ...'
type: post
createdAt: 2024-06-19T15:29:05
modifiedAt: 2024-06-19T15:30:21
author: pedrotski
categories:
  - enshrouded
  - gaming
featuredMedia:
  id: 9077
  src: "./Transfer-Your-Enshrouded-World-Save.jpg"
  alt: "Transfer Your Enshrouded World Save"
---


Have you recently purchased an [Enshrouded server](https://www.gamehostbros.com/enshrouded-server-hosting/) and need to upload your existing local save? Or perhaps you're looking to transfer your world and player data between servers.

In this guide, we'll walk you through the process of migrating your Enshrouded server without losing any data. Whether you're a new server owner or an experienced one, this step-by-step tutorial will ensure a smooth and successful transfer.

## Enshrouded Save Locations

Here is where you will find your Enshrouded save file on both Windows and a rented server.

**Dedicated Server:**

*   `/savegame`

**Local Windows PC:**

1.  Open your Steam games library, right click Enshrouded and select `Manage > Browse Local Files`.
2.  Navigate to `userdata > (Your SteamID) > 1203620 > Remote`.
3.  Copy the most recent file to a safe location.

## Transfer From Another Enshrouded Dedicated Server

Here is how you can transfer your Enshrouded save to another server.

1.  Stop your server.
2.  On your existing server, navigate to `/savegame` and download the file called `3ad85aea`.
3.  Log into your new server using the file manager or FTP and navigate to the same locations as above and delete the existing files inside `/savegame`
4.  Copy your files from your previous server to `/savegame`.
5.  Start your Enshrouded server.

## Transfer From A Local PC (Coop Save)

If you need to transfer from a local save file to play multiplayer with your friends, this is how you do it.

1.  Open your Steam games library, right click Enshrouded and select `Manage > Browse Local Files`.
2.  Navigate to `userdata > (Your SteamID) > 1203620 > Remote` and copy your `3ad85aea` file
3.  Login and stop your Enshrouded server.
4.  Navigate to `/savegame` and upload your `3ad85aea` file.
5.  Start your Enshrouded server.

## Conclusion

Enshrouded is one of the easier games to transfer worlds, as there is [no config, commands](https://www.ghostcap.com/enshrouded-console-commands/) or anything that needs to be transferred. It's worth noting that most server hosts actually offer free migrations, so you may want to open a support ticket with them first to make sure it's done correctly.

If you get stuck at all then make sure to come and join the GhostCap Discord and some of our community members will help you out.