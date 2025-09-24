const { debounce } = require("../../src/part2/debounce");

describe("Debounce", () => {
  let fn, debounced;

  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn();
    debounced = debounce(fn, 200);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("calls the function only once after 200ms of inactivity", () => {
    for (let i = 0; i < 3; i++) {
      debounced();
    }
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(199);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
