import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import llms from "astro-llms-md";
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://https://panugr.github.io/parturi-kampaamo/',
  trailingSlash: "never",
  prefetch: true,
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [
    llms({

      name: "Parturi-Kampaamo",
      description: "Parturi-Kampaamo website",
      generateIndividualMd: false
    }),
    sitemap({
      lastmod: new Date(),
      customPages: [
        'https://https://panugr.github.io/parturi-kampaamo//llms.txt',
        'https://https://panugr.github.io/parturi-kampaamo//llms-full.txt'
      ],
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      },
      postcss: {
        plugins: isProduction ? [
          purgeCSSPlugin({
            content: ['./src/**/*.astro']
          })
        ] : []
      }
    }
  }
});
