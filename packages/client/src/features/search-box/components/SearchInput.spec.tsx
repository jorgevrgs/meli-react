import { createRenderer } from "react-test-renderer/shallow";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  const renderer = createRenderer();

  beforeEach(() => {
    renderer.render(<SearchInput />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    const actual = renderer.getRenderOutput();
    console.log({ actual: typeof actual.props.children[1].type });
    expect(actual.props.children[0].type).toBe("input");
    expect(actual.props.children[1].type).toBeInstanceOf(Function);
  });
});
