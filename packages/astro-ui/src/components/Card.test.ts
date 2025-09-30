import { describe, it, expect, test } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Card from "./Card.astro";

test("Card", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {});

  expect(result).toContain("Card");
});
