import browser from "webextension-polyfill";

browser.commands.onCommand.addListener(async function (command) {
  const currentTab = (
    await browser.tabs.query({ active: true, currentWindow: true })
  )[0];

  if (!currentTab.id) {
    return;
  }

  const result = await browser.tabs
    .sendMessage(currentTab.id, { command })
    .catch((e) => {
      return e;
    });
});
