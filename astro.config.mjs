import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";

const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");

export default defineConfig({
  site: process.env.SITE_URL || "https://mutekigamer.github.io",
  base: base || "/",
  trailingSlash: "always",
  redirects: {
    "/research/": `${base}/`,
    "/construction-agent/": `${base}/walkscribe/`,
  },
  integrations: [mdx()],
  markdown: { processor: unified({ gfm: true }) },
  server: { host: "127.0.0.1", port: 4322 },
  image: { responsiveStyles: true },
});
