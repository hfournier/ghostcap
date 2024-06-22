---
wpId: 4065
title: 'How To Install Pterodactyl Panel [EASY INSTALL SCRIPT]'
description: 'Managing game servers has always been a tedious task. But ...'
type: post
createdAt: 2021-01-21T01:31:18
modifiedAt: 2024-01-09T16:09:20
author: pedrotski
categories:
  - hosting-guides
featuredMedia:
  id: 4092
  src: "./How-To-Install-Pterodactyl-Panel.png"
  alt: "How To Install Pterodactyl Panel"
---


Managing game servers has always been a tedious task. But what If I told you there was an easier way to manage them all from one easy-to-use panel? Chances are, if you're here, you know about running game servers in a Window you don't accidentally want to close on Windows. Or how about running them as a mystery system service on Linux?

Either way, this is going to make your setup, maintenance, and scheduling 1000% easier! In this guide, we will show you how to install Pterodactyl panel using an easy-to-follow Installation script. This is literally the fastest way to get Pterodactyl up and running on your VPS or Dedicated game server.

## What Is Pterodactyl Panel?

<img decoding="async" width="2937" height="2017" src="/images/posts/install-pterodactyl-panel/Pterodactyl.png" alt="Pterodactyl" srcset="/images/posts/install-pterodactyl-panel/Pterodactyl.png 2937w, /images/posts/install-pterodactyl-panel/Pterodactyl-300x206.png 300w, /images/posts/install-pterodactyl-panel/Pterodactyl-1024x703.png 1024w, /images/posts/install-pterodactyl-panel/Pterodactyl-768x527.png 768w, /images/posts/install-pterodactyl-panel/Pterodactyl-1536x1055.png 1536w, /images/posts/install-pterodactyl-panel/Pterodactyl-2048x1406.png 2048w" sizes="(max-width: 2937px) 100vw, 2937px" />

