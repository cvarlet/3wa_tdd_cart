const { wakeUp } = require("../src/part1/seance5/13-timeout");
const { waitForBus } = require("../src/part1/seance5/14-interval");
const { fetchUser } = require("../src/part1/seance5/15-promise");

describe.skip("Séance 5", () => {
  jest.useFakeTimers();
  it("should wake up", async () => {
    // jest.useFakeTimers();
    const cb = jest.fn();
    const promise = wakeUp(cb);
    jest.advanceTimersByTime(5000);
    await promise;
    expect(cb).toHaveBeenCalledTimes(1);
    // jest.useRealTimers();
  });

  it("should expect a bus every 10 minutes", async () => {
    // jest.useFakeTimers();
    const cb = jest.fn();
    const promise = waitForBus(cb);
    jest.advanceTimersByTime(30 * 1000 * 60);
    await promise;
    expect(cb).toHaveBeenCalledTimes(3);
    // jest.useRealTimers();
  });

  it("should fetch a user", async () => {
    const mockApi = {
      getUser: jest.fn().mockResolvedValue({ id: 1, name: "Alice" }),
    };

    const user = await fetchUser(mockApi, 1);

    expect(mockApi.getUser).toHaveBeenCalledWith(1);
    expect(user).toEqual({ id: 1, name: "Alice" });
  });
});
