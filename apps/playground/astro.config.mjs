import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Allow the monorepo root (…/astro-shared-packages) and its node_modules
const repoRoot = path.resolve(
  fileURLToPath(new URL("../../", import.meta.url))
);
const repoNodeModules = path.join(repoRoot, "node_modules");

export default defineConfig({
  vite: {
    plugins: [tailwind()],
    server: {
      fs: {
        // Use ABSOLUTE paths to fix Windows path normalization
        allow: [repoRoot, repoNodeModules],
      },
    },
  },
});
