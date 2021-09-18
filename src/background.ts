import browser from "webextension-polyfill";
//  Handle later
browser.commands.onCommand.addListener(async function (command) {
  console.log("check command", command);
  const currentTab = (
    await browser.tabs.query({ active: true, currentWindow: true })
  )[0];

  if (!currentTab.id) {
    return;
  }

  await browser.tabs.executeScript(currentTab.id, {
    file: "/dist/injection.js",
  });

  const result = await browser.tabs
    .sendMessage(currentTab.id, { command })
    .catch((e) => {
      return e;
    });

  console.log('check send result', result)
});
