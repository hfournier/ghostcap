---
wpId: 7812
title: 'Ark Admin Commands (Full List Of Ark Survival Evolved Cheats)'
description: 'Embark on an epic adventure in the world of ARK: ...'
type: post
createdAt: 2023-07-04T20:55:21
modifiedAt: 2023-07-04T20:55:25
author: pedrotski
categories:
  - ark
featuredMedia:
  id: 7813
  src: "./Ark-Admin-Commands.jpg"
  alt: "Ark Admin Commands"
---


Embark on an epic adventure in the world of ARK: Survival Evolved with our comprehensive guide to using ark admin commands. This guide will not only introduce you to the mystical powers that lie within the game, but also teach you how to summon them at your fingertips. Whether you are a beginner or an experienced player, these commands will enhance your gameplay and immerse you in endless possibilities.

## What Are Ark Admin Commands?

In ARK: Survival Evolved, admin commands are special cheat codes that players can use to manipulate different aspects of the game. These commands can be entered into the console, which is a special debugging window accessible in both single-player and multiplayer games. The ark console can be opened by pressing the 'Tab' key on PC. Note that commands are not case-sensitive.

### Accessing the Console

To use ark admin commands, you must first enable access to the console. For PC players, the console can be opened by pressing the 'Tab' key. For Xbox, it’s a combination of LB, RB, X, and Y, while on PlayStation, it’s L1, R1, Square, and Triangle. You will need to enter the server admin password to use commands connected to the server.

### Using Commands

To use a command, simply type it into the console. For example, typing "god" will enable god mode, making you invincible. Some commands require additional parameters, such as player ID or item ID. For instance, the command "giveitemnum" requires you to specify an item ID and quantity. Use this command to give items to yourself.

## Whitelisting an Admin

Whitelisting an admin is an essential step for server owners who want to delegate administrative powers to other players without sharing the admin password. This process allows specified players to use commands without needing to log in as Admin, providing them with the ability to manage the server efficiently.

### How to Whitelist an Admin

