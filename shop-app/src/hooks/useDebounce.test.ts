import { renderHook, act } from "@testing-library/react";

import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("returns the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 300));

    expect(result.current).toBe("initial");
  });

  it("updates the value after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: "initial" },
      },
    );

    rerender({ value: "updated" });

    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe("updated");
  });

  it("cancels the previous timeout when the value changes quickly", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: "initial" },
      },
    );

    rerender({ value: "first update" });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    rerender({ value: "second update" });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toBe("second update");
  });
});
