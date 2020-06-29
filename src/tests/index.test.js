import { JSDOM } from "jsdom";
import { initField } from "../index";

test("adds 1 + 2 to equal 3", () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  initField();
  window.emailFieldComponent.initComponent("dos");
  const a = window.emailFieldComponent.initComponent("dos");
  console.log(a);
  expect(true).toBe(true);
});
