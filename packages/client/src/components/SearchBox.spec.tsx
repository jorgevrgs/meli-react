import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  beforeEach(() => {
    render(<SearchBox />);

    screen.debug();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    expect(screen.getByText("SearchBox")).toBeDefined();
  });
});
