import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  beforeEach(() => {
    render(<SearchInput />);

    screen.debug();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    expect(screen.getByText("SearchInput")).toBeDefined();
  });
});
