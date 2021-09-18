import browser from "webextension-polyfill";

interface IenableElems {
  [key: Element["tagName"]]: boolean;
}

const sendKeyboardEvent = (elem: Element, code: KeyboardEvent["code"]) => {
  const event = new KeyboardEvent("keydown", {
    code,
  });

  return elem.dispatchEvent(event);
};

const enableElems: IenableElems = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true
};

browser.runtime.onMessage.addListener((request) => {
  const focusedElem = document.activeElement;

  if (!focusedElem) {
    return;
  }

  if (!enableElems[focusedElem.tagName]) {
    return;
  }

  switch (request.command) {
    case "select-prev": {
      const ok = sendKeyboardEvent(focusedElem, "ArrowUp");
      console.log("check if ok select-next", ok);
      break;
    }

    case "select-next": {
      const ok = sendKeyboardEvent(focusedElem, "ArrowDown");
      console.log("check if ok select-next", ok);
      break;
    }
  }
});
