---
wpId: 7287
title: 'All CS2 Console Commands [Full Counter Strike 2 Cheat List]'
description: 'The console in CS2 is a powerful tool that allows ...'
type: post
createdAt: 2023-09-05T01:34:00
modifiedAt: 2024-06-13T16:57:58
author: pedrotski
categories:
  - counter-strike
featuredMedia:
  id: 7311
  src: "./Counter-Strike-2-Commands-List-CS2.jpg"
  alt: "cs2 commands"
---


The **console in CS2** is a powerful tool that allows players to input specific **cs2 commands** to modify their in-game experience. Whether you're looking to improve your **frames per second (fps)**, customize your **crosshair settings**, or even fly around the map, the console has got you covered.

Our team at GhostCap has put together this updated list of commands, sourced from our Github repository. The list is constantly updated to ensure it remains accurate and up-to-date. Check out the repository here: [https://github.com/ghostcap-gaming/Counter-Strike-2-Command-List](https://github.com/ghostcap-gaming/Counter-Strike-2-Command-List)

```html
<style>a.no-border-on-hover, a.no-border-on-hover:hover { border-bottom: none !important; text-decoration: none !important; } </style>
```
 [![Game Host Bros Promo](@assets/images/posts/cs2-commands/gamehostbrospromoround.png)](https://www.gamehostbros.com/)

## Why Use Console Commands in CS2?

<img decoding="async" width="1920" height="1080" src="/images/posts/cs2-commands/Console-Commands-in-CS2.jpg" alt="Alt attribute missing" srcset="/images/posts/cs2-commands/Console-Commands-in-CS2.jpg 1920w, /images/posts/cs2-commands/Console-Commands-in-CS2-768x432.jpg 768w, /images/posts/cs2-commands/Console-Commands-in-CS2-1536x864.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />

Imagine being in a heated match, and you notice some stuttering. Simply use the console commands called `cq_netgraph 1` and `cl_showfps 1` to give you a **heads-up display of information** about your live fps, making it easier to diagnose issues. Or perhaps you're in a practice session, and you want to use **cs2 practice commands** to set up specific scenarios. The console is your best friend.

## How to Enable and Use the Console Commands

[https://www.youtube.com/watch?v=TY59x-I6wUs](https://www.youtube.com/watch?v=TY59x-I6wUs "Play video \"How To Open The Console In CS2 [Including Developer Console Commands]\"")

Video can't be loaded because JavaScript is disabled: [How To Open The Console In CS2 \[Including Developer Console Commands\] (https://www.youtube.com/watch?v=TY59x-I6wUs)](https://www.youtube.com/watch?v=TY59x-I6wUs "How To Open The Console In CS2 [Including Developer Console Commands]")

To start using console commands in CS2, you first need to enable the developer console. You can either watch the video above or follow the instructions below.

1.  Open Counter Strike 2
2.  Click `Settings`
3.  Go to the `Game Tab`
4.  Look for "`Enable Developer Console (~)`"
5.  Set it to Yes

You can then open the console at any time using the tilde ~ key.

To enable sv\_cheats on the server, set it to 1. However, be aware that clients will receive a notification stating, "\[Server\] Cheats cannot be enabled on this server," unless they start the game using the -dev option.

When launching the game with the -dev option, clients will see the message "\[Developer\] SetConVar: sv\_cheats = "true"," allowing the server to enable cheats like the "give" command.

Despite this, the client-side will still display sv\_cheats as being set to 0.

## Counter-Strike 2 Commands Search

Below, you'll find the full list of Counter-Strike 2 commands. However, we recommend using the search function above to quickly find the specific commands you need.

```html
<script>document.addEventListener('DOMContentLoaded', function() { document.querySelectorAll('.searchInput').forEach(input => { input.addEventListener('input', function() { const searchText = this.value.toLowerCase(); const table = this.nextElementSibling.nextElementSibling; const tableRows = table.querySelectorAll('tbody tr'); let visibleRowCount = 0; console.log("Search Text:", searchText); console.log("Total Rows:", tableRows.length); tableRows.forEach(row => { const rowData = row.textContent.toLowerCase(); console.log("Row Data:", rowData); if (rowData.includes(searchText)) { row.style.display = ''; visibleRowCount++; } else { row.style.display = 'none'; } }); console.log("Visible Rows:", visibleRowCount); const noResultMessage = this.nextElementSibling; if (visibleRowCount === 0 && searchText.length > 0) { noResultMessage.style.display = 'block'; } else { noResultMessage.style.display = 'none'; } }); }); }); </script>
```
 
```html
<style>input[type="search"] { width: 100%; background-color: #2B2E30; border: 1px solid #8E9298; color: white; } input[type="search"]:focus { color: white; } input[type="search"]:not(:placeholder-shown) { color: white; } ::placeholder { color: #8E9298; } .no-result { color: red; text-align: center; display: none; } </style>
```
 

Nothing found, please try another term

ent\_ungrab

cmd

sv, cheat

un-grabs all objects

ent\_vcollide\_wireframe

cmd

sv, cheat

Displays the interpolated vcollide wireframe pm am entity. Arguments

ent\_viewoffset

cmd

sv, cheat

Displays the eye position for the given entity(ies) in red. Arguments

entity\_log\_load\_unserialize

0

sv, cl, rep, cheat

Output unserialization of entities on map load. 0 - off, 1 - client/server, 2 - server, 3 - client

entity\_lump\_list

cmd

List all known entity lumps

entity\_lump\_spew

cmd

Dump the contents of an entity lump

entityreport

cmd

sv

Reports all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by.

entitysummary

cmd

sv

Summarizes (by class) all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by.

ents

cmd

sv

List server entities, sorted by spawn group

escape

cmd

clientcmd\_can\_execute

Escape key pressed.

exec

cmd

norecord

Execute a cfg file

exec\_async

cmd

cheat, norecord

Execute a cfg file over time

execifexists

cmd

norecord

Execute a cfg file if file exists

execute\_command\_every\_frame

0

cheat

explode

cmd

sv, cheat

Kills the player with explosive damage

explodevector

cmd

sv, cheat

Kills a player applying an explosive force. Usage

fadein

cmd

sv, cheat

fadein {time r g b}

fadeout

cmd

sv, cheat

fadeout {time r g b}

ff\_damage\_bullet\_penetration

0

sv, cl, rep, release

If friendly fire is off, this will scale the penetration power and damage a bullet does when penetrating another friendly player

ff\_damage\_decoy\_explosion

false

sv, cl, rep, release

Enables or disables team damage from decoy detonation

ff\_damage\_reduction\_bullets

0.33

sv, cl, rep, release

How much to reduce damage done to teammates when shot. Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy)

ff\_damage\_reduction\_grenade

0.85

sv, cl, rep, release

How much to reduce damage done to teammates by a thrown grenade. Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy)

ff\_damage\_reduction\_grenade\_self

1

sv, cl, rep, release

How much to damage a player does to himself with his own grenade. Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy)

ff\_damage\_reduction\_other

0.4

sv, cl, rep, release

How much to reduce damage done to teammates by things other than bullets and grenades. Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy)

find

cmd

Find concommands with the specified string in their name/help text.

findflags

cmd

Find concommands by flags.

firetarget

cmd

sv, cheat

firstperson

cmd

cl, execute\_per\_tick

Switch to firstperson camera.

fish\_debug

false

cl, cheat

Show debug info for fish

fish\_dormant

false

sv, rep, cheat

Turns off interactive fish behavior. Fish become immobile and unresponsive.

fog\_color

\-1.000000 -1.000000 -1.000000

cl, cheat

fog\_colorskybox

\-1.000000 -1.000000 -1.000000

cl, cheat

fog\_enable

true

cl, cheat

Enable fog

fog\_enableskybox

true

cl, cheat

fog\_end

\-1

cl, cheat

fog\_endskybox

\-1

cl, cheat

fog\_hdrcolorscale

\-1

cl, cheat

fog\_hdrcolorscaleskybox

\-1

cl, cheat

fog\_maxdensity

\-1

cl, cheat

fog\_maxdensityskybox

\-1

cl, cheat

fog\_override

0

cl, cheat

Overrides the map's fog settings (-1 populates fog\_ vars with map's values)

fog\_override\_color

cmd

cheat

Sets the fog color override

fog\_override\_enable

false

cheat

Use fog\_override convars instead of world fog data

fog\_override\_end

3500

cheat

fog\_override\_exponent

2

cheat

fog\_override\_max\_density

0.4

cheat

fog\_override\_start

1000

cheat

fog\_start

\-1

cl, cheat

fog\_startskybox

\-1

cl, cheat

fov\_cs\_debug

0

cl, cheat

Sets the view fov if cheats are on.

fov\_desired

75

cl, a, user

Sets the base field-of-view.

fp\_trace

cmd

Toggle field path tracing to file

fps\_max

0

a, release

Frame rate limiter. 0=no limit. Does not apply to dedicated server.

fps\_max\_tools

120

a

Additional frame rate limit while in tools mode and a window other than the game window has focus. Note that fps\_max still applies, this only allows the maximum frame rate for tools mode to be lower. 0=no tools specific limit.

fps\_max\_ui

120

a

Frame rate limiter while the game UI is displayed. 0=no limit. Does not apply to dedicated server.

fs\_clear\_open\_duplicate\_times

cmd

Clear the list of files that have been opened.

fs\_dump\_open\_duplicate\_times

cmd

Set fs\_report\_long\_reads 1 before loading to use this. Prints a list of files that were opened more than once and ~how long was spent reading from them.

fs\_report\_sync\_opens

0

release

0

fs\_spew\_readfieldlist

cmd

cheat

index

func\_break\_max\_pieces

15

sv, a, rep

g\_debug\_angularsensor

false

sv, cheat

g\_debug\_constraint\_sounds

false

sv, cheat

Enable debug printing about constraint sounds.

g\_debug\_ragdoll\_visualize

false

cl, cheat

game\_alias

cmd

release

Set the configuration of game type and mode based on game alias like 'deathmatch'.

game\_mode

1

sv, cl, rep, release

The current game mode (based on game type). See GameModes.txt.

game\_type

0

sv, cl, rep, release

The current game type. See GameModes.txt.

gameinstructor\_dump\_open\_lessons

cmd

cl, cheat

Gives a list of all currently open lessons.

gameinstructor\_dump\_run\_lesson\_counts

cmd

cl, cheat

Gives a list of lessons that been completed or shown

gameinstructor\_enable

true

cl, a, release

Display in game lessons that teach new players.

gameinstructor\_find\_errors

false

cl, cheat

Set to 1 and the game instructor will run EVERY scripted command to uncover errors.

gameinstructor\_reload\_lessons

cmd

cl

Shuts down all open lessons and reloads them from the script file.

gameinstructor\_teach\_lesson

cmd

cl

Force a specific lesson to be triggered

gameinstructor\_verbose

0

cl, cheat

Set to 1 for standard debugging or 2 (in combo with gameinstructor\_verbose\_lesson) to show update actions.

gameinstructor\_verbose\_lesson

0

cl, cheat

Display more verbose information for lessons have this name.

gameui\_activate

cmd

Shows the game UI

gameui\_allowescape

cmd

Escape key allowed to hide game UI

gameui\_allowescapetoshow

cmd

Escape key allowed to show game UI

gameui\_hide

cmd

Hides the game UI

gameui\_preventescape

cmd

Escape key doesn't hide game UI

gameui\_preventescapetoshow

cmd

Escape key doesn't show game UI

getpos

cmd

cl

dump position and angles to the console

getpos\_exact

cmd

cl

dump origin and angles to the console

give

cmd

sv, vconsole\_fuzzy

Give item to player. Arguments

givecurrentammo

cmd

sv, cheat

Give a supply of ammo for current weapon..

gl\_clear\_gray

false

cl, cheat

Clear the back buffer to gray every frame.

gl\_clear\_randomcolor

false

cl, cheat

Clear the back buffer to random colors every frame. Helps spot open seams in geometry.

global\_set

cmd

sv, cheat

global\_set

glow\_outline\_width

6

cl, cheat

Width of glow outline effect in screen space.

glow\_use\_tolerance

0.85

cl, rep, cheat

god

cmd

sv, cheat

Toggle by default, or 0 to disable and 1 to enable. Player becomes invulnerable.

gotv\_theater\_container

0

cl, release

Enables GOTV theater mode for the specified container, setting it to 'live' will play top live matches

grep

cmd

grep line for pattern, print out matching lines only

groups

cmd

sv

Show status of all spawn groups.

handforce\_inner

1

sv, cl, rep, cheat

handforce\_outer

8

sv, cl, rep, cheat

handforce\_scale

1.5

sv, cl, rep, cheat

headforce\_inner

8

sv, cl, rep, cheat

headforce\_outer

16

sv, cl, rep, cheat

headforce\_strength

10

sv, cl, rep, cheat

healthshot\_allow\_use\_at\_full

true

sv, cl, rep, release

healthshot\_health

50

sv, cl, rep, release

healthshot\_healthboost\_damage\_multiplier

1

sv, rep, release

healthshot\_healthboost\_speed\_multiplier

1

sv, cl, rep, release

healthshot\_healthboost\_time

0

sv, cl, rep, release

help

cmd

Find help about a convar/concommand.

hideconsole

cmd

norecord

Hide the console.

hidehud

0

cl, cheat

bitmask

hideoverviewmap

cmd

cl

Hides the overview map

hideradar

cmd

cl

Hides HUD radar

hint\_panel\_fadein

0.3

sv, cl, rep, cheat

hint\_panel\_fadeout

0.3

sv, cl, rep, cheat

hmd\_anchor\_rotate

cmd

cl

host\_framerate

0

release

Set to lock per-frame time elapse.

host\_timescale

1

rep, cheat

Prescale the clock by this amount.

host\_timescale\_dec

cmd

cheat

Decrement the timescale by one step

host\_timescale\_inc

cmd

cheat

Increment the timescale by one step

host\_workshop\_collection

cmd

sv

Host a workshop map collection as a mapgroup

host\_workshop\_map

cmd

sv

Get the latest version of the map and host it on this server.

host\_writeconfig

cmd

Saves out the user config values.

hostage\_debug

0

sv, cheat

Show hostage AI debug information

hostage\_is\_silent

false

sv, cheat

When set, the hostage won't play any code driven response rules lines

hostfile

host.txt

sv, release

The HOST file to load.

hostip

\-1062731516

release

Host game server ip

hostname

star @STR

release

Hostname for server.

hostname\_in\_client\_status

false

release

Show server hostname in client status.

hostport

27015

release

Host game server port

hud\_fastswitch

0

cl, a

hud\_reloadscheme

cmd

cl

Reloads hud layout and animation scripts.

hud\_scaling

1

cl, a

Scales hud elements

hud\_showtargetid

true

cl, a, per\_user

Enables display of target names

hurtme

cmd

sv, cheat

Hurts the player. Arguments

ic

cmd

cl

interp entity count

ik\_debug\_chain\_to\_filter\_by

0

sv, cl, rep, cheat

ik\_debug\_fabrik\_backwards\_iteration\_toggle

cmd

ik\_debug\_fabrik\_forwards\_iteration\_toggle

cmd

ik\_enable

true

cheat

Enable IK.

ik\_hinge\_debug\_bone\_index

\-1

sv, cl, rep, cheat

ime\_hkl\_info

cmd

norecord

Spew IME HKL info.

ime\_info

cmd

norecord

Spew IME info.

ime\_supported\_info

cmd

norecord

Spew IME Supported info.

imgui\_set\_selection

cmd

sv, cheat

Sets ImGui selection

imgui\_set\_status\_text

cmd

sv, cheat

Sets ImGui header status text

impulse

cmd

cl

Triggers impulse command

incrementvar

cmd

norecord

Increment specified convar value.

inferno\_child\_spawn\_interval\_multiplier

0.1

sv, cheat

Amount spawn interval increases for each child

inferno\_child\_spawn\_max\_depth

4

sv, rep, release

inferno\_damage

40

sv, cheat

Damage per second

inferno\_debug

false

sv, cheat

inferno\_dlight\_spacing

200

cl, cheat

Inferno dlights are at least this far apart

inferno\_flame\_lifetime

7

sv, rep, release

Average lifetime of each flame in seconds

inferno\_flame\_spacing

42

sv, cheat

Minimum distance between separate flame spawns

inferno\_forward\_reduction\_factor

0.9

sv, cheat

inferno\_friendly\_fire\_duration

6

sv, cheat

For this long, FF is credited back to the thrower.

inferno\_initial\_spawn\_interval

0.02

sv, cheat

Time between spawning flames for first fire

inferno\_max\_child\_spawn\_interval

0.5

sv, cheat

Largest time interval for child flame spawning

inferno\_max\_flames

16

sv, rep, release

Maximum number of flames that can be created

inferno\_max\_range

inferno\_per\_flame\_spawn\_duration

3

sv, cheat

Duration each new flame will attempt to spawn new flames

inferno\_scorch\_decals

false

sv, cheat

inferno\_smoke\_volume\_density

0.1

sv, cheat

inferno\_spawn\_angle

45

sv, cheat

Angular change from parent

inferno\_surface\_offset

20

sv, cheat

inferno\_velocity\_decay\_factor

0.2

sv, cheat

inferno\_velocity\_factor

0.003

sv, cheat

inferno\_velocity\_normal\_factor

0

sv, cheat

input\_button\_code\_is\_scan\_code

true

a

Bind keys based on keyboard position instead of key name

input\_filter\_relative\_analog\_inputs

false

cl, a

input\_forceuser

\-1

cheat

Force user input to this split screen player.

instant\_replay\_goto\_tick

cmd

Goto a direct timestamp of the replay

instant\_replay\_goto\_tick\_relative

cmd

Goto a direct timestamp of the replay

instant\_replay\_live

cmd

If in replay, jumps back to live

instant\_replay\_pause

cmd

Pauses instant replay.

instant\_replay\_resume

cmd

Resumes instant replay.

instant\_replay\_skip

cmd

Number of seconds to skip back to instant replay from current position

instant\_replay\_skip\_live

cmd

Number of seconds to skip back to instant replay from live

instant\_replay\_timescale

cmd

Sets instant replay speed.

instant\_replay\_togglepause

cmd

Toggles instant replay.

invnext

cmd

cl, server\_can\_execute

invnextselect

cmd

cl, server\_can\_execute

invprev

cmd

cl, server\_can\_execute

invprevselect

cmd

cl, server\_can\_execute

ip

0

release

Overrides IP for multihomed hosts

iv\_debug

cmd

cl

Spew interpolated var info for entity.

iv\_debugbone

0

release

Debug bone name for interpolation spew of CAnimationState.

iv\_interp

cmd

cl

Spew interpolated var info for entity.

iv\_off

cmd

cl

Turn off all interpolation variable spew.

iv\_on

cmd

cl

Spew both interpolated var debug info and history for entity.

joy\_advanced

false

cl, a

joy\_advaxisr

0

cl, a

joy\_advaxisu

0

cl, a

joy\_advaxisv

0

cl, a

joy\_advaxisx

0

cl, a

joy\_advaxisy

0

cl, a

joy\_advaxisz

0

cl, a

joy\_axisbutton\_threshold

0.3

a

Analog axis range before a button press is registered.

joy\_axisr\_deadzone

0.15

a, per\_user

joy\_axisr\_relative

false

a, per\_user

joy\_axisu\_deadzone

0.15

a, per\_user

joy\_axisu\_relative

false

a, per\_user

joy\_axisv\_deadzone

0.15

a, per\_user

joy\_axisv\_relative

false

a, per\_user

joy\_axisx\_deadzone

0.15

a, per\_user

joy\_axisx\_relative

false

a, per\_user

joy\_axisy\_deadzone

0.15

a, per\_user

joy\_axisy\_relative

false

a, per\_user

joy\_axisz\_deadzone

0.15

a, per\_user

joy\_axisz\_relative

false

a, per\_user

joy\_circle\_correct\_mode

1

cl, a, per\_user

joy\_circle\_correct\_mode\_vehicle

2

cl, a, per\_user

joy\_display\_input

joy\_forward\_sensitivity

1

cl, a, per\_user

joy\_movement\_stick

false

cl, a, per\_user

Which stick controls movement (0 is left stick)

joy\_name

joystick

cl, a

joy\_pitch\_sensitivity

3

cl, a, per\_user

joy\_pitchsensitivity

1

cl, a, per\_user

joy\_response\_look

0

cl, a, per\_user

joy\_response\_move

9

cl, a, per\_user

joy\_side\_sensitivity

1

cl, a, per\_user

joy\_sidesensitivity

1

cl, a

joy\_wingmanwarrior\_centerhack

false

a

Wingman warrior centering hack.

joy\_wingmanwarrior\_turnhack

false

a

Wingman warrior hack related to turn axes.

joy\_yaw\_sensitivity

3

cl, a, per\_user

joy\_yawsensitivity

\-1

cl, a, per\_user

joystick

false

cl, a

True if the joystick is enabled, false otherwise.

jpeg\_screenshot

cmd

Take a jpeg screenshot

key\_findbinding

cmd

Find key bound to specified command string.

key\_listboundkeys

cmd

List bound keys with bindings.

key\_updatelayout

cmd

Updates game keyboard layout to current windows keyboard setting.

kick

cmd

norecord

Kick a player by name.

kickid

cmd

norecord

Kick a player by userid or uniqueid, with a message.

kickid\_hltv

cmd

norecord

Kick a player by userid or uniqueid, with a message.

kill

cmd

sv, cheat

Kills the player with generic damage

killvector

cmd

sv, cheat

Kills a player applying force. Usage

labelled\_debug\_helper\_arc\_segments

20

sv, cl, rep, cheat

labelled\_debug\_helper\_enabled

true

sv, cl, rep, cheat

labelled\_debug\_helper\_scale

1

sv, cl, rep, cheat

labelled\_debug\_helper\_show\_position

false

sv, cl, rep, cheat

labelled\_debug\_helper\_show\_text

true

sv, cl, rep, cheat

labelled\_debug\_helper\_skeleton\_show\_bone\_names

true

sv, cl, rep, cheat

lastinv

cmd

cl, server\_can\_execute

launch\_warmup\_map

cmd

cl, norecord, clientcmd\_can\_execute

Launches warmup map

lb\_shadow\_map\_culling

true

cheat

lb\_show\_light\_fog\_clipmap\_cb\_cost

false

cheat

Show cost of lights in fog clipmap constant buffer. yellow = 1 cost, red = 6 cost

lightquery\_debug\_direct\_lighting

true

sv, cl, rep, cheat

lightquery\_debug\_indirect\_lighting

true

sv, cl, rep, cheat

lightquery\_debug\_indirect\_lighting\_fast

0

sv, cl, rep, cheat

0 = standard sampling, 1 = fast sampling, 2 = ultra-fast sampling

listdemo

cmd

List demo file contents.

listid

cmd

Lists banned users.

listip

cmd

List IP addresses on the ban list.

listissues

cmd

sv

List all the issues that can be voted on.

listRecentNPCSpeech

cmd

sv, norecord

Displays a list of the last 5 lines of speech from NPCs.

load

cmd

norecord, vconsole\_fuzzy

Usage

lobby\_default\_privacy\_bits2

0

cl, a, release

