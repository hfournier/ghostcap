---
wpId: 7261
title: 'How To Setup FastDL (CSGO, GMOD, TF2, L4D)'
description: 'Have you ever been excited to start a new game ...'
type: post
createdAt: 2023-02-27T19:20:06
modifiedAt: 2023-11-23T21:24:19
author: pedrotski
categories:
  - hosting-guides
featuredMedia:
  id: 7276
  src: "./How-To-Setup-FastDL.jpg"
  alt: "How To Setup FastDL"
---


Have you ever been excited to start a new game server filled with custom content, only to be met with frustrating download errors or error boxes?

Fear not, because we have the solution to your problems: FastDL (fast download).

In this post, we'll guide you through the correct process of setting up FastDL for popular games like CSGO, Garry's Mod, TF2, and L4D. Pretty much any source game you can think of, it's going to be the same guide.

Just keep in mind, a FastDL is simply a website and 2 lines of config. Don't overcomplicate it and see my examples below that help explain it.

So, get ready to level up your gaming experience and say goodbye to those pesky download issues!

## What Exactly Is A FastDL Server?

<img decoding="async" width="1366" height="768" src="/images/posts/how-to-setup-fastdl/custom-content-source-game-fastdl.jpg" alt="Alt attribute missing" srcset="/images/posts/how-to-setup-fastdl/custom-content-source-game-fastdl.jpg 1366w, /images/posts/how-to-setup-fastdl/custom-content-source-game-fastdl-768x432.jpg 768w" sizes="(max-width: 1366px) 100vw, 1366px" />

FastDL is simply a website that hosts all the custom content for your source game server.

For example, if you want to host a custom map on your server, the client has to be able to download that map to their own computer to be able to join. The same thing goes for models, materials, particles, and sounds.

Here are some examples of what a FastDL looks like:

