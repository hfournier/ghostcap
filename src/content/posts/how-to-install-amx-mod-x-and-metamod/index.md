---
wpId: 8384
title: 'How To Install AMX Mod X and Metamod [Install Plugins On HL, CS1.6, DOD, SVEN]'
description: 'In this post, we''re stepping away from the hard-to-follow tutorials ...'
type: post
createdAt: 2023-10-15T17:15:42
modifiedAt: 2024-01-01T15:11:58
author: pedrotski
categories:
  - counter-strike
featuredMedia:
  id: 8388
  src: "./Install-AMX-Mod-X-and-Metamod.jpg"
  alt: "How To Install AMX Mod X and Metamod"
---


In this post, we're stepping away from the hard-to-follow tutorials and bringing you a straightforward, easy-to-follow guide on installing AMXX and Metamod into your favorite GoldSrc games. Whether you're aiming to install new plugins, customize game modes, or simply breathe new life into the classics, we've got you covered. So, let's embark on this journey together, reviving and enhancing the games that have left an indelible mark on the gaming community. 

By the end of it you will be able to install mods and plugins on games such as Half-Life Counter-Strike 1.6, Day of Defeat, and Sven Co-op (in fact nearly any GoldSrc server). 

**PS.** With my hosting company, we can actually install this on the server you have with us. Check out [Game Host Bros](https://www.gamehostbros.com/) to learn more.

```html
<style>a.no-border-on-hover, a.no-border-on-hover:hover { border-bottom: none !important; text-decoration: none !important; } </style>
```
 [![Game Host Bros Promo](@assets/images/posts/how-to-install-amx-mod-x-and-metamod/gamehostbrospromoround.png)](https://www.gamehostbros.com/)

## How to Install AMX Mod X and Metamod

Now let's get straight into the step-by-step guide by downloading the files. If you need a video guide, you can find it on the **[GhostCap Youtube channel here](https://www.youtube.com/c/GhostCapGaming)**.

### 1\. Downloading Required Files:

*   **AMX Mod X**: Download the latest release AMX Mod X base for Linux from the official website: [AMX Mod X Downloads](https://www.amxmodx.org/downloads.php)
*   **Metamod**: Download the Metamod v1.21.1-am binary from the AMX Mod Website: [Metamod Download](https://www.amxmodx.org/downloads.php)

_note: if you're using a Windows server, use the Windows version, not Linux_

### 2\. Connect to Your Game Server:

Use [**Filezilla**](https://filezilla-project.org/download.php?show_all=1) to connect to your server via SFTP/FTP. Ensure you have the necessary credentials ready.

### 3\. Locate Game Directory:

Once connected, navigate to the main game directory. For our servers, it’s typically:

`/cstrike`

### 4\. Create the Addons Folder:

In the `/cstrike` directory, create a new folder named `addons`.

### 5\. Upload AMX Mod X:

*   Extract the AMX Mod X files you downloaded.
*   Upload the `amxmodx` folder to:

`/cstrike/addons`

### 6\. Set Up Metamod:

*   Inside `/cstrike/addons`, create a new folder called `metamod`.
*   Extract the Metamod files you downloaded and upload them into:

`/cstrike/addons/metamod`

### 7\. Create the plugins.ini File:

Navigate to:

`/cstrike/addons/metamod`

Here, create a new file called `plugins.ini`.

### 8\. Configure the plugins.ini File:

Open `plugins.ini` and add the following line:

`linux addons/amxmodx/dlls/amxmodx_mm_i386.so`

Save and close the file.

### 9\. Modify liblist.gam:

*   Go back to the `/cstrike` directory.
*   Find and open the file named `liblist.gam`.
*   Look for the line that starts with `gamedll_linux`. Replace the entire line with:

`gamedll_linux "addons/metamod/metamod.so"`

### 10\. Testing:

*   Start your game server.
*   Once it's up and running, open the in-game console and type the command `meta`.
*   If everything was set up correctly, you should see Metamod's information.

## Conclusion

We hope this helps to give you clear direction on installing AMX Mod and Metamod. I know recently what I was looking around it seems like all the documentation was incorrect, or buried in some forum thread from 2005. If you still get stuck then make sure you come and join the GhostCap Discord and someone will be able to help you out.