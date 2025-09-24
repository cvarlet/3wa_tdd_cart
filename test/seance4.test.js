const { sayHello } = require("../src/part1/seance4/10-fn");
const { politeUser } = require("../src/part1/seance4/11-spy");
const { fetchData } = require("../src/part1/seance4/12-mock");
const { getData } = require("../src/part1/seance4/api");

jest.mock("../src/part1/seance4/api.js");

describe.skip("Séance 4", () => {
  it("should say hi to the user", () => {
    const user = "Alice";
    const mockSendMessage = jest.fn();

    sayHello(user, mockSendMessage);
    expect(mockSendMessage).toHaveBeenCalledWith("Hello Alice");
  });

  it("should call sayHello from user object", () => {
    const spy = jest.spyOn(politeUser, "sayHi");

    const user = politeUser;
    user.sayHi();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should mock api", () => {
    fetchData();
    expect(getData).toHaveBeenCalledTimes(1);
  });
});
