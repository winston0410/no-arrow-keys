import browser from "webextension-polyfill";
import { createKey } from "./key"
import type { IKey } from "./key"

interface IEnableElems {
  [key: Element["tagName"]]: boolean;
}

const arrowDown = createKey("ArrowDown", 40);
const arrowUp = createKey("ArrowUp", 38);

const sendKeyboardEvent = (elem: Element, key: IKey) => {
  const event = new KeyboardEvent("keydown", {
    ...key,
    bubbles: true,
    cancelable: true,
  });

  return elem.dispatchEvent(event);
};

const enableElems: IEnableElems = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

browser.runtime.onMessage.addListener((request) => {
  if (!document.hasFocus()) {
    return;
  }

  const focusedElem = document.activeElement as Element;

  if (!enableElems[focusedElem.tagName]) {
    return;
  }

  switch (request.command) {
    case "select-prev": {
      const ok = sendKeyboardEvent(focusedElem, arrowUp);
      break;
    }

    case "select-next": {
      const ok = sendKeyboardEvent(focusedElem, arrowDown);
      break;
    }
  }
});