1.  **Create a File**: First, you need to create a file in the directory `\ShooterGame\Saved\` called `AllowedCheaterSteamIDs.txt`. The path should look like this: `\ShooterGame\Saved\AllowedCheaterSteamIDs.txt`. If you are using a control panel, this file is usually located in the 'Configuration Files' section.
2.  **List Steam64 IDs**: In the `AllowedCheaterSteamIDs.txt` file, list the Steam64 IDs of the players you wish to authorize for cheat commands. Ensure that each Steam64 ID is on a new line. Players with their Steam64 IDs in this file will be able to use cheat commands without logging in as Admin.
3.  **Convert to Steam64 ID**: If you do not know your Steam64 ID, you can convert your regular Steam ID to Steam64 ID using a conversion tool. One such tool is available at [SteamID.io](https://steamid.io/). Simply enter your regular Steam ID, and the tool will provide you with your Steam64 ID.
4.  **Save and Restart**: After adding all the Steam64 IDs to the `AllowedCheaterSteamIDs.txt` file, save the file and restart your ARK server for the changes to take effect.

## Common Essential Ark Admin Commands

Here is a full list of essential commands that you can use in your game. Each command adds an item or modifies some aspect of the game.

### God Mode

Use the command "god" to enable god mode. In god mode, you are invincible and will not take any damage. This is especially useful when exploring dangerous areas with wild dinos. If you are already in god mode, use the command again to disable it.

### Taming Dinosaurs

To tame a dino, use the command "forcetame". This forces the dino you are looking at to become tamed. Dinosaurs tamed with this command can be ridden without a saddle. The "dotame" command will tame a creature that is conscious and eligible to be tamed.

### Spawning Items

The "giveitemnum" command allows you to spawn items in your inventory. For example, "giveitemnum 1 1 0 0" will give you a simple pistol. The numbers represent the item ID, quantity, quality, and blueprint. The "gfi" command is similar but allows you to spawn items based on a part of the blueprint name.

### Teleportation

Use the command "teleport" to move instantly to any location. You can also use "setplayerpos" with coordinates to teleport to a specific location.

### Changing the Game Mode

Switch between survival, creative, and spectator modes using the "gamemode" command. For instance, typing "gamemode creative" will switch you to creative mode, where you have unlimited resources.

### Summoning Creatures

Use the "summon" command to spawn a creature at your location. For example, "summon Rex\_Character\_BP\_C" will spawn a T-Rex.

### Sending Messages

The "broadcast" command will send a message to all players connected to the server. This is useful for server announcements or rules.

## Common Advanced Ark Admin Commands

For experienced players, here are some advanced commands that can significantly alter the gameplay.

### Infinite Stats

Use the command "infinitestats" to give your character infinite health, stamina, oxygen, food, water, and weight. This is similar to god mode but also affects your stats.

### Spectator Mode

Enter spectator mode by using the command "enablespectator". This mode allows you to fly through the map and observe without interacting. Use the command "disablespectator" to exit spectator mode.

### Spawning a Set of Dinos

The "spawndino" command allows you to spawn a set of dinos. For example, "spawndino Blueprint'/Game/PrimalEarth/Dinos/Raptor/Raptor\_Character\_BP.Raptor\_Character\_BP'" will spawn a Raptor.

### Giving Engrams

The "giveengrams" command will unlock all crafting recipes for your character. This is useful if you want to craft items without having to unlock them first.

### Ascensions

Use the "playercommand Ascend2" command to instantly complete all ascensions for the player, unlocking new levels and content.

## Customizing Your Character

### Changing Player Attributes

You can use commands to change various attributes of your character. For example, the command "SetPlayerHealth" followed by a number will set your health to that number.

### Giving Items to Another Player

Use the command "giveitemtoplayer" followed by the player ID and item details to give a specified item to another player with the specified player ID.

### Changing Ownership

The "GiveAllStructure" command will set all structures and dinos that belong to a player’s tribe to be personally owned by the player.

## Admin Icons and Messages

You can set an admin icon to appear above your character’s head, indicating to other players that you are an admin. Use the command "setshowadminicon" followed by true or false.

You can also set a message of the day that all players will see upon joining the server. Use the command "setmessage" followed by your message and the time interval.

## All Ark Commands

Here is a full list of all commands you can use in Ark.

Command

Description

enablecheats

Enable server administrator commands for the current player (only needed for multiplayer).

ce

Starts and stops weather of type specified.

gamecommand

Runs a game-mode specific command.

gfi

Adds the specified item or blueprint to the player's inventory.

playersonly

Toggle on/off all creature movement and crafting. Player movement unaffected.

printcolors

Prints all Color IDs in the console for reference.

startnearesthorde

Spawns an Orbital Supply Drop or Element Node at the nearest location to you.

listactivehordeevents

Lists all active Orbital Supply Drops and Element Nodes.

scriptcommand

Runs a game-mode specific command/script.

slomo

Sets the game speed multiplier (default 1).

enablespectator

Set game mode to spectator.

requestspectator

Requests spectator mode on servers where there is a spectator password.

setshowallplayers

Show/hide player names in spectator mode.

disablespectator

Exits spectator mode.

stopspectating

Leaves spectator mode which was enabled with "enablespectator".

toggledamagenumbers

Toggles on/off floating damage numbers.

hatchegg

Sets incubating progress of target egg to 0%.

allowplayertojoinnocheck

Adds specified player to the server whitelist.

banplayer

Bans the specified player.

broadcast

Broadcast a message to all players on the server.

tribemessage

Adds a message to the specified tribe's Tribelog.

disallowplayertojoinnocheck

Removes specified player from the server whitelist.

doexit

Shuts down the server.

getchat

Returns the latest chat buffer.

getgamelog

Print 100 entries at a time. Also outputs dated file in "\\Logs".

gettribeidplayerlist

Prints a list of every player of a specified tribe.

tribestructureaudit

Prints types and counts of specified tribe's structures.

tribedinoaudit

Prints types and counts of specified tribe's dinos.

serverchat

Sends a chat message to all currently connected players.

serverchatto

Sends a direct chat message to the specified player.

serverchattoplayer

Sends a direct chat message to the specified player.

saveworld

Forces the server to save.

setglobalpause

Pauses/Unpauses the game.

settimeofday

Sets the time of day.

showmessageoftheday

Displays the message of the day.

unbanplayer

Unbans the specified player.

setcheatplayer

Enable cheat commands that affect the current player.

clearplayerinventory

Clears inventory of the specified player.

getallstate

Prints all entities of the specified type to console.

giveexptotarget

Gives specified amount of XP to target.

giveinfinitestatstotarget

Gives infinite stats to target.

kickplayer

Kicks the specified player from the server.

kill

Instantly kills the target structure or dino.

killaoe

Instantly kills all targets of specified type within specified radius.

killplayer

Kills the specified player.

renameplayer

Renames the specified player.

renametribe

Renames the specified tribe.

takealldino

Changes ownership of all dinos from target tribe to player's tribe.

takeallstructure

Changes ownership of all structures from target tribe to player's tribe.

levelup

Levels up target stat for your character.

levelupaoe

Levels up target stat for all targets within radius.

leveluptarget

Levels up target stat for target.

teleport

Moves player character forward in the direction they are facing.

teleportplayeridtome

Teleports the specified player to the current player.

teleportplayernametome

Teleports the specified player to the current player.

teleporttoplayer

Teleports current player to the specified player.

teleporttoplayername

Teleports current player to the specified player.

teleporttoactorlocation

Teleports current player to the specified target.

tp

Teleport to the specified defined location.

tpcoords

Teleports to the specified coordinates.

spi

Teleports to the specified coordinates. Allows you to also set yaw and pitch.

setplayerpos

Teleports player to specified coordinates.

movetargetto

Teleports target to specified coordinates.

teleporttoactivehorde

Teleports player to the specified horde event.

destroyall

Destroys all creatures of specified type.

destroyallenemies

Destroys all non-player creatures.

destroymytarget

Destroys target creature.

destroystructures

Destroys all structures.

destroytribedinos

Destroys all dinos owned by target tribe.

destroytribeid

Destroys specified tribe.

destroytribeiddinos

Destroys all dinos owned by specified tribe.

destroytribeidplayers

Destroys all players in specified tribe.

destroytribeidstructures

Destroys all structures in specified tribe.

destroytribeplayers

Destroys all players in target tribe.

destroytribestructures

Destroys all structures in target tribe.

destroytribestructureslessthan

Destroys all structures in specified tribe that have less than the specified connections (snapped structures).

destroywilddinos

Destroys all untamed dinos.

forceplayertojointargettribe

Forces specified player to join target tribe.

forceplayertojointribe

Forces specified player to join specified tribe.

forcejointribe

Lets you join target tribe.

forcetribes

Creates a new tribe and forces specified players to join it.

giveallstructure

Gives current player ownership of target structure and all connected structures.

maketribeadmin

Makes you admin of your current tribe.

maketribefounder

Makes you founder of your current tribe.

removetribeadmin

Removes your admin status for current tribe.

taketribe

Gives you all of the specified tribe's dinos and structures.

givecreativemode

Sets game mode to creative.

givecreativemodetotarget

Sets game mode of target player to creative.

givecreativemodetoplayer

Sets game mode of specified player to creative.

addexperience

Adds specified amount of XP.

unlockengram

Unlocks Tek Engram.

hideriders

Toggle on/off rider invisibility.

changesize

Changes player size (default 1).

cleartutorials

Resets all tutorials.

enemyinvisible

Toggle on/off hostility. When enabled, all creatures will ignore you.

execsetsleeping

Puts current player to sleep or wakes them up.

fly

Activates fly mode.

ghost

Activates ghost mode, allowing you to pass through objects/terrain.

givecolors

Gives the specified quantity of each dye.

giveengrams

Unlocks all crafting recipes for player.

giveengramstekonly

Gives all tek engrams to player.

givetekengramsto

Gives all tek engrams to specified player.

giveexptoplayer

Gives specified player the specified amount of XP.

giveitem

Adds the specified item to the player's inventory.

giveitemnum

Adds the specified item to the player's inventory.

giveitemtoplayer

Adds the specified item to the specified player's inventory.

giveitemnumtoplayer

Adds the specified item to the specified player's inventory.

giveresources

Adds 50 of each resource to player's inventory.

giveslotitem

Adds specified item to specified item slot.

giveslotitemnum

Adds specified item to specified item slot.

givetome

Changes ownership of target dino or structure to current player.

gmbuff

Executes the "god", "infinitestats", and "enemyinvisible" commands, and provides XP.

envqa

Executes the "gmbuff", "givearmorset tek 0", "stat fps", and "stat unit" commands.

god

Toggles invulnerability.

hidetutorial

Hides specified tutorial.

hurtme

Deals specified amount of damage to player.

infinitestats

Sets all stats to maximum until command is repeated.

leavemealone

Executes the "god", "infinitestats", and "enemyinvisible" commands.

ontoggleingamemenu

Enables/disables opening of in-game menu when you hit ESC.

openmap

Loads the specified map.

playercommand

Gives the player the specified ascension effect.

setadminicon

Shows/hides your admin icon.

setfacialhairpercent

Sets length of facial hair.

setfacialhairstyle

Sets style of facial hair.

setheadhairpercent

Sets length of head hair.

setheadhairstyle

Sets style of head hair.

setgodmode

Enables/disables god mode.

settargetplayerbodyval

Sets index of specified body region.

settargetplayercolorval

Sets color of specified body region.

showingamemenu

Displays the in-game menu.

showtutorial

Displays the specified tutorial.

suicide

Kill yourself (won't work with God mode enabled).

toggleinfiniteammo

Toggles on/off infinite ammo.

walk

Deactivates fly mode.

togglegun

Disables/enables display of character's equipped item or hands.

refillstats

Sets all stats to maximum (one-off, unlike infinitestats).

givearmorset

Gives you a full armor set of the specified tier and quality.

giveweaponset

Gives you a full weapon set of the specified tier and quality.

giveitemset

Gives you a full item set of the specified tier.

clearmybuffs

Clears all currently active buffs from player.

setmytargetsleeping

Knocks out target dino or player.

maxascend

Unlocks all ascensions for specified player.

defeatboss

Unlocks specified boss for specified player.

defeatallbosses

Unlocks all bosses for specified player.

giveallexplorernotes

Unlocks all explorer notes for player.

giveexplorernote

Unkocks specified explorer note for player.

addhexagons

Adds specified number of hexagons.

destroyall

Destroys all of a specified type of creature.

destroyallenemies

Destroys all non-player creatures.

dotame

Tames the target creature, if possible.

dumpdinostats

Dumps the stats for the target dino into the console.

forcetame

Tames the target dino.

forcetameaoe

Tames all dinos within specified radius (default 2000).

raincritters

Spawns mix of sheep and dodos above player.

raindinos

Spawns mix of trikes and paranaurs above player.

raindanger

Spawns mix of rexes and allos above player.

sdf

Spawn creature of specified type with random level.

setbabyage

Sets age of target baby dino.

setimprintquality

Sets imprint quality of target dino.

setimprintedplayer

Changes imprinted player of target dino to specified player.

transferimprints

Transfers all dinos imprinted on old playerid to new playerid.

settargetdinocolor

Sets the target dino to specified colors.

spawnactor

Spawns the specified entity at a random level.

spawnactorspread

Spawns the specified number of entities in the specified area.

spawndino

Spawns the specified dino at the specified level.

summon

Spawns the specified entity. Can be used to spawn beacons.

summontamed

Spawn a force-tamed creature of the specified type.

gmsummon

Spawns creature of specified type and tames it (but still requires saddle).

givedinoset

Spawns a set of dinos in specified tier, fully set up with stats and saddles.

spawnsetupdino

Spawns a dino set up to specifications.

forcepoop

Forces target dino to poop.

clearcryosickness

Removes cryo-sickness status from target.

dino reset

Resets all blink cooldowns for target dino.

dino infiniteblink

Don't use blink cooldown slots, just always allow blinking for target dino.

dinoset cooldowns

Set number of blink cooldown slots for target dino.

dino donthideriderduringblink

Prevents enforcer from touching rider visibility during blink for target dino.

dinoset blink

Sets the blink vfx (forwards) to the specified percentage for target dino.

dinoset blinkback

Sets the blink vfx (forwards) to the specified percentage for target dino.

dino inflate

Sets current inflation to maximum for target dino.

dinoset inflate

Increases/decreases inflation of target dino by specified amount.

dino infinitegas

Constantly refills inflation for target dino. Keeps at maximum until command is repeated.

dino reset

Resets Mek fuel to maximum and heat level to zero for target dino.

dino infinitefuel

Keeps fuel at 100% for target dino.

dinoset fuel

Adds/subtracts specified amount of fuel for target dino.

dino noheat

Keeps heat at 0% for target dino.

dino toggleupkeep

Disables/enables Mek upkeep for target dino.

dinoset upkeepinterval

Sets the Mek's upkeep interval in seconds for target dino.

dino replayintro

Makes the MegaMek invisible, then replays the intro effect VFX.

dinoset blink

Sets the blink/intro effect to specified level for target dino.

dinoset eattime

Sets time in seconds between sitting down to digest for target dino.

dino destroyrightnode

Dismembers right arm and destroys node for target dino.

dino destroyleftnode

Dismembers left arm and destroys node for target dino.

dino destroycenternode

Destroys center node for target dino.

copycoordstoclipboard

Copies current coordinates and rotation to clipboard (x y z yaw pitch).

debugstructures

Toggles debug info display when looking at structures.

stat

Enables on-screen debug display.

showdebug

Enables on-screen debug display.

setgraphicsquality

Sets client graphics quality.

autocycle

Provides unlimited health for specified duration for player.

dorestartlevel

Restart the map.

getplayeridforsteamid

Returns playerid for player with specified steamid.

getsteamidforplayerid

Returns steamid for player with specified playerid.

teleporttoactorlocation

Teleports you to the location of the specified actor.

addequipmentdurability

Adds durability/water/energy to hotbar and equipped items.

dcmset

Sets a property on the Day Cycle Manager.

debugallowvrmissionteleport

Teleport to the final boss of Genesis: Part 1.

destroyfoliage

Destroys all foliage and auto-harvests all resource nodes in specified radius.

destroywilddinoclasses

Destroys all wild dinos of the specified type.

dino titanmode

Multiplies inflation x10.

findmutagendrops

Console displays locations of nearby Mutagen Bulbs.

forcegivebuff

Forces a status effect on your character or dino mount.

forcemutagenspawn

Forces a Mutagen Bulb to spawn nearby.

forceupdatedynamicconfig

Forces an update of the dynamic config.

getegg

Spawns fertilised egg from targeted dino.

infiniteweight

Removes weight restrictions from player inventory.

listmybuffs

Lists all buff IDs in the console.

open

Join specified server.

previewmode

Changes appearance of game graphics.

r.shadowquality

Sets quality of shadow appearance.

removeallworldbuffs

Removes all map buffs (only in Genesis: Part 2).

setday

Sets the current day number.

setdifficultyvalue

Sets the max level for wild dino spawns.

setstatontarget

Sets the value of the specified stat.

spawnexactdino

Spawns a dino with the specified characteristics. (Warning: can cause game to crash!)

## Tips and Tricks for Using Ark Admin Commands

*   Always double-check the command before pressing enter, especially if using powerful commands that can affect the entire server.
*   Use the "saveworld"command frequently to save your current game state. This is crucial in case something goes wrong and you need to revert to a previous state.
*   For a complete list of item IDs, refer to the ARK: Survival Evolved wiki. This will help you in using commands that require an item ID.
*   Use the "showmyadminmanager" command to open the admin GUI, where you can easily execute commands without typing them.

## Conclusion

Ark admin commands are a powerful tool that can enhance your gaming experience in ARK: Survival Evolved. Whether you want to go on a creative spree, explore without limitations, or manage your server efficiently, these commands have got you covered.

Remember to use these commands responsibly, especially on multiplayer servers where other players’ experiences can be affected. Now that you are equipped with the knowledge of ark commands and cheats, go forth and conquer the ancient land of ARK!