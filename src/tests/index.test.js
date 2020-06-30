import { JSDOM } from "jsdom";
import { initField } from "../index";

test("Main Element renders", () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  initField();
  window.emailFieldComponent.initComponent("dos");
  const mainElement = document.getElementById("emailContainerdos");
  expect(mainElement).not.toBe(null);
});

test("Error when duplicated ID", () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  try {
    window.emailFieldComponent.initComponent("dos");
    window.emailFieldComponent.initComponent("dos");
  } catch (e) {
    expect(e.message).toEqual("ID is in use");
  }
});

test("Buttons clicks", () => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  global.window.alert = jest.fn();

  const buttons = document.getElementsByClassName("emailButtons");

  buttons[0].click("dos");
  const emailBubbles = document.getElementsByClassName("emailButtons");
  expect(emailBubbles.length).toBeGreaterThan(0);

  buttons[1].click("dos");
  expect(global.window.alert).toHaveBeenCalled();

  expect(buttons[0].innerHTML).toEqual("Add Email");
  expect(buttons[1].innerHTML).toEqual("Get Emails Count");
});
