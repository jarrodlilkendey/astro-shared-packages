/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    name: "astro-component-testing",
    environment: "node",
    include: ["src/components/**.test.{ts,tsx}"],
    setupFiles: ["./vitest.setup.node.ts"],
    globals: true,

    projects: [
      {
        name: "astro-component-testing",
        extends: true,
      },
      {
        test: {
          name: "react-component-testing",
          environment: "jsdom",
          include: ["src/react/**/*.test.tsx"],
          setupFiles: ["./vitest.setup.jsdom.ts"],
        },
      },
    ],

    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["text", "html", "lcov"],
      include: ["src/**/*.{ts,tsx,astro}"],
      exclude: ["src/**/*.test.*", "**/*.d.ts", "src/index.ts"],
      thresholds: {
        lines: 90,
        functions: 90,
        statements: 90,
        branches: 80,
      },
    },
  },
});
