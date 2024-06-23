import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon({
    include: {
      "fa6-brands": ["discord"],
      mdi: ["search"],
      fa: ["long-arrow-right"]
    }
  }), mdx()]
});