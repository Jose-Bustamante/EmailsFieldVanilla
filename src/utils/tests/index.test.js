import { JSDOM } from "jsdom";
import { checkBrowser } from "../browserUtils";
import isValidEmail from "../isValidEmail";

describe("isValidEmail", () => {
  test("Is valid email true", () => {
    var a = isValidEmail("asdads@asdasd.com");
    expect(a).toBe(true);
  });
  test("Is valid email false", () => {
    var a = isValidEmail("asdasd.com");
    expect(a).toBe(false);
  });
});

describe("checkBrowser", () => {
  beforeEach(() => {
    var dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
  });
  test("Detects Firefox", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: '"Firefox/10.0"',
      enumerable: true,
      configurable: true,
    });
    var a = checkBrowser();
    expect(a).toBe("Firefox");
  });

  test("Detects Chrome", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: '"Chrome/83.0.4103.116"',
      configurable: true,
    });

    var a = checkBrowser();
    console.log(a);
    expect(a).toBe("Chrome");
  });

  test("Detects IE11", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: '"Trident/7.0"',
      configurable: true,
    });

    var a = checkBrowser();
    console.log(a);
    expect(a).toBe("IE11");
  });
});
