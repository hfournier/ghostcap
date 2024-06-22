---
wpId: 8986
title: 'Soulmask Admin Commands Guide'
description: 'In this guide, we will show you exactly how to ...'
type: post
createdAt: 2024-06-01T11:46:49
modifiedAt: 2024-06-05T09:20:24
author: pedrotski
categories:
  - gaming
  - soulmask
featuredMedia:
  id: 8989
  src: "./soulmask-admin-command-guide-ghostcap.jpg"
  alt: "soulmask admin command guide ghostcap"
---


In this guide, we will show you exactly how to give yourself admin on your Soulmask server and how you can use the different Soulmask admin commands such as teleport, invisibility etc.

## Setting An Admin Password On Soulmask

[Soulmask](https://store.steampowered.com/app/2646460/Soulmask/) is a little bit different to other games in regard to how you get admin. You actually only need to a password when starting your [Soulmask server](https://www.ghostcap.com/how-to-host-a-soulmask-server/). To do this, you need to edit your startup command to include the `-adminpsw=` modifier.

1.  Right-click your `StartServer.bat` file and click `Edit`.
2.  Add `-adminpsw=YOURPASSWORD` to the end of the startup command.

Your startup command should now look something like this

`WSServer.exe Level01_Main -server "$@" -log -UTF8Output -MULTIHOME=0.0.0.0 -EchoPort=18888 -forcepassthrough -adminpsw=YOURPASSWORD`

## How To Use Admin Commands On Soulmask

1.  Open Soulmask and connect to your server.
2.  Once connected open, press `~` tilde on your keyboard.
3.  Type `gm key YOUR-ADMIN-PASSWORD`. It should now load the admin menu.
4.  In the window, type the password again and click Become the admin.

Once you’ve made yourself an admin, simply press `~` and enter your desired command.

Description

Commands

Open GM Panel

gm key \[password\]

Add Experience

gm AddExp \[value\]

Add Mask Experience

gm Addmjexp \[value\]

Add Hunting Experience

gm Addshoulieexp \[value\]

Increase Hunting Experience

gm AddShouLieExp \[value\]

Reset Points

gm XiDian

Suicide

gm ZiSha 1

Revive

gm FuHuo

Delete Account

gm shanhao

View Own Location

GPS

Quick Recruit NPC (Aim at Target)

gm ZhaoMu

Teleport

gm Go \[position\_x\] \[position\_y\] \[position\_z\]

Clear All NPCs

gm ClearAllNpc

Remove Selected Target

gm ClearSelect

Refresh Vegetation within Range

gm ShuaXinZhiBei

Show Own Information (Quality, Skill Levels, Talents, etc.)

gm ShowInfo 1

Show Character Information (Quality, Skill Levels, Talents, etc.)

gm ShowInfo 0

Invisibility

gm SetAttr YinShen 1

Disable Invisibility

gm SetAttr YinShen 0

Repair Mask Nodes

gm JSMJ

Unlock All Map Information

gm ShowMap

Unlock All Tech Tree Nodes

gm KeJiShu

Display Barbarian Invasion Heat Information Chart

gm ShowReDu

Clear All Barbarian Invasion Heat

gm ClearAllReDu

Increase Barbarian Invasion Heat at Current Location

gm AddReDu \[value\]

Reset Tutorial Missions

gm ChongZhiRenWu

View Server Status Information

Debuginfo 1

Close Server Status Information

Debuginfo 0