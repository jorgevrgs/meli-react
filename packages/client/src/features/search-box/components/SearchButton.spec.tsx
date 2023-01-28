import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchButton from "./SearchButton";

describe("SearchButton", () => {
  const onClick = vi.fn();

  beforeEach(() => {
    render(<SearchButton onClick={onClick} />);

    screen.debug();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render a button", () => {
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should call onClick when clicked", () => {
    screen.getByRole("button").click();

    expect(onClick).toHaveBeenCalled();
  });
});