Lobby default permissions (0

localization\_quest\_item\_string\_printout

cmd

cl

localization\_quest\_item\_string\_printout

lockMoveControllerRet

false

cl, a

log

cmd

Enables logging to file, console, and udp < on

log\_color

cmd

norecord

Set the color of a logging channel.

log\_dumpchannels

cmd

norecord

Dumps information about all logging channels.

log\_flags

cmd

norecord

Set the flags on a logging channel.

log\_level

cmd

norecord

Set the spew level of a logging channel.

log\_verbosity

cmd

norecord

Set the verbosity of a logging channel.

logic\_npc\_counter\_debug

false

sv, rep, cheat

+lookatweapon

cmd

cl

loop\_dump

cmd

Print the listeners of the current loop mode

lrucache\_flush

cmd

Flushes the specified cache

lrucache\_reset\_stats

cmd

Resets stats for the specified CUtlLRUCaches (or all if none specified)

lrucache\_set\_size

cmd

Sets the specified cache to the specified size

lrucache\_stats

cmd

Spews information about all CUtlLRUCaches

lua\_report\_memory

cmd

m\_pitch

0.022

cl, a, per\_user

Mouse pitch factor.

m\_yaw

0.022

cl, a, per\_user

Mouse yaw factor.

map

cmd

vconsole\_fuzzy, vconsole\_set\_focus

map

map\_enable\_background\_maps

cmd

cl, cheat

Enables/disables portrait background maps

map\_setbombradius

cmd

sv, cheat

Sets the bomb radius for the map.

map\_showbombradius

cmd

sv, cheat

Shows bomb radius from the center of each bomb site and planted bomb.

map\_showspawnpoints

cmd

sv

Shows player spawn points (red=invalid). Optionally pass in the duration.

mapgroup

cmd

sv, norecord

Specify a map group

mapoverview\_allow\_client\_draw

false

cl, release

Allow a client to draw on the map overview

mapoverview\_icon\_scale

1

cl, a, release

Sets the icon scale multiplier for the overview map. Valid values are 0.5 to 3.0.

maps

cmd

Displays list of maps.

markup\_group\_ent\_bbox

cmd

sv, cheat

markup\_group\_ent\_bbox <markup\_group name> -> toggle ent\_bbox for all members of the named markup group

markup\_group\_ent\_text

cmd

sv, cheat

markup\_group\_ent\_text <markup\_group name> -> toggle ent\_text for all members of the named markup group

markup\_group\_spew

cmd

sv, cheat

Spew all current markup groups and their members

mat\_clearshadercache

cmd

Clears the shader cache used for dynamic shader compile.

mat\_colcorrection\_forceentitiesclientside

false

cl, cheat

Forces color correction entities to be updated on the client

mat\_disable\_dynamic\_shader\_compile

cmd

Reloads all shaders from vcs files until the next time mat\_reloadshaders is called

mat\_disable\_normal\_mapping

false

cl, cheat

mat\_fullbright

0

cheat

mat\_lpv\_luxels

false

cheat

mat\_luxels

false

cheat

mat\_max\_lighting\_complexity

8

cheat

mat\_overdraw

0

cheat

Visualize overdraw

mat\_overdraw\_color

0.075000 0.150000 0.300000

cheat

mat\_print\_dead\_materials

cmd

Print loaded materials that have no valid layers due to not supporting any of the modes in gameinfo.gi.

mat\_print\_error\_materials

cmd

Print loaded materials that are using the error shader or material.

mat\_print\_expensive\_materials

cmd

Print materials sorted by cost heuristic

mat\_print\_material\_info

cmd

Print info about a specific material

mat\_print\_materials

cmd

Print loaded materials. Takes an optional substring as an argument.

mat\_print\_materials\_last\_frame

cmd

Print materials used last frame

mat\_print\_materials\_unused

cmd

Print materials that have never been used

mat\_print\_modes

cmd

Print supported rendering modes.

mat\_print\_shader\_info

cmd

Print detailed info about a single shader. Takes a shader name (hero.vfx) as an argument.

mat\_print\_shader\_quality

cmd

Print current shader quality setting

mat\_print\_shaders

cmd

Print loaded shaders. Takes a substring as an argument.

mat\_print\_textures

cmd

Print loaded textures in alphabetical order. Takes an optional substring as an argument.

mat\_print\_textures\_size

cmd

Print loaded textures in ascending size order. Takes an optional substring as an argument.

mat\_print\_textures\_size\_in\_memory

cmd

Print loaded textures in ascending size order as they are in memory. Takes an optional substring as an argument.

mat\_reinitmaterials

cmd

Reinitializes all loaded materials, reloading their shaders.

mat\_reloadmaterials

cmd

Reloads all materials. Takes an optional substring as an argument.

mat\_reloadshaders

cmd

Reloads all shaders. Takes optional substrings of shader names to recompile as arguments.

mat\_reset\_material\_costs

cmd

Reset material cost heuristic

mat\_set\_shader\_quality

cmd

Force shader quality setting (valid values are 0 or 1)

mat\_shading\_complexity

false

cheat

Visualize shading complexity

mat\_shading\_complexity\_color

1.000000 0.500000 0.250000

cheat

mat\_shading\_complexity\_max\_instruction\_count

1024

cheat

mat\_shading\_complexity\_max\_register\_count

128

cheat

mat\_tonemap\_bloom\_scale

\-1

cheat

mat\_tonemap\_bloom\_start\_value

\-1

cheat

mat\_tonemap\_csgo\_bloom\_scale

\-1

cheat

mat\_tonemap\_csgo\_bloom\_start\_value

\-1

cheat

mat\_tonemap\_csgo\_force\_accelerate\_exposure\_down

\-1

cheat

mat\_tonemap\_csgo\_force\_average\_lum\_min

\-1

cheat

Override. Old default was 3.0

mat\_tonemap\_csgo\_force\_max

\-1

cheat

mat\_tonemap\_csgo\_force\_min

\-1

cheat

mat\_tonemap\_csgo\_force\_percent\_bright\_pixels

\-1

cheat

Override. Old value was 1.0

mat\_tonemap\_csgo\_force\_percent\_target

\-1

cheat

Override. Old default was 45.

mat\_tonemap\_csgo\_force\_rate

\-1

cheat

mat\_tonemap\_csgo\_force\_scale

0

cheat

mat\_tonemap\_csgo\_force\_use\_alpha

\-1

cheat

mat\_tonemap\_csgo\_uncap\_exposure

false

cheat

mat\_tonemap\_force\_accelerate\_exposure\_down

\-1

cheat

mat\_tonemap\_force\_average\_lum\_min

\-1

cheat

Override. Old default was 3.0

mat\_tonemap\_force\_log\_lum\_max

\-1

cheat

mat\_tonemap\_force\_log\_lum\_min

\-1

cheat

mat\_tonemap\_force\_max

\-1

cheat

mat\_tonemap\_force\_min

\-1

cheat

mat\_tonemap\_force\_percent\_bright\_pixels

\-1

cheat

Override. Old value was 1.0

mat\_tonemap\_force\_percent\_target

\-1

cheat

Override. Old default was 45.

mat\_tonemap\_force\_rate

\-1

cheat

mat\_tonemap\_force\_scale

0

cheat

mat\_tonemap\_force\_use\_alpha

\-1

cheat

mat\_tonemap\_uncap\_exposure

0

cheat

mat\_wireframe

0

cheat

0=Off, 1=Surface Wireframe, 2=Transparent Wireframe

mem\_compact

cmd

Compacts the heap

mem\_dump

cmd

Dump memory stats to text file or .

mem\_test

cmd

memory

cmd

Print memory stats.

menuselect

cmd

cl, clientcmd\_can\_execute

menuselect

mesh\_calculate\_curvature\_smooth\_invert

false

sv, cl, rep, cheat

mesh\_calculate\_curvature\_smooth\_pass\_count

3

sv, cl, rep, cheat

mesh\_calculate\_curvature\_smooth\_weight

1

sv, cl, rep, cheat

mm\_csgo\_community\_search\_players\_min

3

a, release

When performing CSGO community matchmaking look for servers with at least so many human players

mm\_datacenter\_debugprint

cmd

Shows information retrieved from data center

mm\_debugprint

cmd

Show debug information about current matchmaking session

mm\_dedicated\_force\_servers

0

release

Comma delimited list of ip

mm\_dedicated\_search\_maxping

150

a

Longest preferred ping to dedicated servers for games

mm\_queue\_show\_stats

cmd

cl, clientcmd\_can\_execute

Display global server stats

mm\_server\_search\_lan\_ports

27015,27016,27017,27018,27019,27020

a, release

Ports to scan during LAN games discovery. Also used to discover and correctly connect to dedicated LAN servers behind NATs.

mm\_session\_search\_qos\_timeout

15

release

mm\_session\_sys\_kick\_ban\_duration

180

release

mm\_session\_sys\_pkey

0

release

mobile\_fps\_increase\_during\_charging

false

a

MOBILE\_FPS\_CONTROL

mobile\_fps\_increase\_during\_touch

true

a

MOBILE\_FPS\_CONTROL

mobile\_fps\_limit

30

a

MOBILE\_FPS\_CONTROL

model\_default\_preview\_sequence\_name

0

sv, cl, a, rep

model\_dump\_convert\_info

cmd

sv, cl, linked

Print model load-time conversion info

molotov\_throw\_detonate\_time

2

sv, cl, rep, release

motdfile

motd.txt

sv, release

The MOTD file to load.

mouse\_inverty

false

cl, a

movie\_fixwave

cmd

Fixup corrupted .wav file if engine crashed during startmovie/endmovie, etc.

mp\_afterroundmoney

0

sv, cl, rep, release

amount of money awared to every player after each round

mp\_anyone\_can\_pickup\_c4

false

sv, cl, rep, release

If set, everyone can pick up the c4, not just Ts.

mp\_autokick

true

sv, rep, release

Kick idle/team-killing/team-damaging players

mp\_autoteambalance

true

sv, nf, release

mp\_backup\_restore\_list\_files

cmd

sv, release

Lists recent backup round files matching the prefix, most recent files first, accepts a numeric parameter to limit the number of files displayed

mp\_backup\_restore\_load\_autopause

true

sv, release

Whether to automatically pause the match after restoring round data from backup

mp\_backup\_restore\_load\_file

cmd

sv, release

Loads player cash, KDA, scores and team scores; resets to the next round after the backup

mp\_backup\_round\_auto

true

sv, release

If enabled will keep in-memory backups to handle reconnecting players even if the backup files aren't written to disk

mp\_backup\_round\_file

backup

sv, release

If set then server will save all played rounds information to files filename\_date\_time\_team1\_team2\_mapname\_roundnum\_score1\_score2.txt

mp\_backup\_round\_file\_last

backup\_round00.txt

sv, release

Every time a backup file is written the value of this convar gets updated to hold the name of the backup file.

mp\_backup\_round\_file\_pattern

%prefix%\_round%round%.txt

sv, release

If set then server will save all played rounds information to files named by this pattern, e.g.'%prefix%_%date%_%time%_%team1%_%team2%\_%map%_round%round%score%score1%_%score2%.txt'

mp\_bot\_ai\_bt

0

sv, release

Use the specified behavior tree file to drive the bot behavior.

mp\_bot\_ai\_bt\_clear\_cache

cmd

sv, release

Clears the cache for behavior tree files.

mp\_buy\_allow\_grenades

true

sv, cl, rep, release

Whether players can purchase grenades from the buy menu or not.

mp\_buy\_allow\_guns

255

sv, cl, rep, release

Whether players can purchase guns

mp\_buy\_anywhere

0

sv, cl, nf, rep, release

When set, players can buy anywhere, not only in buyzones. 0 = default. 1 = both teams. 2 = Terrorists. 3 = Counter-Terrorists.

mp\_buy\_during\_immunity

0

sv, cl, nf, rep, release

When set, players can buy when immune, ignoring buytime. 0 = default. 1 = both teams. 2 = Terrorists. 3 = Counter-Terrorists.

mp\_buytime

20

sv, cl, rep, release

How many seconds after round start players can buy items for.

mp\_c4\_cannot\_be\_defused

false

sv, cl, rep, release

If set, the planted c4 cannot be defused.

mp\_c4timer

40

sv, cl, nf, rep, release

how long from when the C4 is armed until it blows

mp\_competitive\_endofmatch\_extra\_time

15

sv, release

After a competitive match finishes rematch voting extra time is given for rankings.

mp\_consecutive\_loss\_aversion

1

sv, rep, release

How loss streak is affected with round win

mp\_consecutive\_loss\_max

4

sv, rep, release

mp\_coop\_force\_join\_ct

false

sv, cl, rep, release

If set, real players will auto join CT on join.

mp\_coopmission\_bot\_difficulty\_offset

0

sv, rep, release

The difficulty offset modifier for bots during coop missions.

mp\_coopmission\_mission\_number

0

sv, cl, rep, release

Which mission the map should run after it loads.

mp\_coopterrorhunt\_kill\_add\_time

10

sv, cl, rep, release

The number of seconds added to the clock when players get a kill.

mp\_coopterrorhunt\_num\_enemies

20

sv, cl, rep, release

The number of enemies CTs have to hunt and kill.

mp\_ct\_default\_grenades

0

sv, cl, rep, release

The default grenades that the CTs will spawn with. To give multiple grenades, separate each weapon class with a space like this

mp\_ct\_default\_melee

weapon\_knife

sv, cl, rep, release

The default melee weapon that the CTs will spawn with. Even if this is blank, a knife will be given. To give a taser, it should look like this

mp\_ct\_default\_primary

0

sv, cl, rep, release

The default primary (rifle) weapon that the CTs will spawn with

mp\_ct\_default\_secondary

weapon\_hkp2000

sv, cl, rep, release

The default secondary (pistol) weapon that the CTs will spawn with

mp\_damage\_headshot\_only

false

sv, rep, release

Determines whether non-headshot hits do any damage.

mp\_damage\_scale\_ct\_body

1

sv, rep, release

Scales the damage a CT player takes by this much when they take damage in the body. (1 == 100%, 0.5 == 50%)

mp\_damage\_scale\_ct\_head

1

sv, rep, release

Scales the damage a CT player takes by this much when they take damage in the head (1 == 100%, 0.5 == 50%). REMEMBER! headshots do 4x the damage of the body before this scaler is applied.

mp\_damage\_scale\_t\_body

1

sv, rep, release

Scales the damage a T player takes by this much when they take damage in the body. (1 == 100%, 0.5 == 50%)

mp\_damage\_scale\_t\_head

1

sv, rep, release

Scales the damage a T player takes by this much when they take damage in the head (1 == 100%, 0.5 == 50%). REMEMBER! headshots do 4x the damage of the body before this scaler is applied.

mp\_damage\_vampiric\_amount

0

sv, rep, release

If Set to non-0, will determine the fraction of damage dealt that will be given to attacker.

mp\_death\_drop\_breachcharge

true

sv, cl, rep, release

Drop breachcharge on player death

mp\_death\_drop\_c4

true

sv, cl, rep, release

Whether c4 is droppable

mp\_death\_drop\_defuser

true

sv, cl, rep, release

Drop defuser on player death

mp\_death\_drop\_grenade

2

sv, cl, rep, release

Which grenade to drop on player death

mp\_death\_drop\_gun

1

sv, cl, rep, release

Which gun to drop on player death

mp\_death\_drop\_healthshot

true

sv, cl, rep, release

Drop healthshot on player death

mp\_death\_drop\_taser

true

sv, cl, rep, release

Drop taser on player death

mp\_deathcam\_skippable

true

sv, rep, release

Determines whether a player can early-out of the deathcam.

mp\_debug\_timeouts

cmd

sv

Prints time outs to the console for debugging

mp\_default\_team\_winner\_no\_objective

\-1

sv, cl, rep, release

If the map doesn't define an objective (bomb, hostage, etc), the value of this convar will declare the winner when the time runs out in the round.

mp\_defuser\_allocation

0

sv, cl, rep, release

How to allocate defusers to CTs at start or round

mp\_disable\_autokick

cmd

sv

Prevents a userid from being auto-kicked

mp\_disconnect\_kills\_bots

false

sv, release

When a bot disconnects, kill them first. Requires mp\_disconnect\_kills\_players.

mp\_disconnect\_kills\_players

true

sv, release

When a player disconnects, kill them first (triggering item drops, stats, etc.)

mp\_display\_kill\_assists

true

sv, cl, rep, release

Whether to display and score player assists

mp\_dm\_bonus\_length\_max

30

sv, rep, release

Maximum time the bonus time will last (in seconds)

mp\_dm\_bonus\_length\_min

30

sv, rep, release

Minimum time the bonus time will last (in seconds)

mp\_dm\_bonus\_percent

50

sv, cl, rep, release

Percent of points additionally awarded when someone gets a kill with the bonus weapon during the bonus period.

mp\_dm\_bonus\_respawn

false

sv, cl, rep, release

When attempting to get the bonus weapon in deathmatch, whether we should respawn you with it or just give it to you directly

mp\_dm\_bonusweapon\_dogtags

0

sv, cl, rep, release

Additional dogtags to drop when making a kill with the bonus weapon

mp\_dm\_dogtag\_score

0

sv, cl, rep, release

Points to award for picking up a dogtag in deathmatch.

mp\_dm\_kill\_base\_score

10

sv, cl, rep, release

Number of base points to award for a kill in deathmatch. Cheaper weapons award 1 or 2 additional points.

mp\_dm\_teammode

0

sv, cl, rep, release

In deathmatch, enables team DM visuals & scoring (0

mp\_dm\_teammode\_bonus\_score

1

sv, cl, rep, release

Team deathmatch victory points to award for kill with bonus weapon

mp\_dm\_teammode\_dogtag\_score

0

sv, cl, rep, release

Team deathmatch victory points to award for collecting enemy dogtags

mp\_dm\_teammode\_kill\_score

1

sv, cl, rep, release

Team deathmatch victory points to award for enemy kill

mp\_dm\_time\_between\_bonus\_max

40

sv, rep, release

Maximum time a bonus time will start after the round start or after the last bonus (in seconds)

mp\_dm\_time\_between\_bonus\_min

30

sv, rep, release

Minimum time a bonus time will start after the round start or after the last bonus (in seconds)

mp\_dogtag\_despawn\_on\_killer\_death

true

sv, rep, release

Whether dogtags should despawn when their killer dies

mp\_dogtag\_despawn\_time

120

sv, rep, release

How many seconds dogtags should stay around before despawning automatically (0 = infinite)

mp\_dogtag\_pickup\_rule

0

sv, rep, release

Who is eligible to pick up a dogtag (0 = killer only, 1 = killer's team, 2 = victim's team, 3 = killer & victim's team, 4 = anyone)

mp\_dronegun\_stop

false

sv, cl, rep, release

if non-zero, stops AI on all droneguns.

mp\_drop\_grenade\_enable

true

sv, release

Allows players to drop grenades.

mp\_drop\_knife\_enable

false

sv, release

Allows players to drop knives.

mp\_dump\_timers

cmd

sv

Prints round timers to the console for debugging

mp\_economy\_reset\_rounds

0

sv, cl, rep, release

Reset all player money every N rounds (0 for never)

mp\_endmatch\_votenextleveltime

20

sv, release

If mp\_endmatch\_votenextmap is set, players have this much time to vote on the next map at match end.

mp\_endmatch\_votenextmap

true

sv, cl, rep, release

Whether or not players vote for the next map at the end of the match when the final scoreboard comes up

mp\_endmatch\_votenextmap\_keepcurrent

true

sv, cl, rep, release

If set, keeps the current map in the list of voting options. If not set, the current map will not appear in the list of voting options.

mp\_endmatch\_votenextmap\_wargames\_modes

armsrace

sv, release

Modes available for endmatch voting during War Games. Separate names with spaces.

mp\_endmatch\_votenextmap\_wargames\_nummaps

3

sv, release

Maximum number of maps to include in endmatch voting during War Games

mp\_endmatch\_votenextmap\_wargames\_nummodes

1

sv, release

Maximum number of other War Games to include in endmatch voting during War Games

mp\_endwarmup\_player\_count

0

sv, cl, rep, release

Number of players required to be connected to end warmup early. 0 to require maximum players for mode.

mp\_equipment\_reset\_rounds

0

sv, cl, rep, release

Reset all player equipment every N rounds (0 for never)

mp\_fists\_replace\_melee

true

sv, release

If enabled then when melee weapon is dropped player will have fists, when melee weapon is picked up then fists are unavailable

mp\_footsteps\_serverside

true

sv, release

Makes the server always play footstep sounds. Clients never calculate footstep sounds locally, instead relying on the server.

mp\_force\_pick\_time

15

sv, cl, rep, release

The amount of time a player has on the team screen to make a selection before being auto-teamed

mp\_forcecamera

1

sv, cl, rep, release

Restricts spectator modes for dead players

mp\_fraglimit

0

sv, nf, release

mp\_free\_armor

0

sv, cl, rep, release

Determines whether kevlar (1+) and/or helmet (2+) are given automatically.

mp\_freezetime

15

sv, nf, rep, release

how many seconds to keep players frozen when the round starts

mp\_friendlyfire

true

sv, cl, nf, rep, release

Allows team members to injure other members of their team

mp\_ggprogressive\_healthshot\_killcount

3

sv, cl, rep, release

Grant healthshots in arms race after n kills

mp\_ggprogressive\_random\_weapon\_kills\_needed

2

sv, cl, rep, release

If mp\_ggprogressive\_use\_random\_weapons is set, this is the number of kills needed with each weapon

mp\_ggprogressive\_round\_restart\_delay

15

sv, cl, rep, release

Number of seconds to delay before restarting a round after a win in gungame progessive

mp\_ggprogressive\_use\_random\_weapons

true

sv, cl, rep, release

If set, selects random weapons from set categories for the progression order

mp\_ggtr\_always\_upgrade

false

sv, cl, rep, release

Award this many upgrade points every round in demolition mode

mp\_ggtr\_bomb\_defuse\_bonus

1

sv, cl, rep, release

Number of bonus upgrades to award the CTs when they defuse a gun game bomb

mp\_ggtr\_bomb\_detonation\_bonus

1

sv, cl, rep, release

Number of bonus upgrades to award the Ts when they detonate a gun game bomb

mp\_ggtr\_bomb\_pts\_for\_flash

4

sv, cl, rep, release

Kill points required in a round to get a bonus flash grenade

mp\_ggtr\_bomb\_pts\_for\_he

3

sv, cl, rep, release

Kill points required in a round to get a bonus HE grenade

mp\_ggtr\_bomb\_pts\_for\_molotov

5

sv, cl, rep, release

Kill points required in a round to get a bonus molotov cocktail

mp\_ggtr\_bomb\_pts\_for\_upgrade

2

sv, cl, rep, release

Kill points required to upgrade a player's weapon

mp\_ggtr\_bomb\_respawn\_delay

0

sv, cl, rep, release

Number of seconds to delay before making the bomb available to a respawner in gun game

mp\_ggtr\_end\_round\_kill\_bonus

1

sv, cl, rep, release

Number of bonus points awarded in Demolition Mode when knife kill ends round

mp\_ggtr\_last\_weapon\_kill\_ends\_half

false

sv, cl, rep, release

End the half and give a team round point when a player makes a kill using the final weapon

mp\_ggtr\_num\_rounds\_autoprogress

3

sv, cl, rep, release

Upgrade the player's weapon after this number of rounds without upgrading

mp\_give\_player\_c4

true

sv, cl, rep, release

Whether this map should spawn a c4 bomb for a player or not.

mp\_global\_damage\_per\_second

0

sv, rep, release

If above 0, deal non-lethal damage to players over time.

mp\_guardian\_add\_bounds\_pt

cmd

sv

mp\_guardian\_add\_bounds\_pt

mp\_guardian\_add\_player\_spawn\_pt

cmd

sv

mp\_guardian\_add\_player\_spawn\_pt

mp\_guardian\_ai\_bt\_difficulty\_adjust\_wave\_interval

1

sv, rep, release

Adjust the guardian bots' difficulty every nth guardian wave when using behavior trees.

mp\_guardian\_ai\_bt\_difficulty\_cap\_beginning\_round

2

sv, rep, release

Starting this round a difficulty cap will be applied to the bots.

mp\_guardian\_ai\_bt\_difficulty\_initial\_value

2

sv, rep, release

Starting difficulty level for the gardian bots.

mp\_guardian\_ai\_bt\_difficulty\_max\_next\_level\_bots

3

sv, rep, release

How many bots to increase difficulty per wave - this many easier bots will get harder.

mp\_guardian\_bomb\_plant\_add\_bounds\_pt

cmd

sv

mp\_guardian\_bomb\_plant\_add\_bounds\_pt

mp\_guardian\_bomb\_plant\_clear\_all\_bounds

cmd

sv

mp\_guardian\_bomb\_plant\_clear\_all\_bounds

mp\_guardian\_bomb\_plant\_custom\_x\_mark\_location

0

sv, cl, rep, release

x,y,z to display an X for the bomb plant in guardian missions with custom bomb plant boundaries.

mp\_guardian\_bomb\_plant\_emit\_bounds\_config

cmd

sv

mp\_guardian\_bomb\_plant\_emit\_bounds\_config

mp\_guardian\_bomb\_plant\_new\_bounds

cmd

sv

mp\_guardian\_bomb\_plant\_new\_bounds

mp\_guardian\_bot\_money\_per\_wave

800

sv, rep, release

The amount of money bots get time each wave the players complete. This # is absolute and not additive, the money is set to (this)x(wave#) for each bot on each wave.

mp\_guardian\_clear\_all\_bounds

cmd

sv

mp\_guardian\_clear\_all\_bounds

mp\_guardian\_clear\_all\_player\_spawns

cmd

sv

mp\_guardian\_clear\_all\_player\_spawns

mp\_guardian\_emit\_bounds\_config

cmd

sv

mp\_guardian\_emit\_bounds\_config

mp\_guardian\_force\_collect\_hostages\_timeout

50

sv, release

Force bots to collect hostages after this amount of time if no enemy has been seen.

mp\_guardian\_give\_random\_grenades\_to\_bots

true

sv, release

If set guardian bots will be given grenades at the beginning of the wave.

mp\_guardian\_loc\_string\_hud

#guardian\_mission\_type\_kills

sv, cl, rep, release

Loc string token to use on hud for this mission, otherwise default to kills with weapon.

mp\_guardian\_loc\_weapon

0

sv, cl, rep, release

Override to weapon dialog var applied to UI

mp\_guardian\_new\_bounds

cmd

sv

mp\_guardian\_new\_bounds

mp\_guardian\_player\_dist\_max

2000

sv, rep, release

The maximum distance a player is allowed to get from the bombsite before they're killed.

mp\_guardian\_player\_dist\_min

1300

sv, rep, release

The distance at which we start to warn a player when they are too far from the guarded bombsite.

mp\_guardian\_shoot\_point

cmd

sv

mp\_guardian\_shoot\_point

mp\_guardian\_special\_kills\_needed

10

sv, rep, release

The number of kills needed with a specific weapon.

mp\_guardian\_special\_weapon\_needed

awp

sv, rep, release

The weapon that needs to be used to increment the kills needed to complete the mission.

mp\_guardian\_target\_site

\-1

sv, release

If set to the index of a bombsite, will cause random spawns to be only created near that site.

mp\_halftime

true

sv, cl, rep, release

Determines whether the match switches sides in a halftime event.

mp\_halftime\_duration

15

sv, cl, rep, release

Target number of seconds that halftime lasts; shortened if team intros are active

mp\_halftime\_pausematch

0

sv, cl, rep, release

Set to 1 to pause match after halftime countdown elapses. Match must be resumed by vote or admin.

mp\_halftime\_pausetimer

0

sv, cl, rep, release

Set to 1 to stay in halftime indefinitely. Set to 0 to resume the timer.

mp\_heavyassaultsuit\_aimpunch

true

sv, cl, rep, release

How much EXTRA aim punch will happen when a player wearing the assault suit gets when shot

mp\_heavyassaultsuit\_cooldown

5

sv, cl, rep, release

Determines cooldown of purchase.

mp\_heavyassaultsuit\_deploy\_timescale

0.8

sv, cl, rep, release

How fast a player wearing the heavy assault suit will draw their weapon (1.0 = normal speed, 0.5 = half speed)

mp\_heavyassaultsuit\_speed

130

sv, cl, rep, release

The max speed of a player when they are wearing the heavy assault suit

mp\_heavybot\_damage\_reduction\_scale

1

sv, cl, rep, release

How much damage should scale when the player wearing the heavy assault suit is shot (1.0 = no change, 0.5 = half damage)

mp\_hostages\_max

2

sv, rep, release

Maximum number of hostages to spawn.

mp\_hostages\_rescuetime

1

sv, cl, rep, release

Additional time added to round time if a hostage is reached by a CT.

mp\_hostages\_run\_speed\_modifier

1

sv, rep, release

Default is 1.0, slow down hostages by setting this to < 1.0.

mp\_hostages\_spawn\_farthest

false

sv, rep, release

When enabled will consistently force the farthest hostages to spawn.

mp\_hostages\_spawn\_force\_positions

0

sv, rep, release

Comma separated list of zero based indices to force spawn positions, e.g. '0,2' or '1,6'

mp\_hostages\_spawn\_force\_positions\_xyz

0

sv, rep, release

Comma separated list of xyz locations to force spawn positions, e.g. 'x1 y1 z1,x2 y2 z2'

mp\_hostages\_spawn\_same\_every\_round

true

sv, rep, release

0 = spawn hostages randomly every round, 1 = same spawns for entire match.

mp\_hostages\_takedamage

false

sv, cl, rep, release

Whether or not hostages can be hurt.

mp\_humanteam

any

sv, rep, release

Restricts human players to a single team {any, CT, T}

mp\_ignore\_round\_win\_conditions

false

sv, rep, release

Ignore conditions which would end the current round

mp\_items\_prohibited

0

sv, cl, rep, release

Set this convar to a comma-delimited list of definition indices of weapons that should be prohibited from use.

mp\_join\_grace\_time

0

sv, cl, rep, release

Number of seconds after round start to allow a player to join a game

mp\_limitteams

2

sv, nf, rep, release

Max # of players 1 team can have over another (0 disables check)

mp\_logdetail

0

sv, release

Logs attacks. Values are

mp\_logdetail\_items

false

sv, release

Logs a line any time a player acquires or loses an item.

mp\_logdistance\_2d

250

sv, release

Enables distance logging every so many units

mp\_logdistance\_sec

15

sv, release

Enables distance logging every so many seconds

mp\_logloadouts

true

sv, release

Enables distance logging with full loadouts

mp\_logmoney

false

sv, release

Enables money logging. Values are

mp\_match\_can\_clinch

true

sv, cl, rep, release

Can a team clinch and end the match by being so far ahead that the other team has no way to catching up?

mp\_match\_end\_changelevel

false

sv, cl, rep, release

At the end of the match, perform a changelevel even if next map is the same

mp\_match\_end\_restart

false

sv, cl, rep, release

At the end of the match, perform a restart instead of loading a new map

mp\_match\_restart\_delay

25

sv, cl, rep, release

Time (in seconds) until a match restarts.

mp\_max\_armor

2

sv, cl, rep, release

Determines the highest level of armor allowed to be purchased. (0) None, (1) Kevlar, (2) Helmet

mp\_maxmoney

16000

sv, cl, rep, release

maximum amount of money allowed in a player's account

mp\_maxrounds

30

sv, cl, nf, rep, release

max number of rounds to play before server changes maps

mp\_min\_halftime\_duration

8.5

sv, cl, rep, release

Minimum number of seconds that halftime lasts even if team intros are active

mp\_only\_cts\_rescue\_hostages

true

sv, rep, release

mp\_overtime\_enable

false

sv, cl, rep, release

If a match ends in a tie, use overtime rules to determine winner

mp\_overtime\_halftime\_pausetimer

0

sv, cl, rep, release

If set to 1 will set mp\_halftime\_pausetimer to 1 before every half of overtime. Set mp\_halftime\_pausetimer to 0 to resume the timer.

mp\_overtime\_maxrounds

6

sv, cl, rep, release

When overtime is enabled play additional rounds to determine winner

mp\_overtime\_startmoney

10000

sv, cl, rep, release

Money assigned to all players at start of every overtime half

mp\_pause\_match

cmd

sv

Pause the match in the next freeze time

mp\_plant\_c4\_anywhere

false

sv, cl, rep, release

mp\_playercashawards

true

sv, cl, rep, release

Players can earn money by performing in-game actions

mp\_playerid

0

sv, cl, rep, release

Controls what information player see in the status bar

mp\_playerid\_delay

0.4

sv, cl, rep, release

Number of seconds to delay showing information in the status bar

mp\_playerid\_hold

0.1

sv, cl, rep, release

Number of seconds to keep showing old information in the status bar

mp\_randomspawn

0

sv, cl, rep, release

Determines whether players are to spawn. 0 = default; 1 = both teams; 2 = Terrorists; 3 = CTs.

mp\_randomspawn\_dist

0

sv, cl, rep, release

If using mp\_randomspawn, determines whether to test distance when selecting this spot.

mp\_randomspawn\_los

false

sv, cl, rep, release

If using mp\_randomspawn, determines whether to test Line of Sight when spawning.

mp\_require\_gun\_use\_to\_acquire

false

sv, release

Whether guns must be +used to acquire or default is touch-to-pickup

mp\_respawn\_immunitytime

\-1

sv, cl, rep, release

How many seconds after respawn immunity lasts. Set to negative value to disable warmup immunity.

mp\_respawn\_on\_death\_ct

false

sv, cl, rep, release

When set to 1, counter-terrorists will respawn after dying.

mp\_respawn\_on\_death\_t

false

sv, cl, rep, release

When set to 1, terrorists will respawn after dying.

mp\_respawnwavetime\_ct

10

sv, cl, rep, release

Time between respawn waves for CTs.

mp\_respawnwavetime\_t

10

sv, cl, rep, release

Time between respawn waves for Terrorists.

mp\_restartgame

0

sv, release

If non-zero, game will restart in the specified number of seconds

mp\_retake\_ct\_count

4

sv, cl, rep, release

Number of CT's when playing retakes.

mp\_retake\_ct\_loadout\_bonus\_card

#GameUI\_Retake\_Card\_TheAWPortunity,1,1,rifle4

sv, cl, rep, release

CT bonus card for full buy round when playing bomb site retake.

mp\_retake\_ct\_loadout\_bonus\_card\_availability

1,2

sv, cl, rep, release

CT bonus card availability pattern for full buy round when playing bomb site retake.

mp\_retake\_ct\_loadout\_default\_pistol\_round

1

3;#GameUI\_Retake\_Card\_4v3,0,0,secondary0

1;#GameUI\_Retake\_Card\_FlashOut,0,0,secondary0,grenade2;#GameUI\_Retake\_Card\_HideAndPeek,0,0,secondary0,grenade4

mp\_retake\_ct\_loadout\_enemy\_card

#GameUI\_Retake\_Card\_BehindEnemyLines,1,1,rifle1,grenade2

sv, cl, rep, release

CT enemy card for full buy round when playing bomb site retake.

mp\_retake\_ct\_loadout\_full\_buy\_round

4

2;#GameUI\_Retake\_Card\_LightEmUp,1,1,rifle1,grenade2

2;#GameUI\_Retake\_Card\_Kobe,1,1,rifle1,grenade3

mp\_retake\_ct\_loadout\_light\_buy\_round

3

2;#GameUI\_Retake\_Card\_UmpInSmoke,1,1,smg2,grenade4

2;#GameUI\_Retake\_Card\_FunNGun,1,1,smg0,grenade3

mp\_retake\_ct\_loadout\_upgraded\_pistol\_round

2

2;#GameUI\_Retake\_Card\_TakeFive,0,0,secondary3

2;#GameUI\_Retake\_Card\_BlindFire,0,0,secondary2,grenade2

mp\_retake\_max\_consecutive\_rounds\_same\_target\_site

2

sv, cl, rep, release

Limit the number of consecutive rounds targeting the same site.

mp\_retake\_t\_count

3

sv, cl, rep, release

Number of terrorists when playing retakes.

mp\_retake\_t\_loadout\_bonus\_card

#GameUI\_Retake\_Card\_TheAWPortunity,1,1,rifle4

sv, cl, rep, release

T bonus card for full buy round when playing bomb site retake.

mp\_retake\_t\_loadout\_bonus\_card\_availability

1,1,2

sv, cl, rep, release

T bonus card availability pattern for full buy round when playing bomb site retake.

mp\_retake\_t\_loadout\_default\_pistol\_round

0

3;#GameUI\_Retake\_Card\_4BadGuysLeft,0,0,secondary0

1;#GameUI\_Retake\_Card\_LookAway,0,0,secondary0,grenade2;#GameUI\_Retake\_Card\_WhenThereIsSmoke,0,0,secondary0,grenade4

mp\_retake\_t\_loadout\_enemy\_card

#GameUI\_Retake\_Card\_FindersKeepers,1,1,rifle1,grenade2

sv, cl, rep, release

T enemy card for full buy round when playing bomb site retake.

mp\_retake\_t\_loadout\_full\_buy\_round

0

2;#GameUI\_Retake\_Card\_OlReliable,1,1,rifle1,grenade2

1;#GameUI\_Retake\_Card\_SmokeShow,1,1,rifle1,grenade4

mp\_retake\_t\_loadout\_light\_buy\_round

0

2;#GameUI\_Retake\_Card\_BackInAFlash,1,1,smg2,grenade2

2;#GameUI\_Retake\_Card\_AllIn,1,1,rifle0

mp\_retake\_t\_loadout\_upgraded\_pistol\_round

0

2;#GameUI\_Retake\_Card\_BlindFire,0,0,secondary2,grenade2

2;#GameUI\_Retake\_Card\_QueOta,0,0,secondary4

mp\_round\_restart\_delay

7

sv, cl, rep, release

Number of seconds to delay before restarting a round after a win

mp\_roundtime

1.92

sv, nf, rep, release

How many minutes each round takes.

mp\_roundtime\_defuse

1.92

sv, nf, rep, release

How many minutes each round of Bomb Defuse takes. If 0 then use mp\_roundtime instead.

mp\_roundtime\_deployment

5

sv, release

How many minutes deployment for coop mission takes.

mp\_roundtime\_hostage

1.92

sv, nf, rep, release

How many minutes each round of Hostage Rescue takes. If 0 then use mp\_roundtime instead.

mp\_scrambleteams

cmd

sv

Scramble the teams and restart the game

mp\_shield\_speed\_deployed

170

sv, cl, rep, release

The max speed of a player when they have a shield deployed

mp\_shield\_speed\_holstered

200

sv, cl, rep, release

The max speed of a player when they have a shield holstered

mp\_shorthanded\_cash\_bonus\_ignore\_kicked

true

sv, cl, rep, release

Determines whether kicked players are included in the assessment for short-handedness

mp\_shorthanded\_cash\_bonus\_round\_delay

2

sv, cl, rep, release

number of previous rounds that a team needs to have been shorthanded before they are eligible for the short-handed bonus

mp\_solid\_teammates

1

sv, cl, rep, release

How solid are teammates

mp\_spawnprotectiontime

5

sv, rep, release

Kick players who team-kill within this many seconds of a round restart.

mp\_spec\_swapplayersides

false

sv, cl, rep, release

Toggle set the player names and team names to the opposite side in which they are are on the spectator panel.

mp\_spectators\_max

2

sv, cl, rep, release

How many spectators are allowed in a match.

mp\_starting\_losses

1

sv, rep, release

Determines what the initial loss streak is.

mp\_startmoney

800

sv, cl, rep, release

amount of money each player gets when they reset

mp\_suicide\_penalty

true

sv, release

Punish players for suicides

mp\_swapteams

cmd

sv

Swap the teams and restart the game

mp\_t\_default\_grenades

0

sv, cl, rep, release

The default grenades that the Ts will spawn with. To give multiple grenades, separate each weapon class with a space like this

mp\_t\_default\_melee

weapon\_knife

sv, cl, rep, release

The default melee weapon that the Ts will spawn with

mp\_t\_default\_primary

0

sv, cl, rep, release

The default primary (rifle) weapon that the Ts will spawn with

mp\_t\_default\_secondary

weapon\_glock

sv, cl, rep, release

The default secondary (pistol) weapon that the Ts will spawn with

mp\_tagging\_scale

1

sv, rep, release

Scalar for player tagging modifier when hit. Lower values for greater tagging.

mp\_taser\_recharge\_time

\-1

sv, cl, rep, release

Determines recharge time for taser. -1 = disabled.

mp\_td\_dmgtokick

300

sv, rep, release

The damage threshhold players have to exceed in a match to get kicked.

mp\_td\_dmgtowarn

200

sv, rep, release

The damage threshhold players have to exceed in a match to get warned that they are about to be kicked.

mp\_td\_spawndmgthreshold

50

sv, rep, release

The damage threshold players have to exceed at the start of the round to be warned/kick.

mp\_tdm\_healthshot\_killcount

3

sv, cl, rep, release

Grant healthshots in team deathmatch after n kills

mp\_team\_intro\_time

6.5

sv, nf, rep, release

How many seconds for team intro

mp\_team\_timeout\_max

1

sv, cl, rep, release

Number of timeouts each team gets per match.

mp\_team\_timeout\_time

60

sv, cl, rep, release

Duration of each timeout.

mp\_teamcashawards

true

sv, cl, rep, release

Teams can earn money by performing in-game actions

mp\_teamflag\_1

0

sv, release

Enter a country's alpha 2 code to show that flag next to team 1's name in the spectator scoreboard.

mp\_teamflag\_2

0

sv, release

Enter a country's alpha 2 code to show that flag next to team 2's name in the spectator scoreboard.

mp\_teamlogo\_1

0

sv, release

Enter a team's shorthand image name to display their logo. Images can be found here

mp\_teamlogo\_2

0

sv, release

Enter a team's shorthand image name to display their logo. Images can be found here

mp\_teammatchstat\_1

0

sv, release

A non-empty string sets first team's match stat.

mp\_teammatchstat\_2

0

sv, release

A non-empty string sets second team's match stat.

mp\_teammatchstat\_cycletime

45

sv, release

Cycle match stats after so many seconds

mp\_teammatchstat\_holdtime

5

sv, release

Decide on a match stat and hold it additionally for at least so many seconds

mp\_teammatchstat\_txt

0

sv, release

A non-empty string sets the match stat description, e.g. 'Match 2 of 3'.

mp\_teammates\_are\_enemies

false

sv, cl, nf, rep, release

When set, your teammates act as enemies and all players are valid targets.

mp\_teamname\_1

0

sv, release

A non-empty string overrides the first team's name.

mp\_teamname\_2

0

sv, release

A non-empty string overrides the second team's name.

mp\_teamprediction\_pct

0

sv, release

A value between 1 and 99 will show predictions in favor of CT team.

mp\_teamprediction\_txt

#SFUIHUD\_Spectate\_Predictions

sv, release

A value between 1 and 99 will set predictions in favor of first team.

mp\_teamscore\_1

0

sv, release

A non-empty string for best-of-N maps won by the first team.

mp\_teamscore\_2

0

sv, release

A non-empty string for best-of-N maps won by the second team.

mp\_teamscore\_max

0

sv, release

How many maps to win the series (bo3 max=2; bo5 max=3; bo7 max=4)

mp\_technical\_timeout\_duration\_s

120

sv, cl, rep, release

How many seconds is a full technical timeout?

mp\_technical\_timeout\_per\_team

1

sv, cl, rep, release

How many technical timeouts are there per team?

mp\_timelimit

0

sv, cl, nf, rep, release

game time per map in minutes

mp\_tkpunish

0

sv, rep, release

Will TK'ers and team damagers be punished in the next round? {0=no, 1=yes}

mp\_unpause\_match

cmd

sv

Resume the match

mp\_use\_respawn\_waves

0

sv, cl, rep, release

When set to 1, and that player's team is set to respawn, they will respawn in waves. If set to 2, teams will respawn when the whole team is dead.

mp\_verbose\_changelevel\_spew

1

sv, cl, rep, release

mp\_warmup\_end

cmd

sv

End warmup immediately.

mp\_warmup\_offline\_enabled

false

sv, cl, rep, release

Whether or not to do a warmup period at the start of a match in an offline (bot) match.

mp\_warmup\_online\_enabled

true

sv, cl, rep, release

Whether or not to do a warmup period at the start of an online match.

mp\_warmup\_pausetimer

0

sv, cl, rep, release

Set to 1 to stay in warmup indefinitely. Set to 0 to resume the timer.

mp\_warmup\_start

cmd

sv

Start warmup.

mp\_warmuptime

300

sv, cl, rep, release

How long the warmup period lasts. Changing this value resets warmup.

mp\_warmuptime\_all\_players\_connected

60

sv, cl, rep, release

Warmup time to use when all players have connected. 0 to disable.

mp\_weapon\_melee\_touch\_time\_after\_hit

5

sv, cheat, release

mp\_weapon\_next\_owner\_touch\_time

1.3

sv, cheat, release

mp\_weapon\_prev\_owner\_touch\_time

1.5

sv, cheat, release

mp\_weapon\_self\_inflict\_amount

0

sv, rep, release

If Set to non-0, will hurt the attacker by the specified fraction of max damage if they miss.

mp\_weapons\_allow\_heavy

\-1

sv, cl, rep, release

Determines which team, if any, can purchase Heavy guns. -1 = any; 0 = non; 2 = Ts; 3 = CTs.

mp\_weapons\_allow\_heavyassaultsuit

false

sv, cl, rep, release

Determines whether heavyassaultsuit is permitted.

mp\_weapons\_allow\_map\_placed

true

sv, cl, rep, release

If this convar is set, when a match starts, the game will not delete weapons placed in the map.

mp\_weapons\_allow\_pistols

\-1

sv, cl, rep, release

Determines which team, if any, can purchase Pistols. -1 = any; 0 = non; 2 = Ts; 3 = CTs.

mp\_weapons\_allow\_rifles

\-1

sv, cl, rep, release

Determines which team, if any, can purchase Rifles. -1 = any; 0 = non; 2 = Ts; 3 = CTs.

mp\_weapons\_allow\_smgs

\-1

sv, cl, rep, release

Determines which team, if any, can purchase SMGs. -1 = any; 0 = non; 2 = Ts; 3 = CTs.

mp\_weapons\_allow\_typecount

5

sv, cl, rep, release

Determines how many purchases of each weapon type allowed per player per round (0 to disallow purchasing, -1 to have no limit).

mp\_weapons\_allow\_zeus

5

sv, cl, rep, release

Determines how many Zeus purchases a player can make per round (0 to disallow, -1 to have no limit).

mp\_weapons\_glow\_on\_ground

false

sv, cl, rep, release

If this convar is set, weapons on the ground will have a glow around them.

mp\_weapons\_max\_gun\_purchases\_per\_weapon\_per\_match

\-1

sv, cl, rep, release

Max number of times a player may purchase any weapon per match

mp\_win\_panel\_display\_time

3

sv, cl, rep, release

The amount of time to show the win panel between matches / halfs

multvar

cmd

norecord

Multiply specified convar value.

name

star @STR

a, per\_user

nav\_add\_to\_selected\_set

cmd

sv, cheat

Add current area to the selected set.

nav\_add\_to\_selected\_set\_by\_id

cmd

sv, cheat

Add specified area id to the selected set.

nav\_avoid

cmd

sv, cheat

Toggles the 'avoid this area when possible' flag used by the AI system.

nav\_avoid\_obstacles

true

sv, cheat

nav\_begin\_deselecting

cmd

sv, cheat

Start continuously removing from the selected set.

nav\_begin\_drag\_deselecting

cmd

sv, cheat

Start dragging a selection area.

nav\_begin\_drag\_selecting

cmd

sv, cheat

Start dragging a selection area.

nav\_begin\_selecting

cmd

sv, cheat

Start continuously adding to the selected set.

nav\_bfs\_debug

0

sv, cheat

nav\_check\_connectivity

cmd

sv, cheat

Checks to be sure every (or just the marked) nav area can get to every goal area for the map (hostages or bomb site).

nav\_clear\_attribute

cmd

sv, cheat

Remove given nav attribute from all areas in the selected set.

nav\_clear\_attributes

cmd

sv, cheat

Clear all nav attributes of selected area.

nav\_clear\_selected\_set

cmd

sv, cheat

Clear the selected set.

nav\_corner\_adjust\_adjacent

18

cheat

radius used to raise/lower corners in nearby areas when raising/lowering corners.

nav\_curve\_alt

false

sv, cheat

nav\_curve\_iter

0

sv, cheat

nav\_curve\_lock

\-1

sv, cheat

nav\_curve\_max\_step

10

sv, cheat

nav\_curve\_set

\-1

sv, cheat

nav\_curve\_step

0.02

sv, cheat

nav\_debug\_blocked

false

sv, cheat

nav\_delete

cmd

sv, cheat

Deletes the currently highlighted Area.

nav\_delete\_all\_hull

cmd

sv, cheat

Deletes all areas with given hull category.

nav\_delete\_marked

cmd

sv, cheat

Deletes the currently marked Area (if any).

nav\_disconnect

cmd

sv, cheat

To disconnect two Areas, mark an Area, highlight a second Area, then invoke the disconnect command. This will remove all connections between the two Areas.

nav\_draw\_area\_filled

true

sv, cheat

nav\_draw\_area\_ground

false

sv, cheat

nav\_draw\_area\_ztest

false

sv, cheat

nav\_draw\_attribute\_dynamic

0

sv, cheat

Draw all nav areas with this dynamic attribute

nav\_draw\_attribute\_game

0

sv, cheat

Draw all nav areas with this game attribute

nav\_draw\_blocked

true

sv, cheat

nav\_draw\_blocked\_connections

false

sv, cheat

nav\_draw\_connected\_area\_radius

1000

sv, cheat

nav\_draw\_connections

false

sv, cheat

nav\_draw\_dangerareas

false

sv, cheat

nav\_draw\_externally\_created

false

sv, cheat

nav\_draw\_hidingspots

false

sv, cheat

nav\_draw\_hull\_support

false

sv, cheat

nav\_draw\_indices

false

sv, cheat

nav\_draw\_inset\_margin

0

sv, cheat

nav\_draw\_jump\_links

false

sv, cheat

nav\_draw\_limit

300

sv, cheat

The maximum number of areas to draw in edit mode

nav\_draw\_link\_alignment

false

sv, cheat

nav\_draw\_links

false

sv, cheat

nav\_draw\_markup

true

sv, cheat

nav\_draw\_markup\_offset

4

sv, cheat

nav\_draw\_mesh

true

sv, cheat

nav\_draw\_mesh\_grid

false

sv, cheat

Draw the mesh's spatial grid structure around the edit cursor position.

nav\_draw\_mesh\_offset

1

sv, cheat

Vertical offset for drawing the mesh (useful for flat planes where the mesh is often a fixed offset from the physical ground

nav\_draw\_should\_be\_destroyed

false

sv, cheat

nav\_draw\_space\_bounds

false

sv, cheat

nav\_draw\_space\_fly

false

sv, cheat

nav\_draw\_space\_neighbors

false

sv, cheat

nav\_draw\_space\_portals

false

sv, cheat

nav\_draw\_space\_swim

false

sv, cheat

nav\_draw\_split\_by\_nav\_link\_mgr

false

sv, cheat

nav\_draw\_split\_by\_obstacle\_mgr

false

sv, cheat

nav\_draw\_vert\_hotspots

false

sv, cheat

nav\_draw\_vertex\_normal

false

sv, cheat

nav\_edit

0

sv, cheat

Set to one to interactively edit the Navigation Mesh. Set to zero to leave edit mode.

nav\_edit\_validate

false

sv, cheat

Validate navmesh structures.

nav\_end\_deselecting

cmd

sv, cheat

Stop continuously removing from the selected set.

nav\_end\_drag\_deselecting

cmd

sv, cheat

Stop dragging a selection area.

nav\_end\_drag\_selecting

cmd

sv, cheat

Stop dragging a selection area.

nav\_end\_selecting

cmd

sv, cheat

Stop continuously adding to the selected set.

nav\_gen\_add\_jumps

true

cheat

nav\_gen\_agent\_radius\_buffer

0.75

cheat

Buffer to add to agent radius before passing to nav gen

nav\_gen\_clip\_polys\_to\_clearance

true

cheat

nav\_gen\_clip\_polys\_to\_clearance\_debug

false

cheat

nav\_gen\_connect\_allow\_multiple

true

cheat

nav\_gen\_connect\_angle

0.75

cheat

nav\_gen\_connect\_angle\_ignore\_z

true

cheat

nav\_gen\_connect\_dist\_a

1

cheat

nav\_gen\_connect\_dist\_b

1.5

cheat

nav\_gen\_connect\_dist\_z\_mult

0.5

cheat

nav\_gen\_connect\_overlap

0.5

cheat

nav\_gen\_degen\_limit

0.001

cheat

nav\_gen\_false

false

cheat

Always false

nav\_gen\_island\_removal

false

cheat

nav\_gen\_island\_removal\_all\_hulls

true

cheat

nav\_gen\_join\_nonzup

true

cheat

nav\_gen\_jump\_connection\_min\_overlap\_ratio

0.1

cheat

Minimum edge overlap required for jump connection consideration as a percentage of agent radius

nav\_gen\_markup\_split\_expand

2

cheat

nav\_gen\_markup\_split\_tol\_base

1

cheat

nav\_gen\_markup\_split\_tol\_nonav

1

cheat

nav\_gen\_markup\_split\_tol\_nonentity

8

cheat

nav\_gen\_match\_ground

false

cheat

nav\_gen\_max\_bottleneck\_width

128

cheat

nav\_gen\_max\_bottleneck\_width\_do\_clip

true

cheat

nav\_gen\_max\_edge\_len

512

cheat

nav\_gen\_max\_edge\_len\_do\_clip

true

cheat

nav\_gen\_max\_edge\_len\_split\_tol

24

cheat

nav\_gen\_opt\_to\_quads

true

cheat

nav\_gen\_opt\_to\_quads\_angle\_limit

8

cheat

nav\_gen\_opt\_to\_quads\_num\_steps

6

cheat

nav\_gen\_opt\_to\_quads\_planar\_deviation\_limit

4

cheat

nav\_gen\_opt\_to\_quads\_se\_limit\_end

0.1

cheat

nav\_gen\_opt\_to\_quads\_se\_limit\_start

0.000010

cheat

nav\_gen\_opt\_to\_quads\_weld\_limit\_end

0.01

cheat

nav\_gen\_opt\_to\_quads\_weld\_limit\_start

0

cheat

nav\_gen\_remove\_vertical\_polys

true

cheat

nav\_gen\_split\_boundary\_polys

false

cheat

nav\_gen\_split\_multi\_connection\_polys

true

cheat

nav\_gen\_split\_multi\_connection\_polys\_tol

0.01

cheat

nav\_gen\_tr\_max\_acceptable\_cost\_1

900

cheat

nav\_gen\_tr\_max\_acceptable\_cost\_2

900

cheat

nav\_gen\_tri\_reduce\_all

false

cheat

nav\_gen\_true

true

cheat

Always true

nav\_gen\_vertical\_limit

88

cheat

nav\_genrt\_debug

false

sv, cheat

nav\_genrt\_no\_splice

false

sv, cheat

nav\_genrt\_no\_split

false

sv, cheat

nav\_genrt\_step

\-1

sv, cheat

nav\_lower\_drag\_volume\_max

cmd

sv, cheat

Lower the top of the drag select volume.

nav\_lower\_drag\_volume\_min

cmd

sv, cheat

Lower the bottom of the drag select volume.

nav\_mark

cmd

sv, cheat

Marks the Area or Ladder under the cursor for manipulation by subsequent editing commands.

nav\_mark\_attribute

cmd

sv, cheat

Set nav attribute for all areas in the selected set.

nav\_max\_view\_distance

0

sv, cheat

Maximum range for precomputed nav mesh visibility (0 = default 1500 units)

nav\_max\_vis\_delta\_list\_length

64

cheat

nav\_obstacle\_genrt

false

sv, cheat

nav\_obstacle\_validate

false

sv, cheat

nav\_obstruction\_draw

0

sv, cheat

nav\_obstruction\_draw\_change

false

sv, cheat

nav\_obstruction\_draw\_dist

\-1

sv, cheat

nav\_obstruction\_draw\_fail\_block

false

sv, cheat

nav\_path\_debug

false

sv, cheat

nav\_path\_debug\_compute\_with\_open\_goal

0

sv, cheat

nav\_path\_draw\_areas

false

sv, cheat

nav\_path\_draw\_arrow

true

sv, cheat

nav\_path\_draw\_climb\_segments

true

sv, cheat

nav\_path\_draw\_connected\_areas

false

sv, cheat

nav\_path\_draw\_ground\_segments

true

sv, cheat

nav\_path\_draw\_jump\_segments

true

sv, cheat

nav\_path\_draw\_ladder\_segments

true

sv, cheat

nav\_path\_draw\_link\_segments

true

sv, cheat

nav\_path\_draw\_tick

0

sv, cheat

nav\_path\_fixup\_climb\_up\_segments

true

sv, cheat

nav\_path\_fixup\_gap\_segments

false

sv, cheat

nav\_path\_jump\_process\_debug

false

sv, cheat

nav\_path\_optimize

true

sv, cheat

nav\_path\_optimize\_portals

true

sv, cheat

nav\_path\_optimizer\_debug

0

sv, cheat

nav\_path\_record\_draw\_last\_fail

false

sv, cheat

nav\_path\_record\_enable

1

sv, cheat

nav\_pathfind\_debug\_draw

0

sv, cheat

nav\_pathfind\_debug\_draw\_costs

false

sv, cheat

nav\_pathfind\_debug\_draw\_errors

0

sv, cheat

nav\_pathfind\_debug\_draw\_total\_costs

false

sv, cheat

nav\_pathfind\_debug\_log

0

sv, cheat

nav\_pathfind\_inadmissable\_heuristic\_factor

1

sv, cheat

nav\_potentially\_visible\_dot\_tolerance

0.98

sv, cheat

nav\_precise

cmd

sv, cheat

Toggles the 'dont avoid obstacles' flag used by the AI system.

nav\_raise\_drag\_volume\_max

cmd

sv, cheat

Raise the top of the drag select volume.

nav\_raise\_drag\_volume\_min

cmd

sv, cheat

Raise the bottom of the drag select volume.

nav\_recall\_selected\_set

cmd

sv, cheat

Re-selects the stored selected set.

nav\_remove\_from\_selected\_set

cmd

sv, cheat

Remove current area from the selected set.

nav\_select\_allow\_blocked

true

sv, cheat

When selecting an area under nav\_edit, allow area marked as blocked.

nav\_select\_area\_id

\-1

sv, cheat

Select nav area with matching ID.

nav\_select\_block\_id

\-1

sv, cheat

Select nav space block with matching ID.

nav\_select\_hull

0

sv, cheat

Restrict area selection to areas that can support a hull of the given category

nav\_select\_radius

cmd

sv, cheat

Adds all areas in a radius to the selection set

nav\_select\_with\_attribute

cmd

sv, cheat

Selects areas with the given attribute.

nav\_show\_area\_connections

true

sv, cheat

Show connections to selected area when true

nav\_show\_area\_info\_font

Consolas

sv, cheat

nav\_show\_area\_info\_font\_size

\-1

sv, cheat

nav\_show\_area\_info\_font\_voffset

\-11

sv, cheat

nav\_show\_area\_verts

true

sv, cheat

Show area vertex positions

nav\_show\_area\_water\_info

true

sv, cheat

nav\_show\_potentially\_visible

0

cheat

Show areas that are potentially visible from the current nav area

nav\_smooth\_calc\_z

true

sv, cheat

nav\_smooth\_constrain\_results

true

sv, cheat

nav\_smooth\_constrain\_results\_relax

0.006

sv, cheat

nav\_smooth\_constrain\_spring

2

sv, cheat

nav\_smooth\_constrain\_spring\_relax

0.01

sv, cheat

nav\_smooth\_draw\_accel

0

sv, cheat

nav\_smooth\_draw\_boundary

0

sv, cheat

nav\_smooth\_draw\_calc

false

sv, cheat

nav\_smooth\_draw\_constraint\_spline

false

sv, cheat

nav\_smooth\_draw\_constraint\_spring

0

sv, cheat

nav\_smooth\_draw\_speed

0

sv, cheat

nav\_smooth\_enable

true

sv, cheat

nav\_smooth\_relax

true

sv, cheat

nav\_smooth\_relax\_use\_timesteps

false

sv, cheat

nav\_smooth\_separating\_dist\_override

0

sv, cheat

nav\_smooth\_spring\_const\_override

\-1

sv, cheat

nav\_smooth\_spring\_factor\_deriv

0

sv, cheat

nav\_smooth\_spring\_factor\_dist

0

sv, cheat

nav\_smooth\_spring\_factor\_speed

0

sv, cheat

nav\_smooth\_spring\_forward\_dist\_base

50

sv, cheat

nav\_smooth\_spring\_forward\_dist\_time\_limit

1

sv, cheat

nav\_smooth\_spring\_max\_dist

36

sv, cheat

nav\_smooth\_spring\_tension\_max\_override

\-1

sv, cheat

nav\_smooth\_spring\_timestep\_factor\_accel

100

sv, cheat

nav\_smooth\_spring\_timestep\_factor\_speed

100

sv, cheat

nav\_smooth\_spring\_timestep\_max

0.5

sv, cheat

nav\_smooth\_spring\_timestep\_min

0.1

sv, cheat

nav\_smooth\_spring\_yaw\_rotation\_speed

50

sv, cheat

nav\_smooth\_spring\_yaw\_threshold

20

sv, cheat

nav\_smooth\_use\_opt

true

sv, cheat

nav\_space\_select\_dist

200

sv, cheat

nav\_split

cmd

sv, cheat

To split an Area into two, align the split line using your cursor and invoke the split command.

nav\_split\_place\_on\_ground

false

cheat

If true, nav areas will be placed flush with the ground when split.

nav\_split\_show\_line

false

sv, cheat

Show the free split line.

nav\_store\_selected\_set

cmd

sv, cheat

Stores the current selected set for later retrieval.

nav\_switch

cmd

sv

Switches to navmesh for the specified spawngroup

nav\_test\_bfs\_lattice\_dist\_0

\-1

sv, cheat

nav\_test\_bfs\_lattice\_dist\_1

\-1

sv, cheat

nav\_test\_bfs\_lattice\_dist\_2

\-1

sv, cheat

nav\_test\_bfs\_lattice\_hex

false

sv, cheat

Demonstrates searching hexagonal lattice over nav mesh.

nav\_test\_bfs\_lattice\_mark

2

sv, cheat

nav\_test\_bfs\_lattice\_simple

false

sv, cheat

nav\_test\_bfs\_lattice\_spacing\_0

24

sv, cheat

nav\_test\_bfs\_lattice\_spacing\_1

48

sv, cheat

nav\_test\_bfs\_lattice\_spacing\_2

96

sv, cheat

nav\_test\_bfs\_simple

false

sv, cheat

nav\_test\_boundary\_zone\_circle

0

sv, cheat

nav\_test\_boundary\_zone\_force

false

sv, cheat

nav\_test\_boundary\_zone\_grid\_dim

90

sv, cheat

nav\_test\_boundary\_zone\_path

0

sv, cheat

nav\_test\_boundary\_zone\_rays

100

sv, cheat

nav\_test\_boundary\_zone\_rays\_margin

\-1

sv, cheat

nav\_test\_boundary\_zone\_rays\_random

false

sv, cheat

nav\_test\_curve\_opt

0

sv, cheat

nav\_test\_detour

false

sv, cheat

nav\_test\_find\_nearest

false

sv, cheat

Calculate the nearest point on the navmesh to the trace point. Uses selection from nav\_select\_hull.

nav\_test\_find\_nearest\_clear

false

sv, cheat

Calculate the nearest point on the navmesh to the trace point. Uses selection from nav\_select\_hull.

nav\_test\_find\_random\_connected

false

sv, cheat

Demonstrates finding random points that are connected in the nav mesh to the start point.

nav\_test\_find\_random\_connected\_dist\_max

1000

sv, cheat

nav\_test\_find\_random\_connected\_dist\_min

100

sv, cheat

nav\_test\_find\_z

0

sv, cheat

nav\_test\_force\_npc\_repath

false

sv, cheat

nav\_test\_genrt

false

sv, cheat

nav\_test\_genrt\_place

false

sv, cheat

nav\_test\_level\_hull

cmd

sv, cheat

Find entities that intrude into the nav mesh. List those entities in console output, and display bounding boxes around them for a while.

nav\_test\_level\_hull\_move

cmd

sv, cheat

nav\_test\_multi\_connection

false

sv, cheat

nav\_test\_npc\_area

0

sv, cheat

nav\_test\_npc\_collision

0

sv, cheat

nav\_test\_npc\_collision\_show\_geometry

false

sv, cheat

nav\_test\_path

false

sv, cheat

Calculate and draw a path from player/camera position to the test position.

nav\_test\_path\_expansion\_search

0

sv, cheat

Extend nav\_test\_path by doing an expansion search on that path. Convar value defines dist.

nav\_test\_path\_lock\_goal

false

sv, cheat

Lock the pathfinding goal to the current intersection point.

nav\_test\_path\_lock\_start

false

sv, cheat

Lock the pathfinding start to the current intersection point.

nav\_test\_path\_move

false

sv, cheat

nav\_test\_path\_opt

true

sv, cheat

Enable path optimization for nav\_edit\_path paths.

nav\_test\_path\_opt\_transitions

false

sv, cheat

nav\_test\_path\_return

false

sv, cheat

Calculate a return path from cursor position to the path calculated by nav\_test\_path.

nav\_test\_path\_space

0

sv, cheat

Should nav\_test\_path test 3d navigation? 1 = space to space, 2 = multi-modal space/ground

nav\_test\_path\_space\_fly

true

sv, cheat

Test flight paths

nav\_test\_path\_space\_swim

true

sv, cheat

Test swim paths

nav\_test\_ray\_space

false

sv, cheat

nav\_test\_rays

false

sv, cheat

nav\_test\_smooth

false

sv, cheat

nav\_test\_smooth\_extern\_push

0

sv, cheat

nav\_test\_smooth\_in\_speed

120

sv, cheat

nav\_test\_smooth\_in\_yaw

0

sv, cheat

nav\_test\_smooth\_path\_speed

\-1

sv, cheat

nav\_test\_smooth\_separating\_dist

\-1

sv, cheat

nav\_test\_smooth\_spring\_const

\-1

sv, cheat

nav\_test\_smooth\_spring\_tension\_max

\-1

sv, cheat

nav\_test\_spline

0

sv, cheat

nav\_test\_split\_obstacle

0

sv, cheat

nav\_test\_split\_obstacle\_dirty

false

sv, cheat

nav\_test\_split\_obstacle\_leave

false

sv, cheat

nav\_test\_split\_obstacle\_size

30

sv, cheat

nav\_test\_split\_obstacle\_update\_pos

true

sv, cheat

nav\_toggle\_deselecting

cmd

sv, cheat

Start or stop continuously removing from the selected set.

nav\_toggle\_in\_selected\_set

cmd

sv, cheat

Remove current area from the selected set.

nav\_toggle\_selected\_set

cmd

sv, cheat

Toggles all areas into/out of the selected set.

nav\_toggle\_selecting

cmd

sv, cheat

Start or stop continuously adding to the selected set.

nav\_unmark

cmd

sv, cheat

Clears the marked Area or Ladder.

nav\_validate

0

cheat

Level of validation for nav system. Higher will be slower.

nav\_volume\_debug

0

sv, cheat

Draw or print debug information about nav volume queries.

navspace\_block\_size\_max

1024

sv, cheat

navspace\_create\_tactial\_connections

true

sv, cheat

navspace\_create\_water\_smooth\_connections

true

sv, cheat

navspace\_create\_water\_transition\_connections

true

sv, cheat

navspace\_debug\_pathfind

\-1

sv, cheat

navspace\_debug\_stringpull

1

sv, cheat

navspace\_debug\_trace

0

sv, cheat

navspace\_debug\_transition\_calc

0

sv, cheat

navspace\_draw\_cluster

\-1

sv, cheat

navspace\_draw\_cluster\_neighbor

\-1

sv, cheat

navspace\_draw\_water\_changes

0

sv, cheat

Draw changes in water volumes

net\_allow\_multicast

true

a, release

net\_captureculldata

cmd

Captures low-level data to replay path culling algorithm behavior in controlled unit test environment

net\_channels

cmd

Shows net channel info

net\_client\_steamdatagram\_enable\_override

0

cl, release

0

net\_connections\_stats

cmd

Print detailed network statistics for each network connection

net\_fakelag

cmd

Shorthand for 'net\_option FakePacketLag\_Recv'

net\_listallmessages

cmd

cheat

List all registered net messages

net\_maxroutable

1200

a, user

Requested max packet size before packets are 'split'.

net\_messageinfo

cmd

cheat

Display info about a message (by classname or id)

net\_option

cmd

Get or set SteamNetworkingSockets options such as fake packet lag and loss

net\_public\_adr

0

release

For servers behind NAT/DHCP meant to be exposed to the public internet, this is the public facing ip address string

net\_serializedentitymemory

cmd

Spew CSerializedEntity memory

net\_serializedentitymetadatainfo

cmd

Spew CSerializedEntity metadata information

net\_showudp

false

release

Dump UDP packets summary to console

net\_showudp\_remoteonly

true

release

Dump non-loopback udp only

net\_spewcounts

cmd

Spew serializer counts

net\_stats\_json

cmd

Output server networking statistics in json format

net\_status

cmd

Shows current network status

net\_validatemessages

cmd

cheat

Activates/deactivates net message validation

nextdemo

cmd

Play next demo in sequence.

nextlevel

0

sv, nf, release

If set to a valid map name, will trigger a changelevel to the specified map at the end of the round

nextmap\_print\_enabled

false

sv, release

When enabled prints next map to clients

nextmode

0

sv, nf, rep, release

Sets the game mode to be played when the next level loads

noclip

cmd

sv, cheat

Toggle. Player becomes non-solid and flies. Optional argument of 0 or 1 to force enable/disable

noclip\_fixup

true

sv, cheat

notarget

cmd

sv, cheat

Toggle. Player becomes hidden to NPCs.

observer\_use

cmd

sv

open\_asset

cmd

Opens an asset in it's primary editor of choice. Specify the full path to the asset from the mod directory.

option\_duck\_method

false

cl, a, user, per\_user

Input toggle control

option\_speed\_method

false

cl, a, user, per\_user

Input toggle control

p2p\_listpeers

cmd

List currently known peers.

p2p\_ping

cmd

cl

Ping a peer.

panorama\_debugger\_theme

Light

cl, a

panorama\_focus\_world\_panels

false

cl, a

when set request key focus when a world panel is enabled

particle\_profile

cmd

Profile particle

particle\_profile\_spike

cmd

Profile particle spike

particle\_test\_attach\_attachment

0

sv, cheat

Attachment index for attachment mode

particle\_test\_attach\_mode

follow\_attachment

sv, cheat

Possible Values

particle\_test\_create

cmd

sv, cheat

Creates the named particle system where the player is looking. Arguments

particle\_test\_destroy

cmd

sv, cheat

Destroys all particle systems matching the specified name. Arguments

particle\_test\_file

0

sv, cheat

Name of the particle system to dynamically spawn

particle\_test\_start

cmd

sv, cheat

Dispatches the test particle system with the parameters specified in particle\_test\_file, particle\_test\_attach\_mode and particle\_test\_attach\_param on the entity the player is looking at. Arguments

particle\_test\_stop

cmd

sv, cheat

Stops all particle systems on the selected entities. Arguments

particles\_multiplier

1

cheat

Multiply # of rendered particles by this for perf testing

password

0

a, norecord, server\_cant\_query

Current server access password

path

cmd

Show the filesystem path.

pause

cmd

Toggle the server pause state.

phys\_create\_test\_character\_proxy

cmd

sv

Create test character proxy

phys\_debug\_draw

cmd

Set up debug-draw of physics internal state

phys\_debug\_showdefaultmaterial

false

cheat

If enabled, surfaces with default material are highlighted in physics debug geometry.

phys\_dump\_intersection\_controller

cmd

sv

Dump intersection controller status

phys\_dynamic\_scaling

true

sv, cl, rep, cheat

phys\_joint\_teleport

true

sv, cheat

Teleport joint anchors if connected to world

phys\_length\_damping\_ratio

2

sv, cheat

Spring damping ratio for length constraint

phys\_length\_frequency

5

sv, cheat

Spring stiffness for length constraint

phys\_list

cmd

sv

List all physics component contents of every entity in the game; -stream \[1

phys\_mark\_debug

cmd

sv, cheat

Mark object for debug

phys\_shoot

cmd

sv, cheat

Shoots a phys object.

phys\_sleep

cmd

sv

Put all physics in all the worlds to sleep

phys\_use\_block\_solver

true

sv, cheat

Use block solving for constraint entities

phys\_visualize\_traces

false

sv, cl, rep, cheat

phys\_wakeup

cmd

sv

Wake all physics objects in the Main physics up

physics\_add\_test

cmd

sv

add test object

physics\_debug\_entity

cmd

sv

Dumps debug info for an entity

physics\_highlight\_active

cmd

sv

Turns on the absbox for all active physics objects. 0

physics\_remove\_test

cmd

sv

remove test object

physics\_report\_active

cmd

sv

Lists all active physics objects -more

pixelvis\_debug

cmd

cheat

Dump debug info

play

cmd

server\_can\_execute

Play a sound.

playcast

cmd

Play a broadcast

playdemo

cmd

Play a recorded demo file (.dem ).

player0\_using\_joystick

false

a

player\_botdifflast\_s

4

cl, a, release

player\_competitive\_maplist\_2v2\_10\_0\_DBAEB932

mg\_de\_train,mg\_de\_lake,mg\_de\_inferno,mg\_de\_nuke,mg\_de\_vertigo,mg\_de\_shortdust,mg\_de\_overpass

cl, a

player\_competitive\_maplist\_8\_10\_0\_FB803604

mg\_de\_dust2

cl, a

player\_debug\_off\_nav

false

sv, cheat

player\_debug\_print\_damage

false

sv, cheat

When true, print amount and type of all damage received by player to console.

player\_nevershow\_communityservermessage

0

cl, a, per\_user

player\_ping

cmd

sv

Creates a ping notification where the player is looking.

player\_ping\_token\_cooldown

20

sv, cheat, release

Cooldown for how long it takes for a player's ping token to refresh allowing them to ping again (they get 5 tokens).

player\_survival\_list\_10\_0\_303

mg\_dz\_blacksite,mg\_dz\_sirocco,mg\_dz\_vineyard,mg\_dz\_ember

cl, a

player\_teamplayedlast

2

cl, a, per\_user

player\_use\_radius

80

sv, cl, rep, cheat

player\_wargames\_list2\_10\_0\_DC207394

mg\_skirmish\_armsrace

cl, a

playsound

cmd

playsound

playsoundscape

cmd

cl, cheat

Forces a soundscape to play

playvol

cmd

Play a sound at a specified volume.

png\_screenshot

cmd

Take a .png screenshot

pop\_var\_values

cmd

Restore previously pushed convars and config values

print\_mapgroup

cmd

cl, release

Prints the current mapgroup and the contained maps

print\_mapgroup\_sv

cmd

sv, release

Prints the current mapgroup and the contained maps

print\_model\_bind\_pose

cmd

Prints the bind pose of the specified model. Optionally limits to a particular bone and its parent chain, otherwise prints the entire skeleton.

progress\_enable

cmd

prop\_debug

cmd

sv, cheat

Toggle prop debug mode. If on, props will show colorcoded bounding boxes. Red means ignore all damage. White means respond physically to damage but never break. Green maps health in the range of 100 down to 1.

prop\_debug\_vr\_collision

false

sv, cheat

Highlights props based on their collision group

prop\_dynamic\_create

cmd

sv, cheat

Creates a dynamic prop with a specific .vmdl aimed away from where the player is looking. Arguments

prop\_physics\_create

cmd

sv, cheat

Creates a physics prop with a specific .vmdl aimed away from where the player is looking. Arguments

push\_var\_values

cmd

Save convars and config values

pvs\_debugentity

\-1

sv, release

Verbose spew for this entity when doing IsInPVS computation.

pvs\_flowtype

0

sv, release

Flow through spawn groups for vis (0 == default, 1 == always visible, 2 == never visible.

pwatchent

\-1

cl, cheat

Entity to watch for prediction system changes.

pwatchvar

0

cl, cheat

Entity variable to watch in prediction system for changes.

+quickbuyradial

cmd

cl

+quickgearradial

cmd

cl

+quickgrenaderadial

cmd

cl

+quickinv

cmd

cl

quit

cmd

vconsole\_set\_focus

Quit the game

r\_AirboatViewDampenDamp

1

sv, cl, nf, rep, cheat

r\_AirboatViewDampenFreq

7

sv, cl, nf, rep, cheat

r\_AirboatViewZHeight

0

sv, cl, nf, rep, cheat

r\_aoproxy\_debug

false

cl, cheat

r\_camerapos

cmd

linked

Prints out the current camera position + orientation to the console

r\_csgo\_cubemap\_normalization

true

cl, cheat

r\_csgo\_debug\_reflection\_rects

0

cl, cheat

r\_csgo\_decal\_debug

false

cl, cheat

r\_csgo\_depth\_prepass

true

cl, cheat

r\_csgo\_depth\_prepass\_cull\_threshold

60

cl, cheat

r\_csgo\_depth\_prepass\_players

true

cl, cheat

r\_csgo\_depth\_prepass\_reflections\_large

true

cl, cheat

r\_csgo\_depth\_prepass\_reflections\_small

true

cl, cheat

r\_csgo\_depth\_prepass\_skybox\_alpha\_tested

true

cl, cheat

r\_csgo\_depth\_prepass\_small\_cull\_threshold

10

cl, cheat

r\_csgo\_depth\_prepass\_viewmodel

true

cl, cheat

r\_csgo\_directional\_lightmaps

true

cl, cheat

r\_csgo\_effects\_bloom

true

cl, cheat

r\_csgo\_effects\_bloom\_when\_smoked

false

cl, cheat

r\_csgo\_enable\_glows

true

cl, cheat

r\_csgo\_enable\_high\_precision\_lighting

true

cl, cheat

r\_csgo\_enable\_outlines

true

cl, cheat

r\_csgo\_enable\_tonemapping

true

cl, cheat

r\_csgo\_enable\_translucent\_screen\_space

true

cl, cheat

r\_csgo\_mboit

true

cl, cheat

r\_csgo\_mboit\_bias

0.000005

cl, cheat

r\_csgo\_mboit\_debug

false

cl, cheat

r\_csgo\_mboit\_overestimation

0.01

cl, cheat

r\_csgo\_mboit\_use\_4\_moments

false

cl, cheat

r\_csgo\_mixed\_resolution\_color\_slices

false

cl, cheat

r\_csgo\_mixed\_resolution\_particles\_minmax

false

cl, cheat

r\_csgo\_mixed\_resolution\_particles\_scale

2

cl, cheat

r\_csgo\_no\_shader\_resolve

false

cl, cheat

r\_csgo\_override\_global\_time

true

cl, cheat

r\_csgo\_postprocess\_enable

true

cl, cheat

r\_csgo\_readonly\_depth\_stencil\_enable

true

cl, cheat

r\_csgo\_reflection\_min\_far\_plane

5000

cl, cheat

r\_csgo\_render\_decals

true

cl, cheat

r\_csgo\_render\_decals\_on\_translucent

true

cl, cheat

r\_csgo\_render\_dynamic\_objects

true

cl, cheat

r\_csgo\_render\_inferno\_decals

true

cl, cheat

r\_csgo\_render\_opaque

true

cl, cheat

r\_csgo\_render\_overlays

true

cl, cheat

r\_csgo\_render\_post\_bloom\_strength

\-1

cl, cheat

r\_csgo\_render\_post\_local\_contrast

true

cl, cheat

r\_csgo\_render\_translucent

true

cl, cheat

r\_csgo\_shadows\_debug

0

cl, cheat

r\_csgo\_volume\_mboit\_optimization

true

cl, cheat

r\_csgo\_water\_effects

true

cl, cheat

r\_csgo\_water\_refraction

true

cl, cheat

r\_cubemap\_debug\_colors

0

cheat

r\_debug\_particle\_shadows

false

cl, cheat

r\_debug\_precipitation

false

cl, cheat

Show precipitation volumes

r\_directlighting

true

cheat

Set to use direct lighting

r\_dof\_override

false

cheat

r\_dof\_override\_far\_blurry

2000

cheat

r\_dof\_override\_far\_crisp

180

cheat

r\_dof\_override\_near\_blurry

\-100

cheat

r\_dof\_override\_near\_crisp

0

cheat

r\_dof\_override\_tilt\_to\_ground

0.5

cheat

r\_dopixelvisibility

true

cheat

r\_draw\_first\_tri\_only

false

cheat

r\_draw\_instances

true

cheat

r\_draw\_particle\_children\_with\_parents

\-1

cheat

Draw particle children with parents (-1=use gameinfo, 0=no, 1=yes)

r\_drawblankworld

false

cheat

Render blank instead of the game world

r\_drawchickens

true

cl, cheat

Render chickens

r\_drawcsplayers

true

cl, cheat

Render CS players

r\_drawdecals

true

cheat

Set to render decals

r\_drawdevvisualizers

false

cl, cheat

Render dev visualizers

r\_drawpanorama

true

cheat

Enable the rendering of panorama UI

r\_drawparticles

true

cheat

Enable/disable particle rendering

r\_drawropes

true

cl, cheat

r\_drawskybox

true

cheat

Render the 2d skybox.

r\_drawsprites

true

cl, cheat

r\_drawtracers

true

cl, cheat

r\_drawviewmodel

true

cl, cheat

Render view model

r\_drawworld

true

cheat

Render the world.

r\_dx11\_report\_live\_objects

cmd

Prints out live D3D11 objects (requires -dx11debug)

r\_entpos

cmd

linked

Moves the camera position + orientation to the named entity

r\_extra\_render\_frames

0

cheat

r\_fallback\_texture\_lod\_scale

2

cheat

Scale factor for requested texture size (texture streaming) - used for geo that doesn't have a precomputed UV density measure

r\_farz

\-1

cl, cheat

Override the far clipping plane. -1 means to use the value in env\_fog\_controller.

r\_flashlightambient

0

cl, cheat

r\_flashlightbacktraceoffset

0.4

cl, cheat

r\_flashlightbrightness

1

cl, rep, cheat

r\_flashlightconstant

0

cl, rep, cheat

r\_flashlightfar

1500

cl, rep, cheat

r\_flashlightfov

53

cl, rep, cheat

r\_flashlightladderdist

40

cl, cheat

r\_flashlightlinear

100

cl, rep, cheat

r\_flashlightlockposition

false

cl, cheat

r\_flashlightmuzzleflashfov

120

cl, cheat

r\_flashlightnear

4

cl, rep, cheat

r\_flashlightnearoffsetscale

1

cl, cheat

r\_flashlightoffsetforward

0

cl, rep, cheat

r\_flashlightoffsetright

5

cl, rep, cheat

r\_flashlightoffsetup

\-5

cl, rep, cheat

r\_flashlightquadratic

0

cl, rep, cheat

r\_flashlightshadowatten

0.35

cl, cheat

r\_flashlighttracedistcutoff

128

cl, cheat

r\_flashlighttracedistwatercutoff

80

cl, cheat

r\_flashlightvisualizetrace

false

cl, cheat

r\_force\_engine\_render\_frame

cmd

Force a single render of the engine viewport.

r\_force\_no\_present

false

cheat

Force the render device to not present frames.

r\_force\_zprepass

\-1

cheat

0

r\_freezeparticles

false

cheat

Pause particle simulation

r\_fullscreen\_gamma

2.2

a

Screen Gamma (only in fullscreen modes)

r\_gpu\_mem\_stats

cmd

linked

Display GPU memory usage.

r\_incrementlodscale

cmd

linked

Modifies the LOD scale

r\_indirectlighting

true

cheat

Set to use indirect lighting

r\_JeepViewDampenDamp

1

sv, cl, nf, rep, cheat

r\_JeepViewDampenFreq

7

sv, cl, nf, rep, cheat

r\_JeepViewZHeight

10

sv, cl, nf, rep, cheat

r\_light\_probe\_volume\_debug\_colors

0

cheat

r\_light\_probe\_volume\_debug\_grid

false

cheat

Show LPV debug grid, 0

r\_light\_probe\_volume\_debug\_grid\_albedo

128 128 128

cheat

albedo for LPV debug grid

r\_light\_probe\_volume\_debug\_grid\_bbox

true

cheat

Show LPV bounding box when debug grid is on, 0

r\_light\_probe\_volume\_debug\_grid\_metalness

0

cheat

metalness for LPV debug grid

r\_light\_probe\_volume\_debug\_grid\_prim

0

cheat

0

r\_light\_probe\_volume\_debug\_grid\_roughness

0.5

cheat

roughness for LPV debug grid

r\_light\_probe\_volume\_debug\_grid\_samplesize

4

cheat

sphere radius (world) for LPV debug grid

r\_lightBinnerFarPlane

4096

cheat

r\_lightmap\_set

lightmaps

cheat

Lightmap set to use, only works on map load

r\_mapextents

16384

cl, cheat

Set the max dimension for the map. This determines the far clipping plane

r\_morphing\_enabled

true

cheat

r\_muzzleflashbrightness

0.4

cl, rep, cheat

r\_muzzleflashlinear

0.05

cl, rep, cheat

r\_nearz

\-1

cl, cheat

Override the near clipping plane. -1 means use the default.

r\_particle\_max\_draw\_distance

1000000.000000

cheat

The maximum distance that particles will render

r\_pixelvisibility\_partial

true

cheat

r\_pixelvisibility\_spew

false

cheat

r\_player\_visibility\_mode

1

cl, a, release

r\_print\_texture\_stats

cmd

Texture stats

r\_printdecalinfo

cmd

cl

Prints info about decals currently in the scene

r\_refraction\_clip\_plane\_adjust

\-1

cl, cheat

r\_render\_coordination\_state

cmd

Prints out the current render coordination state.

r\_render\_world\_node\_bounds

false

cheat

Render world node bounds

r\_renderdoc\_capture\_frame

cmd

linked

Triggers a RenderDoc capture

r\_rendersun

true

cheat

Render sun lighting

r\_replay\_post\_effect

\-1

cl, cheat

r\_setpos

cmd

linked

Moves the camera position + orientation to the specified position

r\_shadows

true

cheat

r\_show\_ao\_proxies

false

cl, cheat

r\_show\_hipoly\_draw\_calls

0

cheat

Transparent wireframe overlay for draw calls with triangle count higher than specified number

r\_showdebugoverlays

false

cheat

Set to render debug overlays

r\_showdebugrendertarget

false

cheat

Set the debug render target to show, 0 == disable

r\_showsceneobjectbounds

false

cheat

Show scenesystem object bounding boxes

r\_showsunshadowdebugrendertargets

false

cheat

Set to render sun shadow render targets

r\_showsunshadowdebugsplitvis

false

cheat

Set to render sun shadow split visibility debugger

r\_size\_cull\_threshold\_shadow

0.2

cheat

Threshold of sun shadow map size percentage below which objects get culled

r\_skinning\_enabled

true

cheat

r\_stereo\_multiview\_instancing

false

cheat

Use multiview instancing for stereo rendering.

r\_texture\_lod\_scale

1

cheat

Scale factor for requested texture size (texture streaming)

r\_textures\_evict\_all

cmd

linked

Evict all resident texture.

r\_toggleviewportsize

cmd

Toggles viewport size between small + full window.

r\_translucent

true

cheat

Enable rendering of translucent geometry

r\_viewport

cmd

Slams viewport size to a specified value.

r\_worldlod

true

cheat

Set to enable world LOD

r\_zprepass\_normals

false

cheat

0

radarvisdistance

1000

sv, cheat

at this distance and beyond you need to be point right at someone to see them

radarvismaxdot

0.996

sv, cheat

how closely you have to point at someone to see them beyond max distance

radarvismethod

1

sv, cheat

0 for traditional method, 1 for more realistic method

radarvispow

0.4

sv, cheat

the degree to which you can point away from a target, and still see them on radar.

+radialradio

cmd

cl

+radialradio2

cmd

cl

+radialradio3

cmd

cl

radio

cmd

cl

Opens a radio menu

radio1

cmd

cl

Opens a radio menu

radio2

cmd

cl

Opens a radio menu

radio3

cmd

cl

Opens a radio menu

ragdoll\_friction\_scale

0.6

sv, cl, rep, cheat

ragdoll\_gravity\_scale

1

sv, cl, rep, cheat

ragdoll\_lru\_debug\_removal

false

sv, cl, rep, cheat

ragdoll\_lru\_min\_age

10

sv, cl, rep, cheat

rangefinder

cmd

sv, cheat

Measures distance along a ray

rate

786432

a, user

Min bytes/sec the host can receive data

ray\_bench

cmd

sv

Load the rays and run the benchmark

rcon

cmd

norecord

Issue an rcon command.

rcon\_address

0

norecord, release, server\_cant\_query

Address of remote server if sending unconnected rcon commands (format x.x.x.x

rcon\_connected\_clients\_allow

true

rep, release

Allow clients to use rcon commands on server.

rcon\_password

0

norecord, release, server\_cant\_query

remote console password.

rebuy

cmd

cl, clientcmd\_can\_execute

Attempt to repurchase items with the order listed in cl\_rebuy

recast\_mark\_overhang

true

rep, cheat

Enable/disable overhang detection

recast\_partitioning

0

rep, cheat

0 = watershed, 1 = monotone, 2 = layers

record

cmd

norecord

Record a demo.

refresh\_ui\_audio\_state

cmd

cl, cheat

Restores audio DSP state for the UI.

regenerate\_weapon\_skins

cmd

cl, cheat

reload\_model

cmd

Force a reload of a vmdl resource

reload\_store\_config

cmd

cl

reloadgame

cmd

cheat, vconsole\_set\_focus

Reload the most recent saved game.

remove\_weapon

cmd

sv, cheat

Remove a weapon held by the player. Arguments

removeid

cmd

Remove a user ID from the ban list.

removeip

cmd

Remove an IP address from the ban list.

repeat\_last\_console\_command

cmd

Repeat last console command.

replay\_death

cmd

sv, cheat

start hltv replay of last death

replay\_debug

0

rep, release

replay\_start

cmd

sv, cheat

Start GOTV replay

replay\_stop

cmd

sv

stop hltv replay

report\_cliententitysim

false

cl, cheat

List all clientside simulations and time - will report and turn itself off.

report\_clientthinklist

false

cl, cheat

List all clientside entities thinking and time - will report and turn itself off.

report\_soundpatch

cmd

sv

reports sound patch count

reset\_gameconvars

cmd

cheat

Reset game convars to default values

resource\_leaks

cmd

resource\_leaks <resource\_name>

resource\_list

cmd

List loaded resources matching a substring

resource\_log\_allocate\_timing

cmd

Log time spent in Allocate for all resource types

resource\_manifest\_validate\_modules

cmd

Scan all of the loaded modules and validate any resource manifests found

resource\_repeated\_reload

cmd

resource\_repeated\_reload <resource\_name> ( ...)

resource\_reset\_allocate\_timing

cmd

Reset tracked time spent in Allocate (see resource\_log\_allocate\_timing)

respawn\_player

cmd

sv, cheat

Respawns the player from death!

restart

cmd

cheat, vconsole\_set\_focus

Poor man's restart

rpestats

cmd

dump rpe

rr\_findrules

cmd

sv

Search and list rules by substring.

rr\_findrules\_verbose

cmd

sv

Search and list rules by substring.

rr\_followup\_maxdist

1800

sv, cheat

'then ANY' or 'then ALL' response followups will be dispatched only to characters within this distance.

rr\_forceconcept

cmd

sv, cheat

fire a response concept directly at a given character. USAGE

rr\_reloadresponsesystems

cmd

sv, cheat

Reload all response system scripts.

rr\_thenany\_score\_slop

0

sv, a, cheat

When computing respondents for a 'THEN ANY' rule, all rule-matching scores within this much of the best score will be considered.

run\_perftest

cmd

cheat, norecord

Execute perftest.cfg

safezonex

1

cl, a

The percentage of the screen width that is considered safe from overscan. Cannot result in a width less than the height.

safezoney

1

cl, a

The percentage of the screen height that is considered safe from overscan

save

cmd

sv, norecord

Save Game

save\_animgraph\_recording

cmd

sv, cheat

Saves all active animgraph recordings to disk

save\_clear\_subdirectory

cmd

sv, rep

save\_finish\_async

cmd

sv

save\_maxarray\_spew

10

sv, release

Max number of array entries to spew when using SaveRestoreIO spewing.

save\_set\_subdirectory

cmd

sv, rep

save\_showelapsedtime

cmd

sv

display up-to-date elapsed play time

save\_watchclass

cmd

sv

Restrict spew to entities with matching classname

save\_watchentity

cmd

sv

Restrict spew to entity index

say

cmd

sv

Display player message

say\_team

cmd

sv

Display player message to team

sc\_check\_world

false

cheat

sc\_disable\_culling\_boxes

false

cheat

sc\_disable\_procedural\_layer\_rendering

false

cheat

sc\_disable\_shadow\_fastpath

false

cheat

sc\_disable\_shadow\_materials

false

cheat

sc\_disable\_spotlight\_shadows

false

cheat

sc\_disable\_world\_materials

false

cheat

sc\_disableThreading

false

cheat

sc\_dump\_lists

false

cheat

sc\_dumpworld

cmd

cheat

Dump a list of the objects in a sceneworld (Usage

sc\_dumpworld3d

cmd

cheat

Dump the objects in a sceneworld into a 3d geoview buffer (Usage

sc\_extended\_stats

false

cheat

sc\_force\_lod\_level

\-1

cheat

sc\_force\_materials\_batchable

false

cheat

sc\_force\_translation\_in\_projection

false

cheat

If enabled, the camera's translation will be included in the projection matrix.

sc\_list\_extradata\_allocations

cmd

Prints out the overall extra data allocation counts

sc\_listworlds

cmd

cheat

List all the active sceneworlds

sc\_lod\_distance\_scale\_override

\-1

cheat

sc\_log\_submits

false

cheat

Log out display list submits from scenesystem

sc\_only\_render\_opaque

false

cheat

sc\_only\_render\_shadowcasters

false

cheat

sc\_override\_shadow\_fade\_max\_dist

\-1

cheat

sc\_override\_shadow\_fade\_min\_dist

\-1

cheat

sc\_reject\_all\_objects

false

cheat

sc\_setclassflags

cmd

cheat

Low level command to set the flags byte associated with an object class. sc\_SetClassFlags

sc\_showclasses

cmd

cheat

List the object class names known by scenesystem

sc\_skip\_traversal

false

cheat

scene\_flush

cmd

sv

Flush all .vcds from the cache and reload from disk.

scene\_playvcd

cmd

sv, cheat

Play the given VCD as an instanced scripted scene.

screenmessage\_show

\-1

cheat

Enable display of console messages on screen. 1 = Enabled, 0 = Disabled, -1 = Enabled if vgui is not present

screenshot

cmd

Take a screenshot

script\_add\_debug\_filter

cmd

sv, cheat

Add a filter to the game debug overlay

script\_add\_watch

cmd

sv, cheat

Add a watch to the game debug overlay

script\_add\_watch\_pattern

cmd

sv, cheat

Add a watch to the game debug overlay

script\_attach\_debugger

cmd

sv, cheat

Connect the vscript VM to the script debugger

script\_clear\_watches

cmd

sv, cheat

Clear all watches from the game debug overlay

script\_debug

cmd

sv, cheat

Toggle the in-game script debug features

script\_dump\_all

cmd

sv, cheat

Dump the state of the VM to the console

script\_find

cmd

sv, cheat

Find a key in the VM

script\_help

cmd

sv, cheat

Output help for script functions

script\_help2

cmd

sv

Output help for script functions suitable for auto-completion

script\_reload

cmd

sv, cheat

Reload scripts

script\_reload\_code

cmd

sv, cheat

Execute a vscript file, replacing existing functions with the functions in the run script

script\_reload\_entity\_code

cmd

sv, cheat

Execute all of this entity's VScripts, replacing existing functions with the functions in the run scripts

script\_remove\_debug\_filter

cmd

sv, cheat

Remove a filter from the game debug overlay

script\_remove\_watch

cmd

sv, cheat

Remove a watch from the game debug overlay

script\_remove\_watch\_pattern

cmd

sv, cheat

Remove a watch from the game debug overlay

script\_resurrect\_unreachable

cmd

sv, cheat

Use the garbage collector to track down reference cycles

script\_trace\_disable

cmd

sv, cheat

Turn off a particular trace output by file or function name

script\_trace\_disable\_all

cmd

sv, cheat

Turn off all trace output

script\_trace\_disable\_key

cmd

sv, cheat

Turn off a particular trace output by table/instance

script\_trace\_enable

cmd

sv, cheat

Turn on a particular trace output by file or function name

script\_trace\_enable\_all

cmd

sv, cheat

Turn on all trace output

script\_trace\_enable\_key

cmd

sv, cheat

Turn on a particular trace output by table/instance

scrubber

cmd

Scrub system off - not a dev build

sdr

cmd

An old command that has been renamed to 'net\_option'

sensitivity

2.64322

cl, a, per\_user

Mouse sensitivity.

server\_game\_time

cmd

sv

Gives the game time in seconds (server's curtime)

server\_snd\_cast

cmd

sv, cheat

Casts a ray and starts a sound event where the ray hits. The sound event will retrigger periodically. Usage

servercfgfile

server.cfg

sv, release

servervoice\_clear

cmd

cl

servervoice\_clear

servervoice\_dump

cmd

cl

servervoice\_dump

setang

cmd

sv, cheat

Snap player eyes to specified pitch yaw <roll

setang\_exact

cmd

sv, cheat

Snap player eyes and orientation to specified pitch yaw <roll

setinfo

cmd

clientcmd\_can\_execute

Adds a new user info value

setmodel

cmd

sv, cheat

Changes's player's model

setpause

cmd

Set the pause state of the server.

setpos

cmd

sv, cheat

Move player to specified origin (must have sv\_cheats).

setpos\_exact

cmd

sv, cheat

Move player to an exact specified origin (must have sv\_cheats).

setpos\_player

cmd

sv, cheat

Move specified player to specified origin (must have sv\_cheats).

shake

cmd

sv, cheat

Shake the screen.

shake\_stop

cmd

cl, cheat

Stops all active screen shakes.

shake\_testpunch

cmd

cl, cheat

Test a punch-style screen shake.

shatterglass\_break

cmd

sv, cheat

shatterglass\_cleanup

true

sv, cl, rep, cheat

shatterglass\_cleanup\_max

150

sv, cl, rep, cheat

shatterglass\_debug

false

sv, cl, rep, cheat

shatterglass\_distort

true

sv, cl, rep, cheat

shatterglass\_edge\_uv\_scale

0.05

sv, cl, rep, cheat

shatterglass\_hit\_tolerance

2

sv, cl, rep, cheat

shatterglass\_restore

cmd

sv, cheat

shatterglass\_shard\_lifetime

15

sv, cl, rep, cheat

shatterglass\_subdiv\_size

1.5

sv, cl, rep, cheat

shatterglass\_voronoi\_size

15

sv, cl, rep, cheat

show\_loadout\_toggle

cmd

cl, clientcmd\_can\_execute

Toggles loadout display

show\_visibility\_boxes

false

cl, cheat

Enable or Disable debug display of visibility boxes

showconsole

cmd

norecord

Show the console.

showtriggers

cmd

sv, cheat

Enable or Disable showing trigger entities

showtriggers\_toggle

cmd

sv, cheat

Displays the movement bounding box for the triggers in orange. Some entites will also display entity specific overlays. Arguments

silence\_dsp

false

cheat

When on, silences all DSP mixes.

sk\_autoaim\_mode

1

sv, cl, a, rep

skel\_constraints\_enable

true

rep, cheat

skeleton\_instance\_smear\_boneflags

false

sv, cheat

Smear boneflags across the model. Costs computation, but tests to make sure your bone flags are consistent.

skill

1

sv, cl, a, rep, per\_user

Game skill level.

slot0

cmd

cl, server\_can\_execute

slot1

cmd

cl, server\_can\_execute

slot10

cmd

cl, server\_can\_execute

slot11

cmd

cl, server\_can\_execute

slot12

cmd

cl, server\_can\_execute

slot13

cmd

cl, server\_can\_execute

slot2

cmd

cl, server\_can\_execute

slot3

cmd

cl, server\_can\_execute

slot4

cmd

cl, server\_can\_execute

slot5

cmd

cl, server\_can\_execute

slot6

cmd

cl, server\_can\_execute

slot7

cmd

cl, server\_can\_execute

slot8

cmd

cl, server\_can\_execute

slot9

cmd

cl, server\_can\_execute

snapto

cmd

cl

snd\_arrangement\_start

cmd

cheat

Starts the specified arrangement.

snd\_async\_flush

cmd

Flush all unlocked async audio data

snd\_async\_showmem

cmd

Show async memory stats

snd\_async\_showmem\_music

cmd

Show async memory stats for just non-streamed music

snd\_async\_showmem\_summary

cmd

Show brief async memory stats

snd\_autodetect\_latency

true

a

snd\_break\_on\_start\_soundevent

0

sv, cl, rep, cheat

Use to debug break on any soundevent that is started matching this name

snd\_cast

cmd

cheat

Casts a ray and starts a sound event where the ray hits. The sound event will retrigger periodically if cl\_snd\_cast\_retrigger is set. The sound event will clear previous snd\_cast events if cl\_snd\_cast\_clear is set. Usage

snd\_compare\_soundevents

cmd

cheat

Compare the compiled and loaded contents of 2 soundevents.

snd\_deathcamera\_volume

0.2

cl, a, release

Volume of death camera music

snd\_disable\_mixer\_duck

false

cheat

snd\_disable\_mixer\_solo

false

cheat

snd\_dsp\_distance\_max

2000

cheat

snd\_dsp\_distance\_min

20

cheat

snd\_duckerattacktime

0.5

a

snd\_duckerreleasetime

2.5

a

snd\_duckerthreshold

0.15

a

snd\_ducktovolume

0.55

a

snd\_envelope\_rate

0.9

cheat

snd\_filter

0

cheat

snd\_foliage\_db\_loss

4

sv, cheat

foliage dB loss per 1200 units

snd\_front\_headphone\_position

cmd

Specifies the position (in degrees) of the virtual front left/right headphones.

snd\_front\_stereo\_speaker\_position

cmd

Specifies the position (in degrees) of the virtual front left/right speakers.

snd\_front\_surround\_speaker\_position

cmd

Specifies the position (in degrees) of the virtual front left/right speakers.

snd\_gain

1

a

snd\_gain\_max

1

cheat

snd\_gain\_min

0.01

cheat

snd\_gamevoicevolume

1

a

Game v.o. volume

snd\_gamevolume

1

a

Game volume

snd\_get\_physics\_surface\_properties

cmd

cheat

Get physics surface properties for all the materials.

snd\_headphone\_eq

1

cl, a, clientcmd\_can\_execute

Select Headphone EQ Preset

snd\_headphone\_pan\_exponent

cmd

Specifies the exponent for the pan xfade from phone to phone if the 'exp' pan law is being used.

snd\_headphone\_pan\_radial\_weight

cmd

Apply cos(angle) \* weight before pan law

snd\_list

0

cheat

snd\_list\_deferred\_soundevents

cmd

cheat

List all current deferred load soundevents

snd\_list\_soundevents

cmd

cheat

List all available soundevents

snd\_list\_soundevents\_by\_stack

cmd

cheat

List all available soundevents using specified stack name

snd\_mainmenu\_music\_break\_time\_max

0

cl, cheat

Maximum amount of time to pause between playing main menu music

snd\_mainmenu\_music\_break\_time\_min

0

cl, cheat

Minimum amount of time to pause between playing main menu music

snd\_mapobjective\_volume

0.434693

cl, a, release

Volume of map objective music

snd\_menumusic\_volume

0.440528

cl, a, release

Volume of main menu music

snd\_mixahead

0.001

a

snd\_mixer\_master\_dsp

1

cheat

snd\_mixer\_master\_level

1

cheat

snd\_music\_selection

1

cl, a

Tracking rotating music for players with no music packs equipped.

snd\_musicvolume

0

a

Music volume

snd\_mute\_losefocus

true

a

snd\_mute\_mvp\_music\_live\_players

false

cl, a, release

If set, MVP music is muted if players from both teams are still alive.

snd\_mvp\_volume

0.2

cl, a, release

Volume of round MVP music

snd\_new\_visualize

false

sv, cheat

Displays soundevent name played at it's 3d position

snd\_occlusion\_bounces

1

rep, cheat

snd\_occlusion\_debug

false

sv, cl, rep, cheat

snd\_occlusion\_min\_wall\_thickness

4

rep, cheat

snd\_occlusion\_rays

4

rep, cheat

snd\_op\_test\_convar

720

cheat

snd\_opvar\_set\_point\_debug

false

sv, cl, rep, cheat

snd\_othermusic\_volume

0.2

cl, a, release

Volume of unclassified music

snd\_print\_activetracks

cmd

cheat

List all active tracks

snd\_print\_arrangements

cmd

cheat

List all available sequence arrangments

snd\_print\_current\_mixer\_mixgroup

cmd

Get data related to mix group matching string

snd\_print\_samplers

cmd

cheat

List all available samplers

snd\_print\_sequences

cmd

cheat

List all available midi sequences

snd\_rear\_headphone\_position

cmd

Specifies the position (in degrees) of the virtual rear left/right headphones.

snd\_rear\_stereo\_speaker\_position

cmd

Specifies the position (in degrees) of the virtual rear left/right speakers.

snd\_rear\_surround\_speaker\_position

cmd

Specifies the position (in degrees) of the virtual rear left/right speakers.

snd\_refdb

60

cheat

Reference dB at snd\_refdist

snd\_refdist

36

cheat

Reference distance for snd\_refdb

snd\_remove\_all\_soundevents

cmd

cheat

Remove all soundevents

snd\_remove\_soundevent

cmd

cheat

Remove the specified soundevent

snd\_report\_verbose\_error

false

cheat

If set to 1, report more error found when playing sounds.

snd\_roundaction\_volume

0.380879

cl, a, release

Volume of round action music

snd\_roundend\_volume

0.386714

cl, a, release

Volume of round end music

snd\_roundstart\_volume

0.410053

cl, a, release

Volume of round start music

snd\_samplers\_play\_note

cmd

cheat

Play a note from a specified sampler

snd\_samplers\_stop\_note

cmd

cheat

Stop a note from a specified sampler

snd\_sequence\_set\_track\_bpm

cmd

cheat

Sets the tempo of the specified track

snd\_sequence\_set\_track\_transpose

cmd

cheat

Sets the transposition of the specified track

snd\_sequence\_stop\_all\_tracks

cmd

cheat

Stops all currently playing sequences

snd\_sequence\_stop\_track

cmd

cheat

Stops the specified track

snd\_sequencer\_show\_bpm

false

cheat

snd\_sequencer\_show\_events

false

cheat

snd\_sequencer\_show\_quantize\_queue

false

cheat

snd\_set\_physics\_surface\_properties

cmd

cheat

Set physics surface properties for materials. Usage

snd\_setmixer

cmd

cheat

Set named Mixgroup of current mixer to mix vol, mute, solo.

snd\_setmixlayer

cmd

cheat

Set named Mixgroup of named mix layer to mix vol, mute, solo.

snd\_showclassname

0

cheat

snd\_showstart

0

cheat

snd\_side\_surround\_speaker\_position

cmd

Specifies the position (in degrees) of the virtual rear left/right speakers.

snd\_sos\_block\_global\_stack

false

cheat

snd\_sos\_block\_stop\_global\_stack

true

cheat

snd\_sos\_calc\_angle\_debug

false

rep, cheat

snd\_sos\_cl\_soundevent\_pause\_last

cmd

cl

Test

snd\_sos\_cl\_soundevent\_start

cmd

cl

Test

snd\_sos\_cl\_soundevent\_stop\_last

cmd

cl

Test

snd\_sos\_cl\_soundevent\_unpause\_last

cmd

cl

Test

snd\_sos\_flush\_operators

cmd

cheat

Flush and re-parse the sound operator system

snd\_sos\_get\_operator\_field\_info

cmd

cheat

Currently gets info for a single operator field

snd\_sos\_ingame\_debug

false

cheat

snd\_sos\_list\_operator\_updates

false

cheat

snd\_sos\_opvar\_debug

false

cheat

snd\_sos\_pause\_soundevent

cmd

cheat

Pause the specified soundevent in the list

snd\_sos\_pause\_system

false

cheat

snd\_sos\_print\_class\_sizes

cmd

cheat

Prints the sizes of relevant sos classes.

snd\_sos\_print\_field\_name\_strings

cmd

cheat

Prints a list of currently cached field name strings

snd\_sos\_print\_field\_references

false

cheat

snd\_sos\_print\_full\_field\_info

false

cheat

snd\_sos\_print\_groups

cmd

cheat

Prints the current state of the groups system

snd\_sos\_print\_operator\_stack

cmd

cheat

Prints a master list of currently exposed variables

snd\_sos\_print\_operator\_stack\_opeator

cmd

cheat

Prints an operator from a stack

snd\_sos\_print\_operator\_stacks

cmd

cheat

Prints a list of currently available stacks

snd\_sos\_print\_operators

cmd

cheat

Prints a list of currently available operators

snd\_sos\_print\_stack\_exec\_list

cmd

cheat

Prints the current stack execution list

snd\_sos\_print\_strings

cmd

cheat

Prints a list of currently cached strings

snd\_sos\_print\_tool\_properties

cmd

cheat

Prints the current state of tool properties.

snd\_sos\_resolve\_execute\_operator

cmd

cheat

Resolve the inputs and execute one specified operator from a specified stack

snd\_sos\_set\_operator\_field

cmd

cheat

Currently sets a single float operator field

snd\_sos\_set\_operator\_field\_by\_guid

cmd

cheat

Currently sets a single float operator field

snd\_sos\_show\_block\_debug

false

cheat

Spew data about the list of block entries.

snd\_sos\_show\_operator\_event\_and\_stack

true

cheat

snd\_sos\_show\_operator\_event\_filter

0

cheat

snd\_sos\_show\_operator\_field\_filter

0

cheat

snd\_sos\_show\_operator\_init

false

cheat

snd\_sos\_show\_operator\_not\_executing

true

cheat

snd\_sos\_show\_operator\_operator\_filter

0

cheat

snd\_sos\_show\_operator\_pause\_entry

false

cheat

snd\_sos\_show\_operator\_shutdown

false

cheat

snd\_sos\_show\_operator\_stop\_entry

false

cheat

snd\_sos\_show\_operator\_updates

false

cheat

snd\_sos\_show\_opvar\_updates

false

cheat

snd\_sos\_show\_opvar\_updates\_filter

0

cheat

snd\_sos\_show\_queuetotrack

false

cheat

snd\_sos\_show\_soundevent\_param\_overwrite

false

cheat

snd\_sos\_show\_soundevent\_start

false

cheat

snd\_sos\_soundevent\_filter

0

cheat

snd\_sos\_soundevent\_profile

cmd

cheat

Dump a record of current soundevents and profile data

snd\_sos\_start\_soundevent

cmd

cheat

Starts a specified soundevent

snd\_sos\_start\_soundevent\_at\_pos

cmd

cheat

Starts a specified soundevent at the given position

snd\_sos\_stop\_all\_soundevents

cmd

cheat

Stops all soundevents currently on the execution list

snd\_sos\_stop\_soundevent\_guid

cmd

cheat

Stops a specified soundevent

snd\_sos\_stop\_soundevent\_index

cmd

cheat

Stops a specified soundevent

snd\_sos\_sv\_soundevent\_pause\_last

cmd

sv

Test

snd\_sos\_sv\_soundevent\_start

cmd

sv

Test

snd\_sos\_sv\_soundevent\_stop\_last

cmd

sv

Test

snd\_sos\_sv\_soundevent\_unpause\_last

cmd

sv

Test

snd\_sos\_sv\_test\_gender

cmd

sv

Test

snd\_sos\_test\_soundmessage

cmd

cheat

test

snd\_sos\_unpause\_soundevent

cmd

cheat

UnPause the first soundevent in the list

snd\_sound\_areas\_debug

false

cl, rep, cheat

snd\_sound\_areas\_debug\_interval

0.2

cl, rep, cheat

snd\_soundevent\_clear\_deferred

cmd

cheat

Clear the list of deferred soundevents for loading.

snd\_soundmixer\_flush

cmd

Reload soundmixers.txt file.

snd\_soundmixer\_list\_mix\_groups

cmd

List all mix groups to dev console.

snd\_soundmixer\_list\_mix\_layers

cmd

List all mix layers to dev console.

snd\_soundmixer\_list\_mixers

cmd

List all mixers to dev console.

snd\_soundmixer\_set\_trigger\_factor

cmd

cheat

Set named mix layer / mix group, trigger amount.

snd\_soundmixer\_setmixlayer\_amount

cmd

cheat

Set named mix layer mix amount.

snd\_steamaudio\_ambisonics\_order

1

cheat

The amount of directional detail in the simulated by Steam Audio.

snd\_steamaudio\_enable\_pathing

false

cheat

This variable is checked by soundstack to globally enabling pathing for audio processing.

snd\_steamaudio\_export\_scene

cmd

cheat

Exports scene currently used by Steam Audio as a phononscene file.

snd\_steamaudio\_halton\_sequence

cmd

cheat

Generate Halton Sequence for a given order and number of samples.

snd\_steamaudio\_ir\_duration

2

cheat

The time delay between a sound being emitted and the last audible reflection in Steam Audio.

snd\_steamaudio\_load\_pathing\_data

true

cheat

If set, baked pathing data is loaded. Steam Audio Hammer entities can successfully use pathing in this case.

snd\_steamaudio\_load\_reverb\_data

true

cheat

If set, baked reverb data is loaded. Reset it to zero during an format changes of baked data until all data is updated.

snd\_steamaudio\_max\_convolution\_sources

4

cheat

The maximum number of simultaneous sources that can be modeled by Steam Audio.

snd\_steamaudio\_max\_occlusion\_samples

64

cheat

The maximum number of rays that can be traced for volumetric occlusion by Steam Audio.

snd\_steamaudio\_num\_bounces

128

cheat

The maximum number of times any ray can bounce when using Steam Audio.

snd\_steamaudio\_num\_diffuse\_samples

2048

cheat

The number of directions considered for ray bounce by Steam Audio.

snd\_steamaudio\_num\_rays

65536

cheat

The number of rays to trace for reflection modeling by Steam Audio.

snd\_steamaudio\_num\_threads

2

cheat

Sets the number of threads used for realtime reflection by Steam Audio.

snd\_steamaudio\_pathing\_enablevalidationvis

false

cheat

Enable visualization for pathing validation.

snd\_steamaudio\_pathing\_enablevis

false

cheat

Enable visualization for pathing.

snd\_steamaudio\_probes\_nearby

cmd

Load all the probes from a file and log the nearby probes within the radius.

snd\_stereo\_speaker\_pan\_exponent

cmd

Specifies the exponent for the pan xfade from speaker to speaker if the 'exp' pan law is being used.

snd\_stereo\_speaker\_pan\_radial\_weight

cmd

Apply cos(angle) \* weight before pan law

snd\_surround\_speaker\_pan\_exponent

cmd

Specifies the exponent for the pan xfade from speaker to speaker if the 'exp' pan law is being used.

snd\_surround\_speaker\_pan\_radial\_weight

cmd

Apply cos(angle) \* weight before pan law

snd\_tensecondwarning\_volume

0.2

cl, a, release

Volume of ten-second warning music

snd\_toolvolume

1

a

Volume of sounds in tools (e.g. Hammer, SFM)

snd\_vmidi\_flush

cmd

cheat

Purge and reload all vmidi data and files.

snd\_vmix\_override\_mix\_decay\_time

\-1

cheat

If set > 0, overrides how long the decay time is on all mix graphs (in seconds).

snd\_vmix\_show\_input\_updates

false

cheat

If set to 1, show all incoming updates to vmix inputs.

snd\_voipvolume

1

a

Voice volume

sndplaydelay

cmd

sound\_device\_override

0

a, release

ID of the sound device to use

soundinfo

cmd

Describe the current sound device with an active voice list.

soundlist

cmd

List all known sounds.

soundscape\_debug

false

sv, cheat

When on, draws lines to all env\_soundscape entities. Green lines show the active soundscape, red lines show soundscapes that aren't in range, and white lines show soundscapes that are in range, but not the active soundscape.

soundscape\_dumpclient

cmd

cl, cheat

Dumps the client's soundscape data.

soundscape\_fadetime

3

cl, cheat

Time to crossfade sound effects between soundscapes

soundscape\_flush

cmd

sv

Flushes the server & client side soundscapes

soundscape\_radius\_debug

false

cl, cheat

Prints current volume of radius sounds

soundsysteminfo

cmd

Describe the current sound device without an active voice list.

spawn\_group\_activate

cmd

sv, cheat

Activate specified spawngroup.

spawn\_group\_list

cmd

sv, cheat

List all spawn groups

spawn\_group\_load

cmd

sv, cheat

Load named spawn group.

spawn\_group\_unload

cmd

sv, cheat

Unload named spawn group.

speaker\_config

\-1

a

spec\_centerchasecam

false

cl, a

Looks at the target player's center, instead of his eye position, in chase came mode

spec\_dz\_group\_teams

true

cl, release

If set, will group players into their teams for spectating, if 0, spectating numbers will be the default individual players

spec\_freeze\_deathanim\_time

0.8

sv, cl, rep, release

The time that the death cam will spend watching the player's ragdoll before going into the freeze death cam.

spec\_freeze\_time

2

sv, cl, rep, release

Time spend frozen in observer freeze cam.

spec\_freeze\_time\_lock

1

sv, cl, rep, release

Time players are prevented from skipping the freeze cam

spec\_freeze\_traveltime

0.3

sv, cl, rep, release

Time taken to zoom in to frame a target in observer freeze cam.

spec\_glow\_decay\_time

2

cl, release

Time to decay glow from 1.0 to spec\_glow\_silent\_factor after spec\_glow\_full\_time.

spec\_glow\_full\_time

1

cl, release

Noisy players stay at full brightness for this long.

spec\_glow\_silent\_factor

0.6

cl, release

Lurking player xray glow scaling.

spec\_glow\_spike\_factor

1.2

cl, release

Noisy player xray glow scaling (pop when noise is made). Make >1 to add a 'spike' to noise-making players

spec\_glow\_spike\_time

0

cl, release

Time for noisy player glow 'spike' to show that they made noise very recently.

spec\_hide\_players

false

cl, release, clientcmd\_can\_execute

Toggle the visibility of scoreboard players.

spec\_pos

cmd

cl

dump position and angles to the console

spec\_replay\_autostart

true

cl, a

Auto-start Killer Replay when available

spec\_replay\_bot

false

sv, release

Enable Spectator Hltv Replay when killed by bot

spec\_replay\_enable

0

rep, release

Enable Killer Replay, requires hltv server running (0

spec\_replay\_leadup\_time

5.3438

rep, release

Replay time in seconds before the highlighted event

spec\_replay\_message\_time

9.5

rep, release

How long to show the message about Killer Replay after death. The best setting is a bit shorter than spec\_replay\_autostart\_delay + spec\_replay\_leadup\_time + spec\_replay\_winddown\_time

spec\_replay\_on\_death

false

rep, release

When > 0, sets the mode whereas players see delayed replay, and are segregated into a domain of chat and voice separate from the alive players

spec\_replay\_rate\_base

1

rep, release

Base time scale of Killer Replay.Experimental.

spec\_replay\_rate\_limit

3

rep, release

Minimum allowable pause between replay requests in seconds

spec\_replay\_round\_delay

0

sv, release

Round can be delayed by this much due to someone watching a replay; must be at least 3-4 seconds, otherwise the last replay will always be interrupted by round start, assuming normal pause between round\_end and round\_start events (7 seconds) and freezecam delay (2 seconds) and 7.4 second full replay (5.4 second pre-death and ~2 seconds post-death) and replay in/out switching (up to a second)

spec\_replay\_winddown\_time

2

sv, release

The trailing time, in seconds, of replay past the event, including fade-out

spec\_show\_xray

1

cl, a, release

If set to 1, you can see player outlines and name IDs through walls - who you can see depends on your team and mode

spec\_usenumberkeys\_nobinds

true

cl, a

If set to 1, map voting and spectator view use the raw number keys instead of the weapon binds (slot1, slot2, etc).

spec\_xray\_dropped\_defusekits

false

cl, release

Whether to X-ray dropped defuse kits.

spec\_xray\_dropped\_unoccluded

false

cl, release

Whether to always X-ray dropped c4 and defuse kits.

spew\_fonts

cmd

Spew information about font manager fonts

splitscreen\_mode

0

a

+spray\_menu

cmd

cl

ss\_add

cmd

Adds a splitscreen user.

ss\_remove

cmd

Removes a splitscreen user.

startdemos

cmd

Play demos in demo sequence.

startmovie

cmd

norecord

Start recording movie frames.

stats

cmd

Prints server performance variables

stats\_print

cmd

Prints out perf statistics to the console, clears perf history

stats\_print\_gpu

cmd

Prints out GPU perf statistics to the console. Requires stats\_display > 0, and stats\_collect\_gpu = true. Optional argument of CSV filename

status

cmd

Print connection status

status\_json

cmd

Print status in JSON format

steam\_controller\_haptics

true

cl, release

stop

cmd

Finish recording demo.

stopdemos

cmd

Stop looping demos (current demo will complete).

stopsound

cmd

cheat

stopsoundscape

cmd

cl, cheat

Stops all soundscape processing and fades current looping sounds

subclass\_change

cmd

sv, cheat, vconsole\_fuzzy

Changes the subclass of the given entity. Arguments

subclass\_create

cmd

sv, cheat, vconsole\_fuzzy

Creates an entity of the given subclass where the player is looking.

surfaceprop

cmd

sv, cheat

Reports the surface properties at the cursor

survival\_check\_num\_possible\_final\_zone

cmd

sv

print out a number of all possible final zone

sv\_accelerate

5.5

sv, cl, nf, rep, release

sv\_accelerate\_debug\_speed

false

sv, cl, nf, rep, release

sv\_accelerate\_use\_weapon\_speed

true

sv, cl, nf, rep, release

sv\_air\_max\_horizontal\_parachute\_speed

240

sv, cl, rep, release

sv\_air\_max\_wishspeed

30

sv, cl, rep, release

sv\_air\_pushaway\_dist

0

sv, cl, rep, release

sv\_airaccelerate

12

sv, cl, nf, rep, release

sv\_airaccelerate\_parachute

2.6

sv, cl, rep, release

sv\_airaccelerate\_rappel

2.2

sv, cl, rep, release

sv\_allchat

true

sv, nf, release

Players can receive all other players' text chat, no death restrictions

sv\_allow\_thirdperson

false

sv, cl, rep, release

Allows the server set players in third person mode without the client slamming it back (if cheats are on, all clients can set thirdperson without this convar being set)

sv\_allow\_votes

true

sv, release

Allow voting?

sv\_alltalk

false

sv, nf, release

Players can hear all other players' voice communication, no team restrictions

sv\_alternateticks

false

sp, release

If set, server only simulates entities on even numbered ticks.

sv\_arms\_race\_vote\_to\_restart\_disallowed\_after

0

sv, rep, release

Arms Race gun level after which vote to restart is disallowed

sv\_auto\_adjust\_bot\_difficulty

true

sv, release

Adjust the difficulty of bots each round based on contribution score.

sv\_auto\_full\_alltalk\_during\_warmup\_half\_end

false

sv, release

When enabled will automatically turn on full all talk mode in warmup, at halftime and at the end of the match

sv\_autobunnyhopping

true

sv, cl, rep, release

Players automatically re-jump while holding jump button

sv\_autobuyammo

false

sv, nf, rep, release

Enable automatic ammo purchase when inside buy zones during buy periods

sv\_autoexec\_mapname\_cfg

false

sv, release

Execute a mapname cfg file on the server automatically in custom game modes that require it.

sv\_banid\_enabled

true

release

Whether server supports banid command

sv\_bot\_buy\_decoy\_weight

1

sv, release

Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv\_bot\_buy\_\*\_weight convars.

sv\_bot\_buy\_flash\_weight

1

sv, release

Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv\_bot\_buy\_\*\_weight convars.

sv\_bot\_buy\_grenade\_chance

33

sv, release

Chance bots will buy a grenade with leftover money (after prim, sec and armor). Input as percent (0-100.0)

sv\_bot\_buy\_hegrenade\_weight

6

sv, release

Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv\_bot\_buy\_\*\_weight convars.

sv\_bot\_buy\_molotov\_weight

1

sv, release

Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv\_bot\_buy\_\*\_weight convars.

sv\_bot\_buy\_smoke\_weight

1

sv, release

Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv\_bot\_buy\_\*\_weight convars.

sv\_bots\_get\_easier\_each\_win

0

sv, release

If > 0, some # of bots will lower thier difficulty each time they win. The argument defines how many will lower their difficulty each time.

sv\_bots\_get\_harder\_after\_each\_wave

0

sv, release

If > 0, some # of bots will raise thier difficulty each time CTs beat a Guardian wave. The argument defines how many will raise their difficulty each time

sv\_bounce

0

sv, cl, nf, rep, release

Bounce multiplier for when physically simulated objects collide with other objects.

sv\_breachcharge\_arm\_delay

0.3

sv, release

sv\_breachcharge\_delay\_max

0.8

sv, release

sv\_breachcharge\_delay\_min

0

sv, release

sv\_breachcharge\_distance\_max

1200

sv, release

sv\_breachcharge\_distance\_min

600

sv, release

sv\_breachcharge\_fuse\_max

1

sv, release

sv\_breachcharge\_fuse\_min

0.7

sv, release

sv\_bumpmine\_arm\_delay

0.3

sv, release

sv\_bumpmine\_detonate\_delay

0.25

sv, release

sv\_buy\_status\_override

\-1

sv, rep, release

Override for buy status map info. 0 = everyone can buy, 1 = ct only, 2 = t only 3 = nobody

sv\_chat\_proximity

\-1

sv, cl, rep, release

sv\_cheats

true

nf, rep, release

Allow cheats on server

sv\_clientrates

cmd

Show client rates.

sv\_clockcorrection\_msecs

30

sv, release

The server tries to keep each player's m\_nTickBase withing this many msecs of the server absolute tickcount

sv\_cluster

0

release

Data center cluster this server lives in.

sv\_competitive\_minspec

true

sv, cl, nf, rep, release

Enable to force certain client convars to minimum/maximum values to help prevent competitive advantages.

sv\_cs\_dump\_econ\_item\_stringtable

cmd

sv

sv\_cs\_dump\_econ\_item\_stringtable

sv\_cs\_player\_speed\_has\_hostage

200

sv, cl, rep, release

sv\_damage\_print\_enable

1

sv, cl, rep, release

0

sv\_deadtalk

true

sv, cl, nf, rep, release

Dead players can speak (voice, text) to the living

sv\_debug\_overlays\_bandwidth

65536

release

Broadcast server debug overlays traffic

sv\_debug\_overlays\_broadcast

false

nf, cheat, release

Broadcast server debug overlays

sv\_dev\_simulate\_gcdown

cmd

sv

Turn on/off simulated GC communications failure (GC is down in a way that we know it is down)

sv\_disable\_immunity\_alpha

false

sv, cl, rep, release

If set, clients won't slam the player model render settings each frame for immunity \[mod authors use this\]

sv\_disable\_observer\_interpolation

false

sv, cl, rep, release

Disallow interpolating between observer targets on this server.

sv\_disable\_radar

0

sv, cl, rep, release

0

sv\_disconnected\_player\_data\_hold\_time

60

sv, cl, rep, release

Duration, in seconds, to hold onto the data of disconnected players, for scoreboard display.

sv\_dz\_cash\_bundle\_size

50

sv, rep, release

Size of a cash bundle

sv\_dz\_cash\_mega\_bundle\_size

13

sv, rep, release

Size of a mega cash bundle

sv\_dz\_contractkill\_reward

10

sv, rep, release

Cash bundles to award for a successful contract kill

sv\_dz\_enable\_respawn

true

sv, cl, rep, release

sv\_dz\_enable\_respawn\_solos

false

sv, cl, rep, release

sv\_dz\_exploration\_payment\_amount

2

sv, rep, release

Number of cash bundles to award for exploring a new sector

sv\_dz\_exploration\_payment\_amount\_bonus

2

sv, rep, release

Number of BONUS cash bundles to award for exploring (if the player has the item/upgrade)

sv\_dz\_force\_zone

false

sv, cl, rep, cheat

sv\_dz\_hostage\_rescue\_reward

18

sv, cl, rep, release

Number of cash bundles to award for rescuing a hostage

sv\_dz\_jointeam\_allowed

false

sv, release

Whether non-server admins are allowed to use the dz\_jointeam command

sv\_dz\_parachute\_reuse

true

sv, rep, release

sv\_dz\_paradrop

cmd

sv

sv\_dz\_player\_max\_health

120

sv, release

sv\_dz\_player\_spawn\_armor

0

sv, release

sv\_dz\_player\_spawn\_health

120

sv, release

sv\_dz\_reset\_danger\_zone

cmd

sv

sv\_dz\_show\_enemy\_name\_scope\_range

800

sv, release

sv\_dz\_squad\_wipe\_reward

2

sv, cl, rep, release

Number of cash bundles to award for eliminating a squad

sv\_dz\_team\_count

1

sv, cl, rep, release

Max players allowed per team

sv\_dz\_warmup\_tablet

true

sv, release

sv\_dz\_zone\_bombdrop\_money\_reward

15

sv, cl, rep, release

How many money stacks players are rewarded each danger zone wave

sv\_dz\_zone\_bombdrop\_money\_reward\_bonus

5

sv, cl, rep, release

How many bonus money stacks players are rewarded each danger zone wave when they have the bonus item

sv\_dz\_zone\_damage

true

sv, cheat, release

sv\_dz\_zone\_hex\_radius

2200

sv, cl, rep, release

sv\_enable\_alternate\_baselines

1

release

Allow alternate baseline system, set to 2 for debugging spew.

sv\_enable\_delta\_packing

true

release

When enabled, this allows for entity packing to use the property changes for building up the data. This is many times faster, but can be disabled for error checking.

sv\_enablebunnyhopping

true

sv, cl, rep, release

Allow player speed to exceed maximum running speed

sv\_ent\_showonlyhitbox

\-1

sv, cheat

sv\_ents\_write\_alarm

0

release

Print callstack every time CNetworkGameServerBase

sv\_exojump\_jumpbonus\_forward

0.4

sv, cl, rep, release

ExoJump forwards velocity bonus when duck jumping

sv\_exojump\_jumpbonus\_up

0.58

sv, cl, rep, release

ExoJump upwards bonus when holding the jump button

sv\_exostaminajumpcost

0.04

sv, cl, rep, release

Stamina penalty for jumping with exo legs

sv\_exostaminalandcost

0.015

sv, cl, rep, release

Stamina penalty for landing with exo legs

sv\_extract\_ammo\_from\_dropped\_weapons

false

sv, cl, rep, release

sv\_fade\_player\_visibility\_farz

false

sv, cl, rep, release

sv\_falldamage\_exojump\_multiplier

0.4

sv, cl, rep, release

ExoJump fall damage multiplier

sv\_falldamage\_scale

1

sv, cl, rep, release

sv\_falldamage\_to\_below\_player\_multiplier

1

sv, cl, rep, release

Scale damage when distributed across two players

sv\_falldamage\_to\_below\_player\_ratio

0

sv, cl, rep, release

Landing on a another player's head gives them this ratio of the damage.

sv\_force\_reflections

false

sv, cl, rep, release

sv\_friction

5.2

sv, cl, nf, rep, release

World friction.

sv\_full\_alltalk

false

sv, cl, rep, release

Any player (including Spectator team) can speak to any other player

sv\_fullupdate

cmd

Force a full update for all clients.

sv\_game\_mode\_convars

cmd

sv

Display the values of the convars for the current game\_mode.

sv\_game\_mode\_flags

0

sv, release

Dedicated server game mode flags to run

sv\_gameinstructor\_disable

false

sv, cl, rep, release

Force all clients to disable their game instructors.

sv\_ggprogressive\_autosniper\_first

true

sv, release

Should auto snipers go first or regular snipers?

sv\_ggprogressive\_shotgun\_last

true

sv, release

Should auto snipers go first or regular snipers?

sv\_ghostcap

true

sv, release

Shows on player join if a player has the copy tables cheat enabled.

sv\_grassburn

false

sv, cl, rep, release

sv\_gravity

800

sv, cl, nf, rep, release

World gravity.

sv\_grenade\_trajectory\_prac\_pipreview

false

sv, cl, rep, release

Shows grenade trajectory practice picture-in-picture preview.

sv\_grenade\_trajectory\_prac\_trailtime

0

sv, cl, rep, release

Shows grenade trajectory practice visualization for this number of seconds.

sv\_grenade\_trajectory\_time\_spectator

4

sv, cl, rep, release

Length of time grenade trajectory remains visible as a spectator.

sv\_guardian\_extra\_equipment\_ct

0

sv, release

Extra starting equipment for CT players in guardian modes

sv\_guardian\_extra\_equipment\_t

0

sv, release

Extra starting equipment for Terrorist players in guardian modes

sv\_guardian\_health\_refresh\_per\_wave

50

sv, release

Health given to survivors per wave in guardian mode.

sv\_guardian\_heavy\_all

false

sv, release

sv\_guardian\_heavy\_count

0

sv, release

sv\_guardian\_max\_wave\_for\_heavy

0

sv, release

sv\_guardian\_min\_wave\_for\_heavy

0

sv, release

sv\_guardian\_refresh\_ammo\_for\_items\_on\_waves

0

sv, release

List of additional weapons to refill ammo on waves.

sv\_guardian\_reset\_c4\_every\_wave

false

sv, release

sv\_guardian\_respawn\_health

50

sv, release

Starting health of guardian players when respawned.

sv\_guardian\_spawn\_health\_ct

100

sv, release

Starting health in guardian modes.

sv\_guardian\_spawn\_health\_t

100

sv, release

Starting health in guardian modes.

sv\_guardian\_starting\_equipment\_humans

0

sv, release

Extra starting equipment for human players in guardian modes

sv\_health\_approach\_enabled

true

sv, rep, release

sv\_health\_approach\_speed

10

sv, rep, release

sv\_hegrenade\_damage\_multiplier

1

sv, rep, release

sv\_hegrenade\_radius\_multiplier

1

sv, rep, release

sv\_hibernate\_postgame\_delay

5

release

\# of seconds to wait after final client leaves before hibernating.

sv\_hibernate\_when\_empty

true

release

Puts the server into extremely low CPU usage mode when no clients connected

sv\_hide\_roundtime\_until\_seconds

0

sv, cl, rep, release

sv\_highlight\_distance

500

sv, cl, rep, release

sv\_highlight\_duration

3.5

sv, cl, rep, release

sv\_holiday\_mode

0

sv, cl, rep, release

0 = OFF, 1 = Halloween, 2 = Winter

sv\_ignoregrenaderadio

false

sv, release

Turn off Fire in the hole messages

sv\_infinite\_ammo

0

sv, cl, rep, cheat, release

Player's active weapon will never run out of ammo

sv\_invites\_only\_mainmenu

false

sv, cl, rep, release

If turned on, will ignore all invites when user is playing a match

sv\_jump\_impulse

301.993

sv, cl, rep, release

Initial upward velocity for player jumps; sqrt(2_gravity_height).

sv\_jump\_impulse\_exojump\_multiplier

1.05

sv, cl, rep, release

ExoJump impulse multiplier

sv\_kick\_ban\_duration

15

sv, cl, nf, rep, release

How long should a kick ban from the server should last (in minutes)

sv\_kick\_players\_with\_cooldown

1

sv, rep, release

(0

sv\_knife\_attack\_extend\_from\_player\_aabb

0

sv, cl, rep, release

sv\_ladder\_scale\_speed

0.78

sv, cl, rep, release

Scale top speed on ladders

sv\_ladder\_slack\_z\_mult

0.026

sv, cl, rep, cheat

Difference in Z increases toward the middle of the slack ladder.

sv\_lagcompensationforcerestore

true

sv, cheat

Don't test validity of a lag comp restore, just do it.

sv\_lan

false

release

Server is a lan server ( no heartbeat, no authentication, no non-class C addresses )

sv\_lightquery\_debug

false

sv, cheat

sv\_load\_forced\_client\_names\_file

cmd

sv, release

Loads a file containing SteamID64 names for clients

sv\_load\_random\_client\_names\_file

cmd

sv, release

Loads a file containing random name words for clients

sv\_log\_onefile

false

a

Log server information to only one file.

sv\_logbans

false

a

Log server bans in the server logs.

sv\_logblocks

false

release

If true when log when a query is blocked (can cause very large log files)

sv\_logecho

true

a

Echo log information to the console.

sv\_logfile

false

a

Log server information in the log file.

sv\_logflush

false

a

Flush the log file to disk on each write (slow).

sv\_logsdir

logs

a

Folder in the game directory where server logs will be stored.

sv\_mapvetopickvote\_maps

de\_anubis,de\_inferno,de\_mirage,de\_vertigo,de\_overpass,de\_nuke,de\_ancient

sv, release

Which maps are used for map veto pick sequence

sv\_mapvetopickvote\_phase\_duration

\[1

12\]\[2

25\]\[5

sv\_matchend\_drops\_enabled

true

sv, release

Rewards gameplay time is always accumulated for players, but drops at the end of the match can be prevented

sv\_matchpause\_auto\_5v5

false

sv, cl, rep, release

When enabled will automatically pause the match at next freeze time if less than 5 players are connected on each team.

sv\_max\_allowed\_net\_graph

1

sv, cl, nf, rep, release

Determines max allowed net\_graph value for clients.

sv\_max\_queries\_sec

3

release

Maximum queries per second to respond to from a single IP address.

sv\_max\_queries\_sec\_global

60

release

Maximum queries per second to respond to from anywhere.

sv\_max\_queries\_window

30

release

Window over which to average queries per second averages.

sv\_maxrate

0

rep, release

Max bandwidth rate allowed on server, 0 == unlimited

sv\_maxspeed

320

sv, cl, nf, rep, release

sv\_maxunlag

1

sv, release

Maximum lag compensation in seconds

sv\_maxupdaterate

60

sv, cl, rep, release

Maximum updates per second that the server will allow

sv\_maxvelocity

3500

sv, cl, rep, release

Maximum speed any ballistically moving object is allowed to attain per axis.

sv\_memlimit

0

cheat, release

If set, whenever a game ends, if the total memory used by the server is greater than this # of megabytes, the server will exit.

sv\_metaduplication

cmd

cheat

Check serializer meta for duplication, add verbose to command for full spew

sv\_min\_jump\_landing\_sound

260

sv, cl, rep, release

sv\_minrate

98304

rep, release

Min bandwidth rate allowed on server, 0 == unlimited

sv\_minupdaterate

10

sv, cl, rep, release

Minimum updates per second that the server will allow

sv\_networkvar\_perfieldtracking

true

release

Track individual field offset changes, rather than a single dirty flag for the whole entity.

sv\_networkvar\_validate

false

release

Validate each StateChanged against known offsets.

sv\_noclipaccelerate

5

sv, cl, a, nf, rep

sv\_noclipduringpause

false

sv, cl, rep, cheat

If cheats are enabled, then you can noclip with the game paused (for doing screenshots, etc.).

sv\_noclipfriction

4

sv, cl, a, nf, rep

Friction during noclip move.

sv\_noclipspeed

1200

sv, cl, a, nf, rep

sv\_outofammo\_indicator

false

sv, cl, rep, release

sv\_packstats

cmd

release

Show entity packing stats, pass 'clear' as argument to reset counts.

sv\_parallel\_packentities

2

release

Set to 1 to use threaded snapshot sending on listen servers, 2 for dedicated servers.

sv\_parallel\_sendsnapshot

2

release

Set to 1 to use threading snapshot sending on listen servers, 2 for dedicated servers.

sv\_party\_mode

false

sv, cl, rep, release

Party!!

sv\_password

0

prot, nf, norecord, release

Server password for entry into multiplayer games

sv\_pausable

0

release

Is the server pausable.

sv\_pause\_on\_console\_open

false

a

1 = Pause the game when pressing ~ to open the console. CTRL+~ opens the console without pause.

sv\_phys\_debug\_callback\_entities

false

sv, cheat

Print all entities that get touch callbacks. Each entity is printed only once.

sv\_phys\_enabled

true

sv, cheat

Enable all physics simulation

sv\_phys\_sleep\_enable

true

sv, cheat

Enable sleeping for dynamic physics bodies.

sv\_phys\_stop\_at\_collision

0

sv, cheat

sv\_player\_parachute\_velocity

\-200

sv, rep, release

sv\_prime\_accounts\_only

false

sv, release

When this setting is enabled only prime users can connect to this game server.

sv\_pure

cmd

Show user data.

sv\_pure\_kick\_clients

true

release

If set to 1, the server will kick clients with mismatching files. Otherwise, it will issue a warning to the client.

sv\_pure\_trace

0

release

If set to 1, the server will print a message whenever a client is verifying a CRC for a file.

sv\_pushaway\_hostage\_force

20000

sv, rep, cheat

How hard the hostage is pushed away from physics objects (falls off with inverse square of distance).

sv\_pushaway\_max\_hostage\_force

1000

sv, rep, cheat

Maximum of how hard the hostage is pushed away from physics objects.

sv\_pvs\_max\_distance

0

rep, release

if set, adds a maximum range to PVS/PAS checks

sv\_querycache\_stats

cmd

sv

Display status of the query cache (client only)

sv\_radio\_throttle\_window

10

sv, release

The number of seconds before radio command tokens refresh.

sv\_ragdoll\_lru\_debug

false

sv, rep, cheat

sv\_record\_item\_time\_data

false

sv, release

Turn on recording of per player item time data into the server log.

sv\_regeneration\_force\_on

false

sv, cheat

Cheat to test regenerative health systems

sv\_region

\-1

release

The region of the world to report this server in.

sv\_rethrow\_last\_grenade

cmd

sv, cheat

Emit the last grenade thrown on the server.

sv\_search\_key

0

release

sv\_search\_team\_key

public

release

When initiating team search, set this key to match with known opponents team

sv\_server\_graphic1

0

sv, cl, rep, release

A 360x60 (<16kb) image file in /csgo/ that will be displayed to spectators.

sv\_server\_graphic2

0

sv, cl, rep, release

A 220x45 (<16kb) image file in /csgo/ that will be displayed to spectators.

sv\_server\_verify\_blood\_on\_player

true

sv, cl, rep, cheat

sv\_shield\_bash\_damage\_to\_nonplayer

30

sv, cl, rep, release

sv\_shield\_bash\_damage\_to\_players

90

sv, cl, rep, release

sv\_shield\_explosive\_damage\_cap

99

sv, cl, rep, release

sv\_shield\_explosive\_damage\_crouch\_bonus

10

sv, cl, rep, release

sv\_shield\_explosive\_damage\_mindist

30

sv, cl, rep, release

sv\_shield\_explosive\_damage\_mult

4

sv, cl, rep, release

sv\_shield\_explosive\_damage\_scale

0.5

sv, cl, rep, release

sv\_shield\_hitpoints

850

sv, cl, rep, release

sv\_show\_ragdoll\_playernames

false

cl, rep, release

sv\_show\_team\_equipment\_force\_on

false

sv, cl, rep, release

Force on if not prohibited

sv\_show\_team\_equipment\_prohibit

false

sv, cl, nf, rep, release

Determines whether +cl\_show\_team\_equipment is prohibited.

sv\_show\_voip\_indicator\_for\_enemies

false

sv, rep, release

Makes it so the voip icon is shown over enemies as well as allies when they are talking

sv\_showbullethits

0

sv, cl, rep, release

1=show hits and near misses, 2=show hits only

sv\_showhitregistration

0

sv, cl, rep, cheat

Display lag\_compensated hitboxes. 0 = off, 1 = server only, 2 = client only, 3 = both server and client

sv\_showimpacts

0

sv, cl, rep, release

Shows client (red) and server (blue) bullet impact point (1=both, 2=client-only, 3=server-only)

sv\_showimpacts\_penetration

0

sv, cl, rep, release

Shows extra data when bullets penetrate. (use sv\_showimpacts\_time to increase time shown)

sv\_showimpacts\_time

4

sv, cl, rep, release

Duration bullet impact indicators remain before disappearing

sv\_showtags

cmd

Describe current gametags.

sv\_shutdown

cmd

Sets the server to shutdown when all games have completed

sv\_skel\_constraints\_enable

false

rep, cheat

sv\_skirmish\_id

0

sv, cl, rep, release

Dedicated server skirmish id to run

sv\_skyname

sky\_urb01

sv, cl, a, rep

Current name of the skybox texture

sv\_snapshot\_unlimited

false

rep, release

For debugging, don't throw away old snapshots so that if you break in debugger (on remote client or server) it won't require an uncompressed update to resume. You may run out of memory of course...

sv\_soundscape\_printdebuginfo

cmd

sv, cheat

print soundscapes

sv\_spawn\_afk\_bomb\_drop\_time

15

sv, rep, release

Players that have never moved since they spawned will drop the bomb after this amount of time.

sv\_spawn\_rappel\_min\_duration

8

sv, rep, release

sv\_spawn\_rappel\_min\_duration\_with\_chute

2.5

sv, rep, release

sv\_spec\_hear

1

sv, cl, nf, rep, release

Determines who spectators can hear

sv\_spec\_use\_tournament\_content\_standards

false

sv, cl, rep, release

sv\_specaccelerate

5

sv, cl, a, nf, rep

sv\_specnoclip

true

sv, cl, a, nf, rep

sv\_specspeed

1200

sv, cl, a, nf, rep

sv\_spewmeta

cmd

cheat

Spew serializer meta

sv\_staminajumpcost

0.08

sv, cl, rep, release

Stamina penalty for jumping

sv\_staminalandcost

0.05

sv, cl, rep, release

Stamina penalty for landing

sv\_staminamax

80

sv, cl, rep, release

Maximum stamina penalty

sv\_staminarecoveryrate

60

sv, cl, rep, release

Rate at which stamina recovers (units/sec)

sv\_steamgroup

0

nf, release

The ID of the steam group that this server belongs to. You can find your group's ID on the admin profile page in the steam community.

sv\_steamgroup\_exclusive

false

release

If set, only members of Steam group will be able to join the server when it's empty, public people will be able to join the server only if it has players.

sv\_stopspeed

80

sv, cl, nf, rep, release

Minimum stopping speed when on ground.

sv\_stressbots

false

release

If set to 1, the server calculates data and fills packets to bots. Used for perf testing.

sv\_tablet\_show\_path\_to\_nearest\_resq

false

sv, cl, rep, release

sv\_tags

0

nf, release

Server tags. Used to provide extra information to clients when they're browsing for servers. Separate tags with a comma.

sv\_talk\_after\_dying\_time

0

sv, cl, rep, release

The number of seconds a player can continue talking after dying as if they were still alive

sv\_talk\_enemy\_dead

false

sv, cl, rep, release

Dead players can hear all dead enemy communication (voice, chat)

sv\_talk\_enemy\_living

false

sv, cl, rep, release

Living players can hear all living enemy communication (voice, chat)

sv\_teamid\_overhead

true

sv, cl, nf, rep, release

Shows teamID over player's heads. 0 = off, 1 = on

sv\_teamid\_overhead\_always\_prohibit

false

sv, cl, nf, rep, release

Determines whether cl\_teamid\_overhead\_always is prohibited.

sv\_teamid\_overhead\_maxdist

0

sv, cl, rep, release

If >0, server will override cl\_teamid\_overhead\_maxdist

sv\_teamid\_overhead\_maxdist\_spec

0

sv, cl, rep, release

If >0, server will override cl\_teamid\_overhead\_maxdist\_spec

sv\_timebetweenducks

0.4

sv, cl, rep, release

Minimum time before recognizing consecutive duck key

sv\_tripwirefire\_trace\_length

180

sv, release

sv\_turning\_inaccuracy\_angle\_min

4

sv, cl, rep, cheat, release

sv\_turning\_inaccuracy\_decay

0.8

sv, cl, rep, cheat, release

sv\_turning\_inaccuracy\_enabled

false

sv, cl, rep, cheat, release

sv\_unlockedchapters

1

a

Highest unlocked game chapter.

sv\_update\_animgraph\_movement\_in\_finish

true

sv, cl, rep, cheat

Whether we should update animgraph movement in FinishMove.

sv\_usercmd\_queue\_spew\_threshold

10

sv, release

Spew warning if command queue has grown above this many backlogged commands.

sv\_versus\_screen\_scene\_id

0

sv, release

Determines which scene is used for the versus screen.

sv\_visiblemaxplayers

\-1

release

Overrides the max players reported to prospective clients

sv\_voice\_proximity

\-1

sv, cl, rep, release

sv\_voicecodec

vaudio\_speex

release

Specifies which voice codec DLL to use in a game. Set to the name of the DLL without the extension.

sv\_voiceenable

true

a, nf, release

sv\_vote\_allow\_in\_warmup

false

sv, release

Allow voting during warmup?

sv\_vote\_allow\_spectators

false

sv, release

Allow spectators to initiate votes?

sv\_vote\_command\_delay

2

sv, release

How long after a vote passes until the action happens

sv\_vote\_count\_spectator\_votes

false

sv, release

Allow spectators to vote on issues?

sv\_vote\_creation\_timer

120

sv, release

How often someone can individually call a vote.

sv\_vote\_disallow\_kick\_on\_match\_point

false

sv, release

Disallow vote kicking on the match point round.

sv\_vote\_failure\_timer

300

sv, release

A vote that fails cannot be re-submitted for this long

sv\_vote\_issue\_kick\_allowed

true

sv, nf, rep, release

Can people hold votes to kick players from the server?

sv\_vote\_issue\_loadbackup\_allowed

true

sv, nf, rep, release

Can people hold votes to load match from backup?

sv\_vote\_issue\_loadbackup\_spec\_authoritative

false

sv, release

When enabled, admins load match from backup without players vote

sv\_vote\_issue\_loadbackup\_spec\_only

false

sv, nf, rep, release

When enabled, only admins load match from backup

sv\_vote\_issue\_loadbackup\_spec\_safe

true

sv, release

When enabled, admins load match from backup in safe time of the round only

sv\_vote\_issue\_pause\_match\_spec\_only

false

sv, nf, rep, release

When enabled, only admins start technical pause

sv\_vote\_issue\_restart\_game\_allowed

false

sv, release

Can people hold votes to restart the game?

sv\_vote\_kick\_ban\_duration

15

sv, nf, rep, release

How long should a kick vote ban someone from the server? (in minutes)

sv\_vote\_quorum\_ratio

0.501

sv, release

The minimum ratio of players needed to vote on an issue to resolve it.

sv\_vote\_timer\_duration

15

sv, release

How long to allow voting on an issue

sv\_vote\_to\_changelevel\_before\_match\_point

false

sv, rep, release

Restricts vote to change level to rounds prior to match point (default 0, vote is never disallowed)

sv\_warmup\_to\_freezetime\_delay

4

sv, cl, rep, release

Delay between end of warmup and start of match.

sv\_watchtransmit

\-2

sv, release

Watch NetworkStateChanged info for this entity index.

sv\_wateraccelerate

10

sv, cl, nf, rep, release

sv\_waterfriction

1

sv, cl, nf, rep, release

sv\_weapon\_encumbrance\_per\_item

0.85

sv, cl, rep, release

sv\_weapon\_encumbrance\_scale

0

sv, cl, rep, release

sv\_weapon\_require\_use\_grace\_period

1

sv, release

sv\_workshop\_allow\_other\_maps

true

sv, release

When hosting a workshop collection, users can play other workshop map on this server when it is empty and then mapcycle into this server collection.

sys\_info

cmd

Print system information to the console

sys\_minidumpspewlines

2000

release

Lines of crash dump console spew to keep.

tablet\_c4\_dist\_max

3000

sv, cl, rep, release

tablet\_c4\_dist\_min

400

sv, cl, rep, release

teammenu

cmd

cl, server\_can\_execute

Show team selection window

telemetry\_message

cmd

sv, cheat

Place a message in the telemetry timeline

telemetry\_toggle\_timespan

cmd

sv, cheat

Starts/stops a timespan with an ever increasing name.

tenfoot\_match

cmd

cl, linked

\[prefix\]

tenfoot\_pickle\_dictionaries

cmd

cl, linked

compiles daisy wheel input dictionaries to more performant form

tenfoot\_pickle\_single\_dictionary

cmd

cl, linked

\[language\] compiles one daisy wheel input dictionary

tenfoot\_text\_hotspots

cmd

cl, linked

find text autosuggest hot spots

Test\_Checkpoint

cmd

Indicate to a test script that a checkpoint has been reached

Test\_CreateEntity

cmd

sv, cheat

test\_dispatcheffect

cmd

sv, cheat

Test a clientside dispatch effect. Usage

Test\_EHandle

cmd

sv, cheat

test\_entity\_blocker

cmd

sv, cheat

Test command that drops an entity blocker out in front of the player.

Test\_ExitProcess

cmd

cheat

Test\_ExitProcess - immediately kill the process.

test\_list\_entities

cmd

sv, cheat

test-list entities

Test\_Loop

cmd

Test\_Loop - loop back to the specified loop start point unconditionally.

Test\_LoopCount

cmd

Test\_LoopCount - loop back to the specified loop start point the specified # of times.

Test\_LoopForNumSeconds

cmd

Test\_LoopForNumSeconds - loop back to the specified start point for the specified # of seconds.

Test\_RandomChance

cmd

Test\_RandomChance <percent chance, 0-100> <token2...> - Roll the dice and maybe run the command following the percentage chance.

Test\_RandomPlayerPosition

cmd

sv, cheat

Test\_StartLoop

cmd

Test\_StartLoop - Denote the start of a loop. Really just defines a named point you can jump to.

Test\_StartScript

cmd

Start a test script running..

think\_limit

10

sv, cl, rep, release

Maximum think time in milliseconds, warning is printed if this is exceeded.

thirdperson

cmd

cl, cheat, execute\_per\_tick

Switch to thirdperson camera.

thirdperson\_lockcamera

false

cl, rep, cheat

thirdperson\_mayamode

cmd

cl, cheat

Switch to thirdperson Maya-like camera controls.

thirdpersonshoulder

cmd

cl

Switch to thirdperson-shoulder camera.

timedemo

cmd

Play a demo and report performance info.

timedemoquit

cmd

Play a demo, report performance info, and then exit

timeleft

cmd

sv

prints the time remaining in the match

timeout\_ct\_start

cmd

sv

timeout\_terrorist\_start

cmd

sv

toggle

cmd

norecord

Toggles specified convar value on and off.

toggleconsole

cmd

norecord

Show/hide the console.

tr\_do\_reduce

true

rep, cheat

tr\_epsilon\_t\_junction

0.01

rep, cheat

tr\_max\_acceptable\_edge\_length

10000

rep, cheat

tr\_openedge\_penalty

10

rep, cheat

traceattack

cmd

sv

traceattack damage hitgroup

trusted\_launch

0

cl, a

Trusted launch status

tv\_advertise\_watchable

false

prot, nf, norecord, release

GOTV advertises the match as watchable via game UI, clients watching via UI will not need to type password

tv\_allow\_autorecording\_index

\-1

sv, release

When >=0 restricts autorecording only to the specified TV index

tv\_allow\_camera\_man\_override

false

release

Allows cameraman\_override to have effect. When this is set, the primary interactive caster will have all the relevant fields present in all network packets, in every snapshot. This allows the secondary cameraman (-interactivecaster that connects to a tv port) to override those fields some seconds later regardless of whether they changed originally or not.

tv\_allow\_camera\_man\_steamid

0

sv, release

Allows tournament production cameraman to run csgo.exe -interactivecaster on SteamID 7650123456XXX and be the camera man.

tv\_allow\_camera\_man\_steamid2

0

sv, release

Allows tournament production tv cameraman to run csgo.exe -interactivecaster on SteamID 7650123456XXX and be the tv camera man.

tv\_allow\_static\_shots

true

sv, release

Auto director uses fixed level cameras for shots

tv\_autorecord

false

release

Automatically records all games as SourceTV demos.

tv\_autoretry

true

release

Relay proxies retry connection after network timeout

tv\_broadcast

false

release

Automatically broadcasts all games as GOTV demos through Steam.

tv\_broadcast1

false

release

Automatically broadcasts all games as GOTV\[1\] demos through Steam.

tv\_broadcast\_keyframe\_interval

3

release

The frequency, in seconds, of sending keyframes and delta fragments to the broadcast relay server

tv\_broadcast\_keyframe\_interval1

3

release

The frequency, in seconds, of sending keyframes and delta fragments to the broadcast1 relay server

tv\_broadcast\_max\_requests

20

release

Max number of broadcast http requests in flight. If there is a network issue, the requests may start piling up, degrading server performance. If more than the specified number of requests are in flight, the new requests are dropped.

tv\_broadcast\_max\_requests1

20

release

Max number of broadcast1 http requests in flight. If there is a network issue, the requests may start piling up, degrading server performance. If more than the specified number of requests are in flight, the new requests are dropped.

tv\_broadcast\_resend

cmd

resend broadcast data to broadcast relay

tv\_broadcast\_startup\_resend\_interval

10

release

The interval, in seconds, of re-sending startup data to the broadcast relay server (useful in case relay crashes, restarts or startup data http request fails)

tv\_broadcast\_status

cmd

Print out broadcast status

tv\_broadcast\_url

http

//localhost

8080

tv\_broadcast\_url1

http

//localhost

8080

tv\_chatgroupsize

0

release

Set the default chat group size

tv\_chattimelimit

0.2

release

Limits spectators to chat only every n seconds

tv\_clients

cmd

Shows list of connected SourceTV clients.

tv\_debug

0

release

SourceTV debug info.

tv\_delay

105

sv, release

SourceTV broadcast delay in seconds

tv\_delaymapchange

true

sv, release

Delays map change until broadcast is complete

tv\_deltacache

2

release

Enable delta entity bit stream cache

tv\_dispatchmode

1

release

Dispatch clients to relay proxies

tv\_enable

false

nf, release

Activates SourceTV on server.

tv\_enable1

false

nf, release

Activates SourceTV\[1\] on server.

tv\_enable\_delta\_frames

true

release

Indicates whether or not the tv should use delta frames for storage of intermediate frames. This takes more CPU but significantly less memory.

tv\_listen\_voice\_indices

0

cl, user

Bitfield of playerslots to listen to voice messages from when connected to SourceTV, default is none

tv\_listen\_voice\_indices\_h

0

cl, user

High 32 bits of bitfield of playerslots to listen to voice messages from when connected to SourceTV, default is none

tv\_maxclients

128

release

Maximum client number on SourceTV server.

tv\_maxclients\_relayreserved

0

release

This number of relay client connections are reserved for SourceTV relays.

tv\_maxrate

0

release

Max SourceTV spectator bandwidth rate allowed, 0 == unlimited

tv\_mem

cmd

hltv memory statistics. Use with 'ent 10' (dump entity 10 memory usage) or 'top 8' (dump top 8 memory users) or 'class' CWorld (dump CWorld class)

tv\_msg

cmd

sv

Send a screen message to all clients.

tv\_name

SourceTV

release

SourceTV host name

tv\_nochat

false

a, user

Don't receive chat messages from other SourceTV spectators

tv\_overridemaster

false

release

Overrides the SourceTV master root address.

tv\_password

0

prot, nf, norecord, release

SourceTV password for all clients

tv\_playcast\_delay\_prediction

true

release

tv\_playcast\_delay\_resync

0

release

To alleviate intermittent network connectivity problems, this is the number of seconds to wait before actually re-syncing the stream after failure

tv\_playcast\_retry\_timeout

12

release

In case of intermittent network problems, how long should playcast retry fragment retrieval before resorting to resync

tv\_port

27020

release

Host SourceTV port

tv\_record

cmd

Starts SourceTV demo recording.

tv\_relay

cmd

Connect to SourceTV server and relay broadcast.

tv\_relaypassword

0

prot, nf, norecord, release

SourceTV password for relay proxies

tv\_relayradio

false

sv, release

Relay team radio commands to TV

tv\_relayvoice

true

release

Relay voice data

tv\_retry

cmd

Reconnects the SourceTV relay proxy.

tv\_show\_allchat

true

sv, release

tv\_snapshotrate

20

rep, release

Snapshots broadcast per second

tv\_snapshotrate1

32

release

Snapshots broadcast per second, GOTV\[1\]

tv\_spectator\_port\_offset

0

cl, release

tv\_status

cmd

Show SourceTV server status.

tv\_stop

cmd

Stops the SourceTV broadcast.

tv\_stoprecord

cmd

Stops SourceTV demo recording.

tv\_time\_remaining

cmd

sv, release

Print remaining tv broadcast time

tv\_timeout

20

release

SourceTV connection timeout in seconds.

tv\_title

SourceTV

release

Set title for SourceTV spectator UI

tv\_transmitall

false

rep, release

Transmit all entities (not only director view)

ui\_deepstats\_radio\_heat\_figurine

0

cl, a, release

ui\_deepstats\_radio\_heat\_tab

0

cl, a, release

ui\_deepstats\_radio\_heat\_team

0

cl, a, release

ui\_deepstats\_toplevel\_mode

0

cl, a, release

ui\_inventorysettings\_recently\_acknowledged

0

cl, a, release

ui\_lobby\_draft\_enabled

false

cl, release

ui\_mainmenu\_bkgnd\_movie\_94408AE3

dust2

cl, a, release

Main menu background movie

ui\_nearbylobbies\_filter3

competitive

cl, a, release

ui\_news\_last\_read\_link

0

cl, a, release

ui\_playsettings\_custom\_preset

mg\_de\_dust2

cl, a, release

ui\_playsettings\_directchallengekey

SCA6R-G3PG-S23GT-VQ6Q

cl, a, release

ui\_playsettings\_flags\_listen\_casual

0

cl, a, release

ui\_playsettings\_flags\_listen\_competitive

32

cl, a, release

ui\_playsettings\_flags\_listen\_cooperative

0

cl, a, release

ui\_playsettings\_flags\_listen\_deathmatch

32

cl, a, release

ui\_playsettings\_flags\_listen\_scrimcomp2v2

0

cl, a, release

ui\_playsettings\_flags\_listen\_skirmish

0

cl, a, release

ui\_playsettings\_flags\_listen\_survival

0

cl, a, release

ui\_playsettings\_flags\_official\_casual

0

cl, a, release

ui\_playsettings\_flags\_official\_competitive

16

cl, a, release

ui\_playsettings\_flags\_official\_cooperative

0

cl, a, release

ui\_playsettings\_flags\_official\_deathmatch

32

cl, a, release

ui\_playsettings\_flags\_official\_scrimcomp2v2

0

cl, a, release

ui\_playsettings\_flags\_official\_skirmish

0

cl, a, release

ui\_playsettings\_flags\_official\_survival

0

cl, a, release

ui\_playsettings\_maps\_listen\_casual

mg\_de\_dust2

cl, a, release

ui\_playsettings\_maps\_listen\_competitive

mg\_de\_dust2

cl, a, release

ui\_playsettings\_maps\_listen\_deathmatch

mg\_de\_dust2

cl, a, release

ui\_playsettings\_maps\_listen\_scrimcomp2v2

mg\_de\_inferno

cl, a, release

ui\_playsettings\_maps\_listen\_skirmish

mg\_skirmish\_armsrace

cl, a, release

ui\_playsettings\_maps\_official\_casual

mg\_dust247

cl, a, release

ui\_playsettings\_maps\_official\_deathmatch

mg\_dust247

cl, a, release

ui\_playsettings\_maps\_workshop

0

cl, a, release

ui\_playsettings\_mode\_listen

competitive

cl, a, release

ui\_playsettings\_mode\_official\_v20

competitive

cl, a, release

ui\_playsettings\_prime

1

cl, a, release

ui\_playsettings\_survival\_solo

0

cl, a, release

ui\_playsettings\_warmup\_map\_name

de\_mirage

cl, a, release

ui\_popup\_weaponupdate\_version

2303

cl, a, release

ui\_setting\_advertiseforhire\_auto

1

cl, a, release

Whether users will automatically advertise for invites (0

ui\_setting\_advertiseforhire\_auto\_last

/competitive

cl, a, release

Which game mode users last used to advertise for invites

ui\_show\_subscription\_alert

0

cl, a, release

ui\_show\_unlock\_competitive\_alert

0

cl, a, release

ui\_steam\_overlay\_notification\_position

bottomleft

cl, a

Steam overlay notification position

ui\_steam\_overlay\_notification\_position\_horz

0

cl, a

Steam overlay notification position horizontal offset

ui\_steam\_overlay\_notification\_position\_vert

0

cl, a

Steam overlay notification position vertical offset

ui\_vanitysetting\_loadoutslot\_ct

melee

cl, a, release

ui\_vanitysetting\_loadoutslot\_t

smg0

cl, a, release

ui\_vanitysetting\_team

ct

cl, a, release

unbind

cmd

release

Unbind a key.

unbindall

cmd

release

Unbind all keys.

unpause

cmd

Clear the pause state of the server.

UpdateBinarySizes

cmd

Dumps the binary sizes to use for the game in loadaddress.vpc

url\_execute

cmd

cl

Executes url-based commands, used for incoming commands from url-based launches when the game's already running.

users

cmd

Show user info for players on server.

vconsole\_rcon\_server\_details

0

norecord, release, server\_cant\_query

when non-empty allows for easy vconsole connection to the dedicated server.

view\_punch\_decay

18

sv, cl, rep, cheat, release

Decay factor exponent for view punch

viewmodel\_always\_on

false

cl, cheat

Force the view model to draw, even when in 3rd person

viewmodel\_fov

60

cl, a

Viewmodel FOV

viewmodel\_offset\_randomize

false

cl, cheat

randomly change viewmodel offsets to visualize range

viewmodel\_offset\_x

1

cl, a

viewmodel\_offset\_x

viewmodel\_offset\_y

1

cl, a

viewmodel\_offset\_y

viewmodel\_offset\_z

\-1

cl, a

viewmodel\_offset\_z

viewmodel\_presetpos

1

cl, a

1

violence\_ablood

true

a

Draw alien blood

violence\_agibs

true

a

Show alien gib entities

violence\_hblood

true

a

Draw human blood

violence\_hgibs

true

a

Show human gib entities

vis\_debug\_currentcluster

cmd

Show the current cluster number

vis\_debug\_drawcluster

cmd

Add cluster # to visualization, (-1) to clear

vis\_debug\_dumpvisibleclusters

cmd

Show the list of visible clusters

vis\_debug\_find\_los

cmd

Find or clear the vis LOS to here

vis\_debug\_lock

cmd

Lock vis LOS origin to current

vis\_debug\_record\_start

cmd

Record a path to debug vis

vis\_debug\_record\_stop

cmd

Record a path to debug vis

vis\_debug\_show

cmd

Show/hide the vis debug visualization

vis\_debug\_sphere

cmd

Draw clusters in a sphere of radius around the camera

vis\_debug\_sunclusters

cmd

Showing clusters for sun/csm rendering. Red (full sun csm & lighting), Orange (no viewmodel sun or csm), Green (no sun at all)

vis\_debug\_tracelos

cmd

Trace rays and check vis from the current camera

vis\_force

false

sv, cheat

vismon\_poll\_frequency

0.5

sv, cheat

vismon\_trace\_limit

12

sv, cheat

vmem\_dump

cmd

Dump memory stats to log.

vmix\_debug\_list

cmd

Debug dump the list of available vmix graphs

vmix\_input

cmd

cheat

Set an input mix value

vmix\_output

cmd

cheat

Dump main graph control output values

voice\_always\_sample\_mic

false

a

For systems experiencing a hang/stall when using voice chat.

voice\_loopback

false

user

voice\_modenable

true

cl, a, clientcmd\_can\_execute

Enable/disable voice in this mod.

voice\_modenable\_toggle

cmd

cl

Toggle the voice\_modenable convar.

voice\_mute

cmd

Mute a specific Steam user

voice\_player\_speaking\_delay\_threshold

0.5

sv, cheat

voice\_reset\_mutelist

cmd

Reset all mute information for all players who were ever muted.

voice\_scale

0.6

cl, a, release

Volume of incoming VOIP

voice\_show\_mute

cmd

Show whether current players are muted.

voice\_test\_log\_send

false

release

voice\_threshold

4000

cl, a

voice\_unmute

cmd

Unmute a specific Steam user, or `all` to unmute all connected players.

voice\_vox

0

cl, a, per\_user

Voice chat uses a vox-style always on

volume

1

a

Sound volume

volume\_fog\_clipmap\_update

1

cheat

volume\_fog\_clipmaps\_enabled

true

cheat

volume\_fog\_disable

false

cheat

volume\_fog\_dither\_scale

3

cheat

volume\_fog\_enable\_jitter

true

cheat

volume\_fog\_enable\_stereo

true

cheat

volume\_fog\_enlarge\_frusta

2

cheat

volume\_fog\_show\_volumes

false

cheat

vphys2\_friction\_factor

1

cheat

Change global friction factor

vphys2\_restitution\_factor

1

cheat

Change global restitution factor

vprof\_dump\_counters

cmd

Dump vprof counters to the console

vprof\_generate\_report

cmd

Generate a report to the console.

vprof\_generate\_report\_budget

cmd

Generate a report to the console based on budget group.

vprof\_generate\_report\_hierarchy

cmd

Generate a report to the console.

vprof\_off

cmd

Disable vprof

vprof\_on

cmd

Enable vprof

vprof\_remote\_start

cmd

Request a VProf data stream from the remote server (requires authentication)

vprof\_remote\_stop

cmd

Stop an existing remote VProf data request

vprof\_reset

cmd

Reset the stats in VProf profiler

vprof\_reset\_peaks

cmd

Reset just the peak time in VProf profiler

vprof\_vtrace

cmd

Toggle whether vprof data is sent to VTrace

vtune

cmd

Controls VTune's sampling.

weapon\_accuracy\_forcespread

0

sv, cl, rep, release

Force spread to the specified value.

weapon\_accuracy\_nospread

false

sv, cl, rep, release

Disable weapon inaccuracy spread

weapon\_accuracy\_reset\_on\_deploy

false

sv, cl, rep, cheat, release

On deploy, forcibly reset weapon accuracy to zero.

weapon\_accuracy\_shotgun\_spread\_patterns

true

sv, cl, rep, release

weapon\_air\_spread\_scale

1

sv, cl, rep, release

Scale factor for jumping inaccuracy, set to 0 to make jumping accuracy equal to standing

weapon\_auto\_cleanup\_time

0

sv, cl, rep, release

If set to non-zero, weapons will delete themselves after the specified time (in seconds) if no players are near.

weapon\_debug\_spread\_gap

0.67

cl, cheat, per\_user

weapon\_debug\_spread\_show

0

cl, cheat, per\_user

Enables display of weapon accuracy; 1

weapon\_max\_before\_cleanup

0

sv, cl, rep, release

If set to non-zero, will remove the oldest dropped weapon to maintain the specified number of dropped weapons in the world.

weapon\_near\_empty\_sound

true

sv, cl, rep, cheat

weapon\_reticle\_knife\_show

true

sv, cl, rep, release

When enabled will show knife reticle on clients. Used for game modes requiring target id display when holding a knife.

weapon\_sound\_falloff\_multiplier

1

sv, cl, rep, cheat, release

Scaling for falloff of weapon firing sounds

world\_dump\_loaded\_worlds

cmd

Dump all of the worlds that we know about

world\_layer\_list

cmd

List all world layers

world\_layer\_set\_visible

cmd

Show or hide the specified world layer

writeid

cmd

Writes a list of permanently-banned user IDs to file.

writeip

cmd

Save the ban list to file.

writekeybindings

cmd

release

Saves current key bindings to disk.

zoom\_sensitivity\_ratio

1

cl, a, per\_user

Additional mouse sensitivity scale factor applied when FOV is zoomed in.

## What are commands in Counter Strike 2?

Commands in Counter-Strike 2 are text-based instructions that players, server administrators, or developers can input into the game's console to execute various actions, modify settings, or access different features.

These commands can help fine-tune the gameplay experience, configure the server, or assist in debugging and testing game elements.

Commands can be categorized into several types, including:

1.  General commands: These commands are used for general gameplay settings, such as adjusting the sensitivity of the mouse, enabling voice chat, or toggling the display of the HUD.
2.  Server commands: Server administrators can use these commands to manage and configure their servers, such as setting the maximum number of players, changing the map, or enabling specific game modes.
3.  Developer commands: These commands are primarily used by developers for debugging and testing purposes. They might include features like spawning objects, toggling the visibility of hitboxes, or displaying information on the game's performance.
4.  Cheat commands: Cheat commands, typically accessible only when sv\_cheats is enabled, allow players to modify the game in ways that give them an unfair advantage, such as giving themselves weapons, increasing their movement speed, or becoming invulnerable.

Note that using cheat commands on public servers is usually not allowed and can lead to being banned or penalized. Always use them responsibly and with the consent of other players, preferably in private matches or when testing the game's mechanics.

## Customizing Your Gameplay Experience

The beauty of **console commands in CS2** lies in the customization they offer. Want a different crosshair? Use the **crosshair settings** commands. Need to **remove all fps restrictions** for a smoother experience? There's a command for that. Want to **restart the game** quickly? Just input the right command.

For those looking to dive deeper into the world of **cs2 console commands**, **check out our guide** on GhostCap, where we've compiled a comprehensive **console command list** for Counter-Strike 2. Whether you're a newbie or a seasoned player, there's always something new to learn.

## Conclusion

The **developer’s console** in Counter-Strike 2 is an invaluable tool for players looking to enhance their gameplay experience. From adjusting fps to customizing in-game elements, the range of possibilities is vast. So, the next time you're in a CS2 match, remember that the power of the console is just a keystroke away.