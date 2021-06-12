import { useFetchGifs } from "../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("tests on useFetchGifs", () => {
  const category = "Saturn";

  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an array of imgs and loading=false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
