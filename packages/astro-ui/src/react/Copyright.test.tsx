import { describe, it, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Copyright } from "./Copyright";

describe("Copyright", () => {
  test("Contains Correct Text", async () => {
    render(<Copyright />);

    const currentYear = new Date().getFullYear().toString();

    expect(
      screen.getByText(`Copyright ${currentYear} - All Rights Reserved`)
    ).toBeInTheDocument();
  });
});
