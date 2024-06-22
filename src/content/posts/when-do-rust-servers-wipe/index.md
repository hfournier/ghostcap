---
wpId: 8067
title: 'When Do Rust Servers Wipe? Every Schedule You Need to Know'
description: 'If you''re new to the game of Rust, you might ...'
type: post
createdAt: 2023-08-09T21:16:04
modifiedAt: 2023-08-30T22:02:44
author: pedrotski
categories:
  - rust
featuredMedia:
  id: 8072
  src: "./When-Do-Rust-Servers-Wipe.jpg"
  alt: "When Do Rust Servers Wipe"
---


If you're new to the game of Rust, you might occasionally find players asking, "When do Rust servers wipe?" or “wen wipe?” In this comprehensive guide, we'll explain everything you need to know about Rust wipes, including the wipe schedule for 2023, Rust console edition wipe details, and more.

<img decoding="async" src="/images/posts/when-do-rust-servers-wipe/steamlogo.png" alt="Alt attribute missing" width="125" height="125" srcset="/images/posts/when-do-rust-servers-wipe/steamlogo.png 500w, /images/posts/when-do-rust-servers-wipe/steamlogo-24x24.png 24w, /images/posts/when-do-rust-servers-wipe/steamlogo-48x48.png 48w, /images/posts/when-do-rust-servers-wipe/steamlogo-96x96.png 96w, /images/posts/when-do-rust-servers-wipe/steamlogo-150x150.png 150w, /images/posts/when-do-rust-servers-wipe/steamlogo-300x300.png 300w" sizes="(max-width: 125px) 100vw, 125px" />

### Next Rust PC Wipe

<img decoding="async" src="/images/posts/when-do-rust-servers-wipe/rust-console.png" alt="Alt attribute missing" width="125" height="125" srcset="/images/posts/when-do-rust-servers-wipe/rust-console.png 500w, /images/posts/when-do-rust-servers-wipe/rust-console-24x24.png 24w, /images/posts/when-do-rust-servers-wipe/rust-console-48x48.png 48w, /images/posts/when-do-rust-servers-wipe/rust-console-96x96.png 96w, /images/posts/when-do-rust-servers-wipe/rust-console-150x150.png 150w, /images/posts/when-do-rust-servers-wipe/rust-console-300x300.png 300w" sizes="(max-width: 125px) 100vw, 125px" />

### Next Rust Console Wipe

```html
<script>function updateCountdown(nextWipe, elementId) { var now = new Date().getTime(); var distance = nextWipe - now; var days = Math.floor(distance / (1000 * 60 * 60 * 24)); var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); var seconds = Math.floor((distance % (1000 * 60)) / 1000); document.getElementById(elementId).innerText = "Wipe in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s"; } function nextWipeDate() { var today = new Date(); var nextSteamWipe = new Date(today.getFullYear(), today.getMonth(), 1, 20, 0); // 8:00 PM var nextConsoleWipe = new Date(today.getFullYear(), today.getMonth(), 1, 23, 59); // 11:59 PM // Find the last Thursday of the month for Console while (nextConsoleWipe.getMonth() === today.getMonth()) { nextConsoleWipe.setDate(nextConsoleWipe.getDate() + 1); } nextConsoleWipe.setDate(nextConsoleWipe.getDate() - 1); while (nextConsoleWipe.getDay() !== 4) { // Thursday nextConsoleWipe.setDate(nextConsoleWipe.getDate() - 1); } // Find the first Thursday of the month for Steam while (nextSteamWipe.getDay() !== 4) { // Thursday nextSteamWipe.setDate(nextSteamWipe.getDate() + 1); } // If the dates are in the past, move to the next month if (nextConsoleWipe < today) { nextConsoleWipe.setMonth(nextConsoleWipe.getMonth() + 1); nextConsoleWipe.setDate(1); while (nextConsoleWipe.getDay() !== 4) { // Thursday nextConsoleWipe.setDate(nextConsoleWipe.getDate() - 1); } } if (nextSteamWipe < today) { nextSteamWipe.setMonth(nextSteamWipe.getMonth() + 1); nextSteamWipe.setDate(1); while (nextSteamWipe.getDay() !== 4) { // Thursday nextSteamWipe.setDate(nextSteamWipe.getDate() + 1); } } document.getElementById('consoleWipeDate').innerText = "Next wipe: " + nextConsoleWipe.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }); document.getElementById('steamWipeDate').innerText = "Next wipe: " + nextSteamWipe.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }); setInterval(function() { updateCountdown(nextConsoleWipe, 'consoleWipeCountdown'); updateCountdown(nextSteamWipe, 'steamWipeCountdown'); }, 1000); } nextWipeDate();</script>
```

