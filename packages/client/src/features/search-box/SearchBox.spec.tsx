import { createRenderer } from "react-test-renderer/shallow";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  const renderer = createRenderer();

  beforeEach(() => {
    vi.mock("react-router-dom", () => ({
      useNavigate: () => vi.fn(),
    }));
    vi.mock("../../hooks/store.hook", () => ({
      useAppSelector: () => ({ searchBy: "test" }),
    }));
    renderer.render(<SearchBox />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    const actual = renderer.getRenderOutput();
    expect(actual.props.className).toBe("search-box");
  });
});
