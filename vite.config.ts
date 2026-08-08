import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: "/Liftbook-site/",
  plugins: [
    react(),
    command === "serve" && {
      name: "liftbook-development-csp",
      transformIndexHtml(html: string) {
        return html.replace(
          "script-src 'self'; img-src 'self'; style-src 'self';",
          "script-src 'self' 'unsafe-inline'; connect-src 'self' ws:; img-src 'self'; style-src 'self' 'unsafe-inline';",
        );
      },
    },
  ].filter(Boolean),
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        privacyPolicy: fileURLToPath(
          new URL("./privacy-policy/index.html", import.meta.url),
        ),
      },
    },
  },
}));
