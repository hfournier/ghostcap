---
wpId: 7251
title: 'Rust Ports For Steamworks [Update From Raknet To SWNET]'
description: 'Rust is transitioning its networking system from Raknet to Steamworks ...'
type: post
createdAt: 2023-02-02T20:02:49
modifiedAt: 2023-08-28T17:59:33
author: pedrotski
categories:
  - rust
featuredMedia:
  id: 7252
  src: "./RUST-STEAMWORKS-PORTS.jpg"
  alt: "RUST STEAMWORKS PORTS SW NET"
---


[Rust](https://rust.facepunch.com/) is transitioning its networking system from [Raknet to Steamworks](https://rust.facepunch.com/news/prototype-17#AnnouncementSteamNetworkingQueryPort) (SWNET), affecting the server's communication ports with clients.

The new system offers improved performance and more accessible management but requires different ports to be used.

Server owners must update their configuration before the **2nd of February 2023** to ensure your players will still be able to connect to your server.

`edit: The Steamworks update has not totally rolled out yet. However you do need a query port opened. The only thing about this guide that has changed is you dont need to add -swnet to your startup commands.`

## Don’t care about keeping your server favorites? (New Server)

If you don't care about keeping your server favorites, you can add "**\-swnet**" to your startup commands and remove "**+server.queryport**". By default, Rust will use the +1 port from your game port to be the Query port. If you have an RCON port specified then it will be +1 above the RCON port. If you're using default ports, this will cause the server to use two ports above your game port as the query port. This port needs to be UDP. 

This is what it should look like:

*   28015 UDP (Game port) 
*   28016 TCP (RCON) 
*   28017 UDP (Query Port using Steamworks automatic port selection) 
*   28082 TCP (Rust+) 

This method is best if you start a new server without an existing player base. 

## Want to keep your server favorites? (Old Server)

If you want to keep your favorites, you need to stop using 28015 as your game port and use 28017 instead. You also need to define "**+server.port 28017 +server.queryport 28015 -swnet**" in your startup commands. 

This is what it will look like if you want to keep severe favorites:

*   28015 UDP (Query Port using Steamworks manual port selection) 
*   28016 TCP (RCON) 
*   28017 UDP (Game Port) 
*   28082 TCP (RUST+) 

This method is recommended if you have an existing server/ player base that frequents your server. 

If you use this method you will need to update your direct connect links to use 28017 instead of 28015.

Note: According to Alistair, you may be able to use the same RCON port (28016) for the query port as well, but this method hasn't been tested and may cause confusion.

The 28015 + 28017 methods have been tested by us and other [game hosting companies](https://www.ghostcap.com/game-server-hosting/). It is known to work 100%.

## Why is Rust moving from Raknet to Steam Networking?

Rust is moving from RakNet to Steam Networking (SWNET) to take advantage of the more comprehensive and powerful set of tools and services offered by Steamworks.

The new system provides improved network performance, better scalability, and easier management of game servers, making it a more attractive option for game developers and publishers.

The transition to Steamworks will allow Rust to serve its players better and offer a more enjoyable gaming experience.

## Tested Ports

The methods of using 28015 and 28017 have been tried and tested on both Live Rust and Staging and are known to be effective. If you encounter any problems, please don't hesitate to reach out to us.