[Pterodactyl Panel](https://pterodactyl.io/) is an open-source container-based game server management panel that has the focus of ease of use and security in mind. What makes it different compared to other solutions out there, is it's modern. If you have ever used a game server panel before, they are generally old and clunky.

Old and clunky software is not what you want for this decade of management software.

You need fast, lean, and easy to use!

But the one thing that makes Pterodactyl different is the helpful community and availability of eggs (Files that allow you to install different games) are able to be created easily. So chances are if you have an issue, you will easily find someone that is able to help you.

Let's get into this Pterodactyl Install Script guide.

## How To Install Pterodactyl Panel

[https://www.youtube.com/watch?v=UVDY7jv8s\_0](https://www.youtube.com/watch?v=UVDY7jv8s_0 "Play video \"Pterodactyl Panel Installation Guide [Quick and Easy]\"")

Video can't be loaded because JavaScript is disabled: [Pterodactyl Panel Installation Guide \[Quick and Easy\] (https://www.youtube.com/watch?v=UVDY7jv8s\_0)](https://www.youtube.com/watch?v=UVDY7jv8s_0 "Pterodactyl Panel Installation Guide [Quick and Easy]")

Even if you have NEVER used Linux before, this will be EASY!

**Depending on your skill level, I have broken this guide down into 2 sections.**

*   I'm **just starting**. I need help setting up my server from scratch. **(Start at STEP 1)**
*   Nah, bro, I'm a gun. I already have a server with Linux ready to go. **(Start at STEP 9)**

Just skip to whatever step you need to.

**Also a little warning:** Your server needs to be freshly installed before you start this. That means nothing on it. If you have installed software or games already, please reinstall the operating system.

It also only supports the following operating systems.

Operating System

Version

Supported

[Ubuntu](https://ubuntu.com/)

20.04

✅

22.04

✅

[Debian](https://www.debian.org/)

10

✅

11

✅

12

✅

[Rocky Linux](https://rockylinux.org/)

8

✅

9

✅

[AlmaLinux](https://almalinux.org/)

8

✅

9

✅

I highly suggest that you use Ubuntu 22.04. It's designed for it, and there is also a bunch of support out there for beginners.

### Step 1: Choose a server host

To start with we are going to need a dedicated server or VPS. Of course, you can use whatever you want, but for this guide, we will be using [Vultr](https://www.ghostcap.com/vultr-review/). Some hosts install bloat on their servers and you may encounter errors. For me, Vultr works all the time without issue.

To do this, go to [Vultr.com](https://www.ghostcap.com/get/vultr) and click "Deploy" on the top right-hand corner.

![](@assets/images/posts/install-pterodactyl-panel/vultr-logo-white.png)

Want $100 Free Vultr Credit?

Use our link below to signup for your new game server and get $100 credit you can use.

**No coupon required.**

Simply click the link, signup and its automatically applied to your account!

[Get $100 Vultr Credit Free!](https://www.ghostcap.com/get/vultr)

Create an account and then go to the next step.

<img decoding="async" width="1718" height="1287" src="/images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps.png" alt="vultr screenshot" srcset="/images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps.png 1718w, /images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps-300x225.png 300w, /images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps-1024x767.png 1024w, /images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps-768x575.png 768w, /images/posts/install-pterodactyl-panel/vultr-screenshot-minecraft-vps-1536x1151.png 1536w" sizes="(max-width: 1718px) 100vw, 1718px" />

### Step 2: Decide what product to buy

After you have created your [Vultr](https://www.ghostcap.com/vultr-review/) account. Click on "Products"

<img decoding="async" width="494" height="518" src="/images/posts/install-pterodactyl-panel/click-products.png" alt="click products" srcset="/images/posts/install-pterodactyl-panel/click-products.png 494w, /images/posts/install-pterodactyl-panel/click-products-286x300.png 286w, /images/posts/install-pterodactyl-panel/click-products-24x24.png 24w" sizes="(max-width: 494px) 100vw, 494px" />

### Step 3: Choose your server location

Now we need to select the server type. For this, I generally suggest going with "Cloud Computer" or "High Frequency". These are both VPS servers. If you plan on having a big server, then select DEDICATED.

Just remember that you can upgrade later if needed.

Now let's select the location you want your server to be. The closer, the better, as you will have better ping/latency.

<img decoding="async" width="1274" height="1026" src="/images/posts/install-pterodactyl-panel/select-server-and-location.png" alt="select server and location" srcset="/images/posts/install-pterodactyl-panel/select-server-and-location.png 1274w, /images/posts/install-pterodactyl-panel/select-server-and-location-300x242.png 300w, /images/posts/install-pterodactyl-panel/select-server-and-location-1024x825.png 1024w, /images/posts/install-pterodactyl-panel/select-server-and-location-768x618.png 768w" sizes="(max-width: 1274px) 100vw, 1274px" />

### Step 4: Pick your operating system

Next, we need to select the Operating System we want to run on our server. Vultr calls this "Server Type". At the time of writing, select Ubuntu 20.04 as its "Long Term Support" operating system. This is what works best with our Pterodactyl install script.

We also need to select the "Server Size". Keep in mind what game servers you want to install on Pterodactyl. For this guide, we will use a 55GB server as this will allow us to run a CS GO Server, a small Minecraft Server, and a few Discord bots with ease.

<img decoding="async" width="1248" height="984" src="/images/posts/install-pterodactyl-panel/vultr-select-server-for-pterodactyl.png" alt="vultr select server for pterodactyl" srcset="/images/posts/install-pterodactyl-panel/vultr-select-server-for-pterodactyl.png 1248w, /images/posts/install-pterodactyl-panel/vultr-select-server-for-pterodactyl-300x237.png 300w, /images/posts/install-pterodactyl-panel/vultr-select-server-for-pterodactyl-1024x807.png 1024w, /images/posts/install-pterodactyl-panel/vultr-select-server-for-pterodactyl-768x606.png 768w" sizes="(max-width: 1248px) 100vw, 1248px" />

### Step 5: Enter a hostname

Now we can actually skip the next few sections, but we need to fill out the hostname. For now, this can be used to differentiate your server.

Now simply click deploy.

<img decoding="async" width="1297" height="783" src="/images/posts/install-pterodactyl-panel/vultr-hostname.png" alt="vultr hostname" srcset="/images/posts/install-pterodactyl-panel/vultr-hostname.png 1297w, /images/posts/install-pterodactyl-panel/vultr-hostname-300x181.png 300w, /images/posts/install-pterodactyl-panel/vultr-hostname-1024x618.png 1024w, /images/posts/install-pterodactyl-panel/vultr-hostname-768x464.png 768w" sizes="(max-width: 1297px) 100vw, 1297px" />

### Step 6: Check your server is running

After that is done. you will be taken back to the Products page. Wait until it is running and click your server name. This may take around 5 - 10 mins to deploy.

<img decoding="async" width="1380" height="300" src="/images/posts/install-pterodactyl-panel/server-running-on-vultr-and-pterodactyl.png" alt="server running on vultr and pterodactyl" srcset="/images/posts/install-pterodactyl-panel/server-running-on-vultr-and-pterodactyl.png 1380w, /images/posts/install-pterodactyl-panel/server-running-on-vultr-and-pterodactyl-300x65.png 300w, /images/posts/install-pterodactyl-panel/server-running-on-vultr-and-pterodactyl-1024x223.png 1024w, /images/posts/install-pterodactyl-panel/server-running-on-vultr-and-pterodactyl-768x167.png 768w" sizes="(max-width: 1380px) 100vw, 1380px" />

### Step 7: Connect to your dedicated server

All you need to do here is take note of your Username and Password.

Once you have them. Click on the "Open console" button on the top right. This will open what is called a terminal window. This is accessing your server directly now.

<img decoding="async" width="1262" height="556" src="/images/posts/install-pterodactyl-panel/access-ssh-vultr.png" alt="access ssh vultr" srcset="/images/posts/install-pterodactyl-panel/access-ssh-vultr.png 1262w, /images/posts/install-pterodactyl-panel/access-ssh-vultr-300x132.png 300w, /images/posts/install-pterodactyl-panel/access-ssh-vultr-1024x451.png 1024w, /images/posts/install-pterodactyl-panel/access-ssh-vultr-768x338.png 768w" sizes="(max-width: 1262px) 100vw, 1262px" />

### Step 8: Login to your dedicated server

This is the last step for the starter install.

After you open the console it should look like this where you can log in. Simply type your Username (Usually root) and your password. If it doesn't look like this, give it 5 more mins, as it may still be installing. If it still doesn't look like this, then click "Send CtrlAltDel" on the top right to reboot the machine.

<img decoding="async" width="1050" height="121" src="/images/posts/install-pterodactyl-panel/vultr-terminal.png" alt="vultr terminal" srcset="/images/posts/install-pterodactyl-panel/vultr-terminal.png 1050w, /images/posts/install-pterodactyl-panel/vultr-terminal-300x35.png 300w, /images/posts/install-pterodactyl-panel/vultr-terminal-1024x118.png 1024w, /images/posts/install-pterodactyl-panel/vultr-terminal-768x89.png 768w" sizes="(max-width: 1050px) 100vw, 1050px" />

### Step 9: Run the Pterodactyl install script

Once you have logged in to your server's console. We need to now run the Pterodactyl Install Script.

All you need to do is to copy this and paste it into the terminal.

> bash <(curl -s https://pterodactyl-installer.se)

After that, press enter.

<img decoding="async" width="1047" height="455" src="/images/posts/install-pterodactyl-panel/pterodactyl-script-install.png" alt="pterodactyl script install" srcset="/images/posts/install-pterodactyl-panel/pterodactyl-script-install.png 1047w, /images/posts/install-pterodactyl-panel/pterodactyl-script-install-300x130.png 300w, /images/posts/install-pterodactyl-panel/pterodactyl-script-install-1024x445.png 1024w, /images/posts/install-pterodactyl-panel/pterodactyl-script-install-768x334.png 768w" sizes="(max-width: 1047px) 100vw, 1047px" />

### Step 10: Fill out the options

Now it's going to ask us what we would like to do. We want to install the Panel AND Wings. So that is option 2.

The Panel is the web game server panel itself. Wings is the node daemon that runs the games (I will get more into what a node is later in the article). After you press enter. It's going to ask you to install things like

*   Database name (You can just press enter)
*   Username
*   Password
*   Time zone
*   Email Address
*   Username for admin account
*   Names
*   Password
*   FQDN (This can be your IP address if you don't have a domain, get it from the Vultr panel)
*   Configure firewall (Yes)
*   Configure HTTPS (No)

Then type Y to continue.

It's going to take about 10–15 mins to finish.

<img decoding="async" width="1047" height="764" src="/images/posts/install-pterodactyl-panel/pterodactyl-wings-and-panel-install.png" alt="pterodactyl wings and panel install" srcset="/images/posts/install-pterodactyl-panel/pterodactyl-wings-and-panel-install.png 1047w, /images/posts/install-pterodactyl-panel/pterodactyl-wings-and-panel-install-300x219.png 300w, /images/posts/install-pterodactyl-panel/pterodactyl-wings-and-panel-install-1024x747.png 1024w, /images/posts/install-pterodactyl-panel/pterodactyl-wings-and-panel-install-768x560.png 768w" sizes="(max-width: 1047px) 100vw, 1047px" />

### Step 11: Check advance settings like HTTPS and DB

Now it's going to pop up asking if you would like to install MariaDB. If you know what this is, and you need it, install it. If not, select no.

It will also ask if you want to configure UFW automatically. Select yes.

Finally, it will ask if you want to configure HTTPS. If you didn't select an FQDN, just select no.

Then proceed with the installation.

### Step 12: Login to Pterodactyl

Once it has finished. All you need to do is to enter your IP address into the address bar of your web browser.

It should take about 10 seconds to load the first time, and then you should end up at this screen. If not, then something went wrong in the installation. Screenshot your console and post it up on the #tech-support channel on our Discord.

<img decoding="async" width="897" height="522" src="/images/posts/install-pterodactyl-panel/pterodactyl-login-page.png" alt="pterodactyl login page" srcset="/images/posts/install-pterodactyl-panel/pterodactyl-login-page.png 897w, /images/posts/install-pterodactyl-panel/pterodactyl-login-page-300x175.png 300w, /images/posts/install-pterodactyl-panel/pterodactyl-login-page-768x447.png 768w" sizes="(max-width: 897px) 100vw, 897px" />

That's it. You're all done with the Pterodactyl Panel install. Now we need to add our node to our server.

## How To Add A Node To Pterodactyl Panel

When you log in to Pterodactyl for the first time, you will need to add a node. A node is simply what Pterodactyl calls your physical server. This will allow you to run your game server instances.

[https://www.youtube.com/watch?v=ra9bx3DiFXw](https://www.youtube.com/watch?v=ra9bx3DiFXw "Play video \"How To Add A Node To Pterodactyl Panel [Have Multiple Servers]\"")

Video can't be loaded because JavaScript is disabled: [How To Add A Node To Pterodactyl Panel \[Have Multiple Servers\] (https://www.youtube.com/watch?v=ra9bx3DiFXw)](https://www.youtube.com/watch?v=ra9bx3DiFXw "How To Add A Node To Pterodactyl Panel [Have Multiple Servers]")

## Why Use The Pterodactyl Install Script?

The installation script simply makes things easier. It takes a 30-min process and turns it into a 5-min job. It also has the added advantage of it's not as technical as the normal install. That's why it's great for people who are new to Linux.

## Conclusion

Now you should have a Pterodactyl panel installed. See, it wasn't that hard, was it?

The Pterodactyl install script makes it really easy. Next up, you should check out some [Pterodactyl themes](https://www.ghostcap.com/pterodactyl-themes/) to make the panel your.

To get games installed, simply follow one of our guides, such as our [Minecraft Server Guide](https://www.ghostcap.com/minecraft-server-setup-guide/). And remember, if you get stuck, come and join our Discord. There are lots of people that are willing to help you set up your [game servers](https://www.ghostcap.com/game-server-hosting/) on Pterodactyl.