import { JSDOM } from "jsdom";
import { createButton } from "../EmailButton";
import { initField } from "../../index";

test("adds 1 + 2 to equal 3", () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  initField();
  window.emailFieldComponent.initComponent("dos");
  window.emailFieldComponent.initComponent("dos");
  // createButton();
  expect(true).toBe(true);
});
