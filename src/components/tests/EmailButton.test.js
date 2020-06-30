import { JSDOM } from "jsdom";
import { createButton } from "../EmailButton";
import { createEmailsField } from "../EmailsField";
import { initField } from "../../index";

describe("EmailButton", () => {
  test("Create EmailButton component", () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    initField();
    createEmailsField("default");
    const clickyDos = jest.fn();
    const text = "Text";
    const buttonId = "default";
    createButton(text, clickyDos, buttonId);

    const button = document.getElementById(`emailButtons${text}${buttonId}`);
    expect(button.length).not.toBe(null);

    button.click();
    expect(clickyDos).toHaveBeenCalled();
    expect(button.innerHTML).toBe(text);
  });
});
