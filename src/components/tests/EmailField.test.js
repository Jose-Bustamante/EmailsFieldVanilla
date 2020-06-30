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
    emailField.onpaste({ target: emailField });
    emailField.value = "test2@asd.com";
    emailField.onkeyup({ target: emailField, which: 13 }, componentId);
    emailField.value = "test3@asd.com";
    emailField.onkeyup({ target: emailField, which: 32 }, componentId);
    emailField.value = "test4@@asd.com";
    emailField.onkeyup({ target: emailField, which: 188 }, componentId);
    emailField.value = "test5@asd.com";
    emailField.onblur({ target: emailField });

    const bubbles = document.getElementsByClassName("emailBubles");
    console.log(bubbles.length);
    expect(bubbles.length).toBe(5);

    bubbles[0].click();
    expect(bubbles.length).toBe(4);
  });
});