*   https://surf.gcgfast.com/csgo/
*   [https://www.gcgfast.com/csgo/](https://www.gcgfast.com/csgo/)
*   [https://fastdl.gflclan.com/csgo](https://fastdl.gflclan.com/csgo)
*   [https://kzgfast.com/csgo/](https://kzgfast.com/csgo/)
*   [https://www.gcgfast.com/](https://www.gcgfast.com/)

As you will notice most files are in .bz2 format. This is because they are compressed files.

When you download custom content the game client will try to download a .bz2 format file first. If that's not available the download will fall back to just the raw file.

It's not necessary for your FastDL to be compressed.

## Prerequisites

To get started all your need is a game server and a web host with FTP access. You must have your domain already set up and accessible from the internet (aka, you can go to the website domain and something will show up).

You can use any web host you want but If you don't already have a web server, then you can [get one with unlimited storage from Dreamhost](https://www.ghostcap.com/get/dreamhost) (you can also use this same account to run your gaming website, stats website, etc).

You may have seen other guides out there that tell you to create your own Apache/Nginx server or something on the game server itself.

I strongly advise against this as it can lead to problems with your game server lagging if it's not set up correctly and, to be honest, that is the old-school way of doing things.

No large gaming community uses FastDL on the same machine their game servers are on.

## How To Setup FastDL

Setting up a FastDL is quite simple and is the same for most source games. For this example, I'm going to be using CSGO, uploading a custom map called bhop\_y.bsp, and [ranks for a Faceit levels plugin](https://forums.alliedmods.net/showthread.php?t=324610).

This is going to be the same for most source games. In this tutorial, the root domain is going to be https://test.gcgfast.com

### Step 1. Log into your web server

<img decoding="async" width="1328" height="434" src="/images/posts/how-to-setup-fastdl/DreamHost-Web-Panel-Users-Files.jpg" alt="DreamHost-Web-Panel-Users-Files" srcset="/images/posts/how-to-setup-fastdl/DreamHost-Web-Panel-Users-Files.jpg 1328w, /images/posts/how-to-setup-fastdl/DreamHost-Web-Panel-Users-Files-768x251.jpg 768w" sizes="(max-width: 1328px) 100vw, 1328px" />

Log in to your web server using FTP. For this example, we are using [Dreamhost](https://www.ghostcap.com/get/dreamhost) but your web host would have provided you with these details. On Dreamhost, you can get your FTP details from here.

Use an FTP tool [such as Filezilla](https://filezilla-project.org/download.php?show_all=1) to log into your FTP.

Once you log in, select the root directory of the website. In our case, it will be: [https://test.gcgfast.com](https://test.gcgfast.com)

For you, it will be whatever your domain is set as.

### Step 2. Create a folder for the game

<img decoding="async" width="1231" height="855" src="/images/posts/how-to-setup-fastdl/fastdl-FTP.jpg" alt="Alt attribute missing" srcset="/images/posts/how-to-setup-fastdl/fastdl-FTP.jpg 1231w, /images/posts/how-to-setup-fastdl/fastdl-FTP-768x533.jpg 768w" sizes="(max-width: 1231px) 100vw, 1231px" />

We need to upload the custom content to the server. First, in the root directory of your website create a folder called csgo. If you're using another game then call this folder css, tf2, l4d2 etc.

This is to keep things organized especially if you're going to use the FastDL for multiple games.

This means our FastDL directory is [https://test.gcgfast.com/csgo](https://test.gcgfast.com/csgo)

### Step 3. Upload the custom content

<img decoding="async" width="1231" height="856" src="/images/posts/how-to-setup-fastdl/fastdl-FTP-after-folders-are-created.jpg" alt="fastdl FTP after folders are created" srcset="/images/posts/how-to-setup-fastdl/fastdl-FTP-after-folders-are-created.jpg 1231w, /images/posts/how-to-setup-fastdl/fastdl-FTP-after-folders-are-created-768x534.jpg 768w" sizes="(max-width: 1231px) 100vw, 1231px" />

Now it's time to upload the custom content. This has to match the exact location and file path as it does on the game server itself.

So for the map, we need to create a folder on the Fastdl called maps, and I'm going to upload the map bhop\_y.bsp to the folder.

This means the map is now located at [https://test.gcgfast.com/csgo/maps/](https://test.gcgfast.com/csgo/maps/).

For the plugin materials, we need to upload the folder "materials" provided in the plugin.

So we should have a folder called [https://test.gcgfast.com/csgo/materials/panorama/images/icons/xp/](https://test.gcgfast.com/csgo/materials/panorama/images/icons/xp/).

As you can see the [plugin developer](https://forums.alliedmods.net/showthread.php?t=324610) pre-compressed the files for us.

### Step 4. Configure your game server to look at your FastDL

![Game-Host-Bros-My-CSGO-Server-Edit-File](@assets/images/posts/how-to-setup-fastdl/Game-Host-Bros-My-CSGO-Server-Edit-File.jpg)

Once we have uploaded our files and folders, we need to set our server to use the FastDL we have created.

On your server navigate to /cfg/server.cfg (if you don't have this file then create it).

Paste the following lines:  
`sv_downloadurl "https://test.gcgfast.com/csgo"   sv_allowdownload 1`

Make sure there is no forward slash at the end of the URL.

### Step 5. Restart your game server and test

<img decoding="async" width="1592" height="898" src="/images/posts/how-to-setup-fastdl/fastdl-example.jpg" alt="fastdl example" srcset="/images/posts/how-to-setup-fastdl/fastdl-example.jpg 1592w, /images/posts/how-to-setup-fastdl/fastdl-example-768x433.jpg 768w, /images/posts/how-to-setup-fastdl/fastdl-example-1536x866.jpg 1536w" sizes="(max-width: 1592px) 100vw, 1592px" />

Now you can restart your game server and connect. If you have the developer console enabled you can press the "~" button on your keyboard and check if the files are actually downloading.

As you can see in this example there is an error about a missing .nav file for the map, we can safely ignore this error. If you want to get rid of it then you can upload the .nav file from your server to your FastDL.

## Frequently Asked Questions

If you have followed the guide above, everything should be working as intended but here are the most common questions about fast downloads.

### Can I make the resources smaller?

Yes, you can. You will need to compress the files into .bz2 format.

My friend GAMMACASE has made a script that will compress all custom content so you can quickly upload it to your FastDL server.

You can get it from [here](https://github.com/GAMMACASE/FastdlUpdater).

### I always see an error on downloaded files

If you have not compressed your files in .bz2 format, it will say "Error downloading" when it tries to download the compressed files first.

Afterward, it should download the raw file.

If you always get an error when downloading then double-check that the location of the file on the FastDL matches that on the game server.

### Files are not downloading at all

How the source engine works is files need to be added to the download tables. We don't need to do this for maps but we must do this for things like skins, sounds, etc.

Most plugins will actually add files to the download tables automatically, but if they don't you will need to use a Sourcemod plugin on your server.

I suggest you use: [https://forums.alliedmods.net/showthread.php?p=2482368](https://forums.alliedmods.net/showthread.php?p=2482368)

Each addon file the client needs to download must be added to the plugin.