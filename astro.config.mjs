import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        "fa6-brands": [
          "discord",
          "facebook-f",
          "x-twitter",
          "twitch",
          "youtube",
        ],
        mdi: [
          "search",
          "navigate-next",
          "navigate-before",
          "user",
          "calendar",
          "clock-time-nine-outline",
          "chevron-down",
        ],
        fa: ["long-arrow-right", "ellipsis-v"],
      },
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
