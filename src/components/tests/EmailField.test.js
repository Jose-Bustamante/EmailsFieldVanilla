import { JSDOM } from "jsdom";
import { createEmailsField } from "../EmailsField";
import { initField } from "../../index";

describe("EmailField", () => {
  test("Create EmailField component", () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    const componentId = "default";
    initField(componentId);
    createEmailsField(componentId);
    const emailField = document.getElementById(`emailTextField${componentId}`);

    // Focus the element on click
    emailField.click();
    expect(global.document.activeElement).toBe(emailField);

    // on paste
    window.clipboardData = {
      getData: function () {
        return "test@asd.com";
      },
    };
    emailField.onpaste({ target: emailField }, "test@asd.com");
  });
});
