import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener((details) => {
  console.log('check details', details)
  //  if (reason === "install") {
    //  alert("Hello");
  //  }
});
