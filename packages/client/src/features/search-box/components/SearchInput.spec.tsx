import { createRenderer } from "react-test-renderer/shallow";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  const renderer = createRenderer();
  const onSearch = vi.fn();
  const mockEvent = {
    preventDefault: vi.fn(),
  };

  beforeEach(() => {
    renderer.render(<SearchInput onSearch={onSearch} />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    const actual = renderer.getRenderOutput();
    expect(actual.props.children[0].type).toBe("input");
    expect(actual.props.children[1].type).toBeInstanceOf(Function);
  });

  it("should call onSearch when the button is clicked", () => {
    const actual = renderer.getRenderOutput();
    const button = actual.props.children[1];
    button.props.onClick(mockEvent);
    expect(onSearch).toHaveBeenCalled();
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