## Rust Wipe Schedule 2023

<img decoding="async" width="1920" height="1080" src="/images/posts/when-do-rust-servers-wipe/Rust-Wipe-Schedule-2023.jpg" alt="Alt attribute missing" srcset="/images/posts/when-do-rust-servers-wipe/Rust-Wipe-Schedule-2023.jpg 1920w, /images/posts/when-do-rust-servers-wipe/Rust-Wipe-Schedule-2023-768x432.jpg 768w, /images/posts/when-do-rust-servers-wipe/Rust-Wipe-Schedule-2023-1536x864.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />

The Rust wipe schedule for 2023 follows a biweekly pattern for map wipes and a monthly pattern for BP wipes. The Rust console wipe schedule is similar to the Rust PC version, ensuring uniformity across every platform.

*   **Map Wipes**: Every Thursday
*   **BP Wipes**: Last Thursday of every month
*   **Force Wipe**: Last Thursday of the month
*   **Rust Console Edition Wipe**: Same as Rust PC

### Rust Console Edition

The Rust console edition servers follow the same wipe cycle as Rust PC. The Rust console edition has been designed to provide a seamless experience for both PC and console edition players.

### Wipe Dates and Times

*   **Next Rust Wipe**: Every Thursday
*   **Rust Console Wipe**: First Thursday of the month
*   **Force Wipe**: Last Thursday of each month at 11 am PST, 2 pm EST, 7 pm BST

### Private Server Wipes

Private server owners have the flexibility to set their wipe schedule. Some opt for shorter wipe cycles, while others follow the official wipe schedule. Join the freshly wiped servers to experience a new beginning in Rust.

## Understanding Rust Wipes

<img decoding="async" width="1920" height="1080" src="/images/posts/when-do-rust-servers-wipe/Understanding-Rust-Wipes.jpg" alt="Alt attribute missing" srcset="/images/posts/when-do-rust-servers-wipe/Understanding-Rust-Wipes.jpg 1920w, /images/posts/when-do-rust-servers-wipe/Understanding-Rust-Wipes-768x432.jpg 768w, /images/posts/when-do-rust-servers-wipe/Understanding-Rust-Wipes-1536x864.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />

Rust wipes are essential for maintaining the [stability of the game](https://rust.fandom.com/wiki/Wipe). A wipe will take place to reset the progress of players, including loot in Rust, blueprints (BP), and everything a player has created. Rust wipes explained here include two main types: map wipe and Rust BP wipe.

### Map Wipe

Map wipes occur every Thursday on official servers. The wipe takes place to refresh the in-game environment, and it follows a predictable and easy-to-follow pattern.

### BP Wipe

BP wipes are more sporadic, usually happening on the first Thursday of every month at 11am PST, 2 pm EST, and 7 pm BST. Blueprint wipes reset the technological advancements of players, making the game fresh for new players and veterans alike.

## Why Wipes for Rust are Necessary

Wipes for Rust are essential to maintain balance and fairness. Since we know that developers will completely wipe servers once a month, it helps in leveling the playing field. Forced [Rust server](https://www.ghostcap.com/rust-server-hosting/) wipes will delete everything, including loot and blueprints.

## Understanding Wipe Terms

*   **Rust Server Wipe**: General term for any wipe in Rust.
*   **Rust Console Wipe**: Specific to Rust console edition.
*   **Force Wipe**: A wipe that is mandated by the developers, Facepunch.
*   **BP Wipes Explained**: Blueprint wipes reset technological progress.
*   **Wipe Every**: Refers to the regularity of wipes.

## Conclusion

Understanding when Rust servers wipe is crucial for both new and experienced Rust players. Whether it's the next Rust console wipe or knowing when the server wipes on Rust PC, being aware of the wipe date helps players plan their strategies.

From the first to join the freshly wiped servers, so we want to have a predictable and easy-to-follow pattern, to understanding the urge for players to be among the first to join, this guide covers everything. The wipe schedule is as predictable as possible, but in some cases, it might be needed to maintain the stability of the game.

With this guide, we’ve explained everything you need to know about Rust wipes, including details about Rust console edition wipe, Rust wipe schedule, and more. Now you can build your best base, double 11 your efforts, and enjoy the game without worrying about when the next wipe will take place.

Happy gaming!