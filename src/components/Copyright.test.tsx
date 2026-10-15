import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Copyright } from "./Copyright";

describe("Copyright", () => {
  it("renders the given owner name", () => {
    render(<Copyright owner="Scott Milliorn" />);

    expect(screen.getByText(/Scott Milliorn/)).toBeInTheDocument();
  });

  it("renders the current year", () => {
    render(<Copyright owner="Scott Milliorn" />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });
});
