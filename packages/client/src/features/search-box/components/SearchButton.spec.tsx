import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchButton from "./SearchButton";

describe("SearchButton", () => {
  beforeEach(() => {
    render(<SearchButton />);

    screen.debug();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    expect(screen.getByText("SearchButton")).toBeDefined();
  });
});